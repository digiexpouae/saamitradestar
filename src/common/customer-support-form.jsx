"use client";

/**
 * SupportTicketForm.jsx
 *
 * Standard Next.js (App Router) client component — plain JavaScript.
 * Stack: React Hook Form + Zod resolver + Tailwind CSS.
 *
 * Install dependencies:
 *   npm install react-hook-form zod @hookform/resolvers
 *
 * Usage:
 *   import SupportTicketForm from "@/components/SupportTicketForm";
 *   export default function Page() { return <SupportTicketForm />; }
 *
 * Backend integration:
 *   - GET  {API_BASE}/api/CustomerCare/portal-parties          -> populate Company select + email autofill
 *   - POST {API_BASE}/api/CustomerCare/portal-ticket            -> submit a new ticket
 *   - GET  {API_BASE}/api/CustomerCare/portal-track?q=...       -> search tickets by ref/email/phone
 *   - GET  {API_BASE}/api/CustomerCare/portal-ticket/{no}       -> ticket detail (used by track results)
 *
 * Set NEXT_PUBLIC_CARE_API_BASE in your .env(.local) to point at the API,
 * e.g. NEXT_PUBLIC_CARE_API_BASE=https://ilmsapi.saamitradestar.com
 * Leave it unset/empty for same-origin hosting.
 */

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Clock,
  PackageX,
  Shuffle,
  Truck,
  Receipt,
  FileText,
  MapPin,
  MessageCircle,
  PenLine,
  Search,
} from "lucide-react";

// ---------------------------------------------------------------------------
// 0. API base + shared fetch helpers
// ---------------------------------------------------------------------------

const API_BASE = process.env.NEXT_PUBLIC_CARE_API_BASE ?? "";

async function apiGet(path) {
  const res = await fetch(API_BASE + path);
  if (!res.ok) throw new Error(`GET ${path} failed with status ${res.status}`);
  return res.json();
}

async function apiPost(path, body) {
  const res = await fetch(API_BASE + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `POST ${path} failed with status ${res.status}`);
  }
  return res.json().catch(() => ({}));
}

// ---------------------------------------------------------------------------
// 1. Zod schema — single source of truth for validation
//    Category values match the backend's Category keys.
// ---------------------------------------------------------------------------

const CATEGORIES = [
  { value: "delay", label: "Delivery Delay", Icon: Clock },
  { value: "damage", label: "Damaged / Missing", Icon: PackageX },
  { value: "wrong", label: "Wrong Delivery", Icon: Shuffle },
  { value: "pickup", label: "Pickup Request", Icon: Truck },
  { value: "billing", label: "Billing / Invoice", Icon: Receipt },
  { value: "pod", label: "POD / Documents", Icon: FileText },
  { value: "track", label: "Tracking Help", Icon: MapPin },
  { value: "general", label: "Other", Icon: MessageCircle },
];

const URGENCY_LEVELS = ["Normal", "Urgent", "Critical"];
// Maps the customer-facing urgency to the Priority_ID the backend expects.
// Adjust these IDs to match your Priority lookup table.
const URGENCY_TO_PRIORITY_ID = { Normal: 3, Urgent: 2, Critical: 1 };

const ticketSchema = z.object({
  category: z.enum(CATEGORIES.map((c) => c.value), {
    required_error: "Please choose a category.",
  }),
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  company: z.string().trim().optional().or(z.literal("")),
  email: z.string().trim().min(1, "Email is required.").email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number."),
  consignment: z.string().trim().optional().or(z.literal("")),
  urgency: z.enum(URGENCY_LEVELS).default("Normal"),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(120, "Subject is too long."),
  message: z.string().trim().min(10, "Please describe your issue in at least 10 characters."),
});

// ---------------------------------------------------------------------------
// 2. Submit function — posts the validated payload to the CustomerCare API
// ---------------------------------------------------------------------------

async function submitTicket(payload) {
  const consignmentNo = payload.consignment ? Number(payload.consignment) : null;

  return apiPost("/api/CustomerCare/portal-ticket", {
    // payload.company holds the Party_id selected from the live-fetched
    // combo; empty string if the customer left "— Select / Other —".
    Party_Id: payload.company ? Number(payload.company) : null,
    Contact_Person: payload.name,
    Contact_Phone: payload.phone,
    Contact_Email: payload.email,
    Category: payload.category,
    Priority_ID: URGENCY_TO_PRIORITY_ID[payload.urgency] ?? null,
    Consignment_No: Number.isFinite(consignmentNo) ? consignmentNo : null,
    Subject: payload.subject,
    Description: payload.message,
  });
}

// ---------------------------------------------------------------------------
// 3. Track-a-ticket: search + detail lookups
// ---------------------------------------------------------------------------

const trackSchema = z.object({
  query: z.string().trim().min(3, "Enter a reference number, email, or phone."),
});

async function trackTicket(query) {
  return apiGet(`/api/CustomerCare/portal-track?q=${encodeURIComponent(query)}`);
}

async function fetchTicketDetail(no) {
  return apiGet(`/api/CustomerCare/portal-ticket/${encodeURIComponent(no)}`);
}

const CATEGORY_BY_VALUE = Object.fromEntries(CATEGORIES.map((c) => [c.value, c]));

function TrackTicketPanel() {
  const [banner, setBanner] = useState(null);
  const [results, setResults] = useState(null);
  const [selected, setSelected] = useState(null); // full ticket detail once opened

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(trackSchema) });

  const onSubmit = async (data) => {
    setBanner(null);
    setResults(null);
    setSelected(null);
    try {
      const rows = await trackTicket(data.query);
      if (!rows || rows.length === 0) {
        setBanner({ type: "error", message: "No tickets found for that reference / contact." });
        return;
      }
      setResults(rows);
    } catch (err) {
      console.error("Ticket lookup failed:", err);
      setBanner({
        type: "error",
        message: "We couldn't find any tickets matching that. Please check and try again.",
      });
    }
  };

  const openTicket = async (no) => {
    setBanner(null);
    try {
      const detail = await fetchTicketDetail(no);
      setSelected(detail);
    } catch (err) {
      console.error("Failed to load ticket:", err);
      setBanner({ type: "error", message: "Could not load this ticket. Please try again." });
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-gray-900">Track Your Tickets</h2>
      <p className="mb-5 text-sm text-gray-500">
        Enter your reference number, or the email / phone you used, to see status and updates.
      </p>

      {banner && (
        <div className="mb-4 rounded-lg border border-[#ED3039] bg-[#FDEAEA] px-4 py-3 text-sm text-[#C71F27]">
          {banner.message}
        </div>
      )}

      {!selected && (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label className="mb-1.5 block text-xs font-semibold text-gray-500">
            Reference / Email / Phone
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              {...register("query")}
              type="text"
              placeholder="TKT-2607-0004 or you@company.com"
              className={inputClass(!!errors.query) + " sm:flex-1"}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#ED3039] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#C71F27] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Search size={16} strokeWidth={2.5} />
              {isSubmitting ? "Searching..." : "Find My Tickets"}
            </button>
          </div>
          {errors.query && <p className="mt-1 text-xs text-[#ED3039]">{errors.query.message}</p>}
        </form>
      )}

      {results && !selected && (
        <div className="mt-5 space-y-2">
          {results.map((t) => {
            const no = t.ticket_No ?? t.Ticket_No;
            const status = t.status ?? t.Status;
            const subject = t.subject ?? t.Subject ?? "";
            return (
              <button
                key={no}
                type="button"
                onClick={() => openTicket(no)}
                className="block w-full rounded-lg border border-gray-200 p-3 text-left text-sm transition-colors hover:border-gray-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{no}</span>
                  <span className="rounded-full bg-[#FDEAEA] px-2.5 py-0.5 text-xs font-semibold text-[#C71F27]">
                    {status}
                  </span>
                </div>
                <p className="mt-1 text-gray-500">{subject.split("\n")[0]}</p>
              </button>
            );
          })}
        </div>
      )}

      {selected && (
        <div className="mt-5">
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="mb-3 text-xs font-semibold text-gray-500 hover:text-gray-700"
          >
            ← Back to results
          </button>
          <TicketDetail ticket={selected} onReplySent={() => openTicket(selected.ticket_No ?? selected.Ticket_No)} />
        </div>
      )}
    </div>
  );
}

function TicketDetail({ ticket, onReplySent }) {
  const no = ticket.ticket_No ?? ticket.Ticket_No;
  const status = ticket.status ?? ticket.Status;
  const category = ticket.category ?? ticket.Category;
  const cat = CATEGORY_BY_VALUE[category];
  const messages = ticket.messages ?? ticket.Messages ?? [];
  const closed = status === "closed";

  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);
  const [replyError, setReplyError] = useState(null);

  const sendReply = async () => {
    const text = reply.trim();
    if (!text) return;
    setSending(true);
    setReplyError(null);
    try {
      await apiPost(`/api/CustomerCare/portal-ticket/${encodeURIComponent(no)}/reply`, { Text: text });
      setReply("");
      onReplySent?.();
    } catch (err) {
      console.error("Reply failed:", err);
      setReplyError("Could not send your reply. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs font-bold text-gray-700">{no}</span>
        <span className="rounded-full bg-[#FDEAEA] px-2.5 py-0.5 text-xs font-semibold text-[#C71F27]">
          {status}
        </span>
        {cat && <span className="rounded px-2 py-0.5 text-xs font-semibold text-gray-600">{cat.label}</span>}
      </div>

      <div className="mt-3 max-h-72 space-y-3 overflow-y-auto rounded-lg bg-gray-50 p-3">
        {messages.map((m, i) => {
          const type = m.message_Type ?? m.Message_Type ?? "agent";
          const author = m.author_Name ?? m.Author_Name ?? "Care Team";
          const text = m.message_Text ?? m.Message_Text ?? "";
          const isCust = type === "customer";
          return (
            <div key={i} className="rounded-lg border border-gray-200 bg-white p-2.5 text-sm">
              <div className="mb-1 flex items-center gap-2">
                <span className="text-xs font-bold text-gray-900">{author}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    isCust ? "bg-blue-50 text-blue-700" : "bg-teal-50 text-teal-700"
                  }`}
                >
                  {isCust ? "You" : "Care Team"}
                </span>
              </div>
              <p className="whitespace-pre-wrap text-gray-600">{text}</p>
            </div>
          );
        })}
      </div>

      {closed && (
        <div className="mt-3">
          {replyError && <p className="mb-2 text-xs text-[#ED3039]">{replyError}</p>}
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            rows={3}
            placeholder="Type a message to the Care team…"
            className={inputClass(false) + " resize-y"}
          />
          <button
            type="button"
            onClick={sendReply}
            disabled={sending}
            className="mt-2 rounded-lg bg-[#ED3039] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#C71F27] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Reply"}
          </button>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// 4. Main component
// ---------------------------------------------------------------------------

export default function SupportTicketForm() {
  const [view, setView] = useState("raise"); // "raise" | "track"
  const [banner, setBanner] = useState(null); // { type: "success" | "error", message: string }
  const [ticketRef, setTicketRef] = useState(null);

  // Company directory, fetched from /api/CustomerCare/portal-parties.
  const [companies, setCompanies] = useState([]);
  const [partyEmail, setPartyEmail] = useState({}); // Party_id -> Party_Email

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const rows = await apiGet("/api/CustomerCare/portal-parties");
        if (cancelled) return;
        const list = rows.map((p) => ({
          code: p.party_id ?? p.Party_id,
          name: p.party_Name ?? p.Party_Name,
        }));
        const emailMap = {};
        rows.forEach((p) => {
          const id = p.party_id ?? p.Party_id;
          const mail = p.party_Email ?? p.Party_Email;
          if (mail) emailMap[id] = mail;
        });
        setCompanies(list);
        setPartyEmail(emailMap);
      } catch (err) {
        console.error("Failed to load parties:", err);
        setCompanies([]); // Company field falls back to free typing if this fails
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ticketSchema),
    defaultValues: { urgency: "Normal", company: "" },
  });

  const category = watch("category");
  const urgency = watch("urgency");

  const onCompanyChange = (e) => {
    const partyId = e.target.value;
    setValue("company", partyId, { shouldDirty: true });
    const mail = partyEmail[partyId];
    // Only autofill if the customer hasn't already typed an email.
    if (mail && !getValues("email")?.trim()) {
      setValue("email", mail, { shouldValidate: true, shouldDirty: true });
    }
  };

  const onSubmit = async (data) => {
    setBanner(null);
    try {
      const result = await submitTicket(data);
      const no = result?.ticket_No ?? result?.Ticket_No;
      setTicketRef(no ?? null);
      setBanner({
        type: "success",
        message: no
          ? `Your ticket ${no} has been submitted. Our Care team will be in touch shortly.`
          : "Your ticket has been submitted. Our Care team will be in touch shortly.",
      });
      reset({ urgency: "Normal", company: "" });
    } catch (err) {
      console.error("Ticket submission failed:", err);
      setBanner({
        type: "error",
        message: "We couldn't submit your ticket. Please check your connection and try again.",
      });
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      {/* Hero */}
      <div className="mb-6 rounded-2xl bg-gradient-to-br from-[#ED3039] to-[#C71F27] px-7 py-8 text-center text-white">
        <h1 className="mb-2 text-xl font-bold sm:text-2xl">How can we help you today?</h1>
        <p className="mx-auto max-w-md text-sm opacity-90">
          Raise a support ticket for any delivery, pickup, billing or tracking need — our Care
          team responds fast, and you can track progress any time.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => setView("raise")}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
              view === "raise"
                ? "bg-white/15 text-white ring-1 ring-white/40"
                : "bg-white text-[#1C1C1E] hover:bg-white/90"
            }`}
          >
            <PenLine size={16} strokeWidth={2.5} />
            Raise a Ticket
          </button>
          <button
            type="button"
            onClick={() => setView("track")}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
              view === "track"
                ? "bg-white/15 text-white ring-1 ring-white/40"
                : "bg-white text-[#1C1C1E] hover:bg-white/90"
            }`}
          >
            <Search size={16} strokeWidth={2.5} />
            Track a Ticket
          </button>
        </div>
      </div>

      {view === "track" ? (
        <TrackTicketPanel />
      ) : (
        <>
          {/* Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">Raise a Support Ticket</h2>
            <p className="mb-5 text-sm text-gray-500">
              Tell us what you need. Fields marked <span className="text-[#ED3039]">*</span> are
              required.
            </p>

            {banner && (
              <div
                className={`mb-4 rounded-lg border px-4 py-3 text-sm ${
                  banner.type === "success"
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-[#ED3039] bg-[#FDEAEA] text-[#C71F27]"
                }`}
              >
                {banner.message}
                {banner.type === "success" && ticketRef && (
                  <button
                    type="button"
                    onClick={() => setView("track")}
                    className="ml-2 font-semibold underline underline-offset-2"
                  >
                    Track this ticket
                  </button>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
              {/* Category */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-500">
                  What is this about? <span className="text-[#ED3039]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {CATEGORIES.map((c) => {
                    const ActiveIcon = c.Icon;
                    return (
                      <button
                        key={c.value}
                        type="button"
                        onClick={() =>
                          setValue("category", c.value, { shouldValidate: true, shouldDirty: true })
                        }
                        className={`flex flex-col items-center gap-1.5 rounded-lg border px-2 py-3.5 text-xs transition-colors ${
                          category === c.value
                            ? "border-[#ED3039] bg-[#FDEAEA] ring-1 ring-[#ED3039]"
                            : "border-gray-200 bg-white hover:border-gray-300"
                        }`}
                      >
                        <ActiveIcon
                          size={18}
                          strokeWidth={2}
                          className={category === c.value ? "text-[#C71F27]" : "text-gray-500"}
                        />
                        {c.label}
                      </button>
                    );
                  })}
                </div>
                {errors.category && (
                  <p className="mt-1 text-xs text-[#ED3039]">{errors.category.message}</p>
                )}
              </div>

              {/* Name / Company */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Your Name" required error={errors.name?.message}>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Full name"
                    className={inputClass(!!errors.name)}
                  />
                </Field>
                <Field label="Company" error={errors.company?.message}>
                  <select
                    {...register("company")}
                    onChange={onCompanyChange}
                    className={inputClass(!!errors.company)}
                  >
                    <option value="">— Select / Other —</option>
                    {companies.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Email / Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Email" required error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="you@company.com"
                    className={inputClass(!!errors.email)}
                  />
                </Field>
                <Field label="Phone" required error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="10-digit mobile"
                    className={inputClass(!!errors.phone)}
                  />
                </Field>
              </div>

              {/* Consignment / Urgency */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Consignment / Docket No" error={errors.consignment?.message}>
                  <input
                    {...register("consignment")}
                    type="text"
                    placeholder="STL 2607 00000 (optional)"
                    className={inputClass(!!errors.consignment)}
                  />
                </Field>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-gray-500">Urgency</label>
                  <div className="flex gap-2">
                    {URGENCY_LEVELS.map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setValue("urgency", level)}
                        className={`flex-1 rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors ${
                          urgency === level
                            ? level === "Critical"
                              ? "border-[#ED3039] bg-[#FDEAEA] text-[#C71F27]"
                              : level === "Urgent"
                              ? "border-orange-400 bg-orange-50 text-orange-700"
                              : "border-green-500 bg-green-50 text-green-700"
                            : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subject */}
              <Field label="Subject" required error={errors.subject?.message}>
                <input
                  {...register("subject")}
                  type="text"
                  placeholder="Short summary of your issue"
                  className={inputClass(!!errors.subject)}
                />
              </Field>

              {/* Message */}
              <Field label="Message" required error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Describe your issue or request in detail..."
                  className={inputClass(!!errors.message) + " resize-y"}
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-[#ED3039] py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#C71F27] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit Ticket"}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// 5. Small helpers
// ---------------------------------------------------------------------------

function inputClass(hasError) {
  return `w-full rounded-lg border px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-[#ED3039] focus:ring-2 focus:ring-[#ED3039]/20 ${
    hasError ? "border-[#ED3039]" : "border-gray-200"
  }`;
}

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-gray-500">
        {label} {required && <span className="text-[#ED3039]">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-[#ED3039]">{error}</p>}
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * 6. Backend contract summary (already implemented server-side, per your
 *    HTML reference client — nothing to add on the Next.js side, this is
 *    just documentation of what the endpoints above expect/return).
 * ---------------------------------------------------------------------------
 *
 * GET /api/CustomerCare/portal-parties
 *   -> [{ party_id | Party_id, party_Name | Party_Name, party_Email | Party_Email }, ...]
 *
 * POST /api/CustomerCare/portal-ticket
 *   body: {
 *     Party_Id: number | null,
 *     Contact_Person: string,
 *     Contact_Phone: string,
 *     Contact_Email: string,
 *     Category: string,        // one of the CATEGORIES values above
 *     Priority_ID: number | null,
 *     Consignment_No: number | null,
 *     Subject: string,
 *     Description: string,
 *   }
 *   -> { ticket_No | Ticket_No: string, ... }
 *
 * GET /api/CustomerCare/portal-track?q={reference|email|phone}
 *   -> [{ ticket_No | Ticket_No, category | Category, status | Status,
 *          created_Date | Created_Date, subject | Subject }, ...]
 *
 * GET /api/CustomerCare/portal-ticket/{no}
 *   -> {
 *        ticket_No | Ticket_No, status | Status, category | Category,
 *        created_Date | Created_Date, agent_Name | Agent_Name,
 *        messages | Messages: [{
 *          message_Type | Message_Type: "customer" | "agent",
 *          author_Name | Author_Name, created_Date | Created_Date,
 *          message_Text | Message_Text
 *        }, ...]
 *      }
 *
 * POST /api/CustomerCare/portal-ticket/{no}/reply
 *   body: { Text: string }
 * ------------------------------------------------------------------------ */