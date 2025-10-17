"use client";
import { useState } from "react";

export default function ApplyForm({ className }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    countryCode: "+1", // ✅ Ad
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contactform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
             phone: `${formData.countryCode}${formData.phone}`,
          
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess("Form submitted successfully ✅");
        // Optionally redirect
        // window.location.replace("/thankyou");

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError(data.message || "Failed to send message.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`flex justify-center items-center pt-10 h-auto ${className}`}>
      <div className="bg-white rounded-2xl px-5 md:px-20 py-10 w-full max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-medium text-center mb-2">Get In Touch</h2>

        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium">Full Name*</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded-full px-4 py-2 mt-1"
              required
            />
          </div>

          {/* Email + Phone */}
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-full px-4 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone Number*</label>
              <div className="flex">
                <select 
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="border rounded-l-full px-2"
                >
         <option value="+1">+1</option>
  <option value="+44">+44</option>
  <option value="+61">+61</option>
  <option value="+64">+64</option>
  <option value="+91">+91</option>
  <option value="+92">+92</option>
  <option value="+971">+971</option>
  <option value="+974">+974</option>
  <option value="+966">+966</option>
  <option value="+20">+20</option>
  <option value="+27">+27</option>
  <option value="+60">+60</option>
  <option value="+62">+62</option>
  <option value="+63">+63</option>
  <option value="+65">+65</option>
  <option value="+81">+81</option>
  <option value="+82">+82</option>
  <option value="+86">+86</option>
  <option value="+33">+33</option>
  <option value="+34">+34</option>
  <option value="+39">+39</option>
  <option value="+49">+49</option>
  <option value="+55">+55</option>
  <option value="+52">+52</option>
  <option value="+234">+234</option>
                </select>
                <input
                  type="text"
                  name="phone"
                  placeholder="Mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-r-full px-4 py-2"
                  required
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border resize-none rounded-lg px-4 py-1 mt-1 h-24"
            />
          </div>

          {/* Feedback */}
          {success && <p className="text-green-600 text-center">{success}</p>}
          {error && <p className="text-red-600 text-center">{error}</p>}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full cursor-pointer bg-red-500 text-white font-medium py-2 rounded-full hover:bg-red-600 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
