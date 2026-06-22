import { useEffect, useState } from "react";
import Header from '../../layout/header';
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
export default function GlobalSearch({ data, id,  customerData, podData }) {
  const [consignmentNo, setConsignmentNo] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [deliveryData, setDeliveryData] = useState(Array.isArray(data) ? data : []);
  const [customer, setCustomer] = useState(Array.isArray(customerData) ? customerData : []);
  const [imgUrl, setimgUrl] = useState("")
  const [imgUrltwo, setimgUrltwo] = useState("")
  const router = useRouter();

  useEffect(() => {
    setimgUrl(podData[0]?.PodImageUrl)
    setimgUrltwo(podData[0]?.ScanImageUrl)

  }, [])

const manifestItem = customerData?.find((d) => d.STATUS_CODE === "Manifest");
const getConsistentDelay = (str) => {
  if (!str) return 0;
  // Creates a numeric hash from the string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  // Returns a delay between 0 and 20 minutes (in milliseconds)
  return (Math.abs(hash) % 21) * 60 * 1000; 
};
const isConnectionDone = (() => {
  if (!manifestItem?.Date || !manifestItem?.Time) return false;

  const [year, month, day] = manifestItem.Date.split("-").map(Number);
  const [timePart, meridiem] = manifestItem.Time.split(" ");
  let [hours, minutes] = timePart.split(":").map(Number);

  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;

  const manifestDate = new Date(year, month - 1, day, hours, minutes, 0);
  const manifestMs = manifestDate.getTime();
  
  // Base requirement: 3 hours passed
  const baseThreshold = 3 * 60 * 60 * 1000;
  
  // Add the deterministic delay based on the current ID
  const delay = getConsistentDelay(id); 
  if (Number.isNaN(manifestMs)) return false;
  // The status triggers only after 3 hours + the specific offset
  (Date.now() - manifestMs) >= (baseThreshold + delay)
  return (Date.now() - manifestMs) >= (baseThreshold + delay);
})();

// Add this helper function outside your component



function formatDateFromDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatTimeFromDate(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const meridiem = hours >= 12 ? "PM" : "AM";

  if (hours >= 12) hours -= 12;
  if (hours === 0) hours = 12;

  const minutesStr = String(minutes).padStart(2, "0");

  return `${hours}:${minutesStr} ${meridiem}`;
}
const processedHistory = React.useMemo(() => {
  if (!customerData || !Array.isArray(customerData)) return [];

  const history = [...customerData];
  const outscanIndex = history.findIndex(item => item.ReferenceType === "Outscan");
  if (isConnectionDone && outscanIndex !== -1) {
    const outscanItem = history[outscanIndex];

    const baseThreshold = 3 * 60 * 60 * 1000; // 3h in ms
    const delay = getConsistentDelay(id);      // in ms

    // Parse outscan Date + Time
    const [year, month, day] = outscanItem.Date.split("-").map(Number);
    const [timePart, meridiem] = outscanItem.Time.split(" ");
    let [hours, minutes] = timePart.split(":").map(Number);

    if (meridiem === "PM" && hours !== 12) hours += 12;
    if (meridiem === "AM" && hours === 12) hours = 0;

    const outscanDate = new Date(year, month - 1, day, hours, minutes, 0);

    // Add 3h + delay
    const connectionDate = new Date(
      outscanDate.getTime() + baseThreshold + delay
    );

    const connectionDoneEntry = {
      ...outscanItem,
      STATUS_CODE: "ConnectionDone",
      ReferenceType: "ConnectionDone",
     Date: formatDateFromDate(connectionDate),   // e.g. "2026-06-18"
  Time: formatTimeFromDate(connectionDate), 
    };

    history.splice(outscanIndex + 1, 0, connectionDoneEntry);
  }

  return history;
}, [customerData, isConnectionDone, id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const targetId = consignmentNo;
    router.push(`/tracking/${targetId}`);
    setSubmitted(true);
  };
  useEffect(() => {
    setDeliveryData(data);
    setCustomer(customerData);
  }, [data, customerData]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">
        Global Search
      </h1>

      {/* Search Bar */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row px-4 md:px-0 sm:items-center gap-3 mb-8"
      >
        <label className="text-gray-700 text-sm sm:text-base whitespace-nowrap font-bold">
          Enter Consignment Number :
        </label>
        <div className="flex flex-col sm:flex-row gap-3 md:w-full w-auto">
          <input
            type="text"
            placeholder="Tracking number"
            value={consignmentNo}
            onChange={(e) => setConsignmentNo(e.target.value)}
            className="border border-gray-300 rounded-full px-4 py-2 w-full sm:w-60 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition w-full sm:w-auto"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => {
                setConsignmentNo("");
                setSubmitted(false);
              }}
              className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition w-full sm:w-auto"
            >
              Back
            </button>
          </div>
        </div>
      </form>

      {/* Booking Details Section */}
      <div className="mb-6 px-4 md:px-0">
        <p className="text-base sm:text-lg mb-4">
          Booking Details for Consignment No : <span className="font-bold text-red-500">{id}</span>
        </p>

        {/* Booking Info */}
        <Field_two className={"bg-[#fff0f0] "} label={'POD'} data={imgUrl ? ('View POD 1') : ''} datatwo={imgUrltwo ? ('View POD 2') : ''} linkOne={imgUrl && imgUrl} linktwo={imgUrltwo && imgUrltwo} />
        {/* Booking Info */}

        {deliveryData?.length ? (
          deliveryData.map((item, index) => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
              key={index}
            >

              <div className="space-y-2">
                <Field label="Type :" data={item.Job_Name} />
                <Field label="Book Place :" data={item.Book_Place} />
                <Field
                  label="Book Date :"
                  data={
                    item?.Book_Dt
                      ? new Date(item.Book_Dt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: '2-digit',
                        year: 'numeric'
                      })
                      : "—"
                  }
                />
              </div>
              <div className="space-y-2">
                <Field label="Reference No :" data={item.Ref_No1} />
                <Field label="Delivery Place :" data={item.Del_Place} />
                <Field
                  label="Book Time:"
                  data={
                    item?.Book_Time
                      ? new Date(item.Book_Time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                      : "—"
                  }
                />                </div></div>
          ))
        ) : (
          <p className="text-gray-500 italic">No Booking Info Found</p>
        )}
      </div>
      <div className="mb-10">
        <h2 className="text-lg font-bold mb-3 text-red-600">Consignment Summary</h2>

        {/* Mobile View: Stacked Cards */}
        <div className="md:hidden space-y-4">
          {deliveryData?.length > 0 ? (
            deliveryData?.map((item, index) => (

              <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
                <div className="flex justify-between border-b pb-2 mb-2">
                  <span className="font-bold text-red-500">Consignor</span>
                  <span>{item?.Consignor_Name || "—"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <p><span className="text-gray-500 font-bold">Consignee:</span> {item?.Consignee_Name || "—"}</p>
                  <p><span className="text-gray-500 font-bold">Type:</span> {"—"}</p>
                  <p><span className="text-gray-500 font-bold">Services:</span> {item?.Services || "—"}</p>
                  <p><span className="text-gray-500 font-bold">Weight:</span> {item?.Act_Weight || "1"}</p>
                  <p><span className="text-gray-500 font-bold">Pkgs:</span> {item?.No_of_pkg || "1"}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-4 text-gray-500 italic">No Data Found</p>
          )}
        </div>

        {/* Desktop View: Standard Table */}
        <div className="hidden md:block overflow-hidden border border-gray-200 rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-red-500 text-white text-left">
              <tr>
                <th className="p-3 border">Consignor</th>
                <th className="p-3 border">Consignee</th>
                <th className="p-3 border">Type</th>
                <th className="p-3 border">Services</th>
                <th className="p-3 border">Weight</th>
                <th className="p-3 border">Pkgs</th>
              </tr>
            </thead>
            <tbody>
              {deliveryData?.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 border-b font-bold">
                  <td className="p-3">{item?.Consignor_Name || "—"}</td>
                  <td className="p-3">{item?.Consignee_Name || "—"}</td>
                  <td className="p-3">{"—"}</td>
                  <td className="p-3">{item?.Services || "—"}</td>
                  <td className="p-3">{item?.Act_Weight || "1"}</td>
                  <td className="p-3">{item?.No_of_pkg || "1"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- TABLE 2: TRACKING HISTORY --- */}
      <div className="mb-10">
        <h2 className="text-lg font-bold mb-3 text-red-600">Tracking History</h2>

        {/* Mobile View: Vertical Timeline Style */}
        <div className="md:hidden space-y-4">
          {customerData?.length > 0 ? (
            processedHistory?.map((item, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-red-500 ml-2 py-1">
                <div className="absolute -left-[9px] top-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
                <p className="font-bold text-gray-800">
                  {index == 0 ? item.DRS_Status ? item.Place : deliveryData[0].Book_Place : item.Place || "Unknown Branch"}
                </p>
                <p className="text-xs text-gray-500">
                  {item.Date}  {item.Time}
                </p>
                <div className="mt-2 text-sm bg-gray-50 p-2 rounded">
             <p><span className="font-semibold">Branch:</span> 
             
                {index === 0 ? (
    item.STATUS_CODE === "DRS"
      ? deliveryData[0].Book_Place
      : item.DRS_Status
        ? item.Place
        : deliveryData[0].Book_Place
  ) : item.STATUS_CODE === "ConnectionDone" ? (
    deliveryData[0].Book_Place
  ) : item.STATUS_CODE === "DRS" ? (
    item.Place
  ) : (
    customerData[index === 2 ? index - 2 : index - 1]?.Place || "—"
  )}
                   
                   </p>

                  <p><span className="font-semibold">Date & Time:</span>  {item.Date} {item.Time}</p>

                  <p><span className="font-semibold">Status:</span>
                    {item.ReferenceType === "Outscan"
                      ?`Forwarded to ${item.Place}`:item.ReferenceType === "ConnectionDone"? "Connection done"
                      : item.ReferenceType === "Inscan"
                        ? `	Received At ${item.Place}`
                        : item.DRS_Status}

                  </p>

                  <p><span className="font-semibold">Received By:</span> {item.Received_By || "—"}</p>
                  <p><span className="font-semibold">Remark:</span> {item.remark || "—"}</p>
                  <p><span className="font-semibold">Reference:</span> {item.jobname || "—"}</p>

                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-4 text-gray-500 italic">No History Found</p>
          )}
        </div>

        {/* Desktop View: Standard Table */}
        <div className="hidden md:block overflow-hidden border border-gray-200 rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-red-500 text-white text-left">
              <tr>
                <th className="p-3 border">Branch</th>
                <th className="p-3 border">Date & Time</th>
                <th className="p-3 border">Status</th>

                <th className="p-3 border">Received By</th>
                <th className="p-3 border">Remark</th>
                <th className="p-3 border">Reference</th>


              </tr>
            </thead>
            <tbody>
              {processedHistory?.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 border-b font-bold">
                  <td className="p-3 "> 
                    
                     {index === 0 ? (
    item.STATUS_CODE === "DRS"
      ? deliveryData[0].Book_Place
      : item.DRS_Status
        ? item.Place
        : deliveryData[0].Book_Place
  ) : item.STATUS_CODE === "ConnectionDone" ? (
    deliveryData[0].Book_Place
  ) : item.STATUS_CODE === "DRS" ? (
    item.Place
  ) : (
    customerData[index === 2 ? index - 2 : index - 1]?.Place || "—"
  )}
                   
                   </td>
                  <td className="p-3">
                    {item.Date} <br /> {item.Time}
                  </td>
                  <td className="p-3">
                    {item.ReferenceType === "Outscan"
                      ?`Forwarded to ${item.Place}`:item.ReferenceType === "ConnectionDone"? "Connection done"
                      : item.ReferenceType === "Inscan"
                        ? `	Received At ${item.Place}`
                        : item.DRS_Status}

                  </td>


                  <td className="p-3">{item.Received_By || "—"}</td>
                  <td className="p-3">{item.remark || "—"}</td>
                  <td className="p-3">{item.Reference || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
}
// Field Component
function Field({ label, data }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
      <span className="text-gray-700 text-sm sm:text-base sm:w-32 font-bold">{label}</span>
      <div className="border text-sm text-zinc-800 text-nowrap overflow-x-scroll no-scrollbar border-gray-300 rounded-full px-3 flex items-center h-8 w-full sm:flex-1 font-medium"
      >
        {data || "—"}
      </div>
    </div>
  );
}
function Field_two({ label, data, linkOne, linktwo, datatwo,className }) {
  return (
    <div className={`flex flex-row items-center gap-2 mb-2 `}>
      <span className="text-gray-700 text-sm sm:text-base sm:w-32 font-bold">{label}</span>
      <div className={`border-2 text-sm text-zinc-800 border-[#e63946] rounded-full px-3 flex items-center gap-2 h-8 w-auto ${className} `}>
        {linkOne && (<Link href={linkOne} target="_blank" className="font-bold" rel="noopener noreferrer">{data}</Link>)} /    {linktwo && (<Link href={linktwo} target="_blank" className="font-bold" rel="noopener noreferrer">{datatwo}</Link>)}
      </div>
    </div>
  );
}

