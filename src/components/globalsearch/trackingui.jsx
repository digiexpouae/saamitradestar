import { useEffect, useState } from "react";
import Header from '../../layout/header';
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function GlobalSearch({ data, id, podscanData, customerData, podData }) {
  const [consignmentNo, setConsignmentNo] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [deliveryData, setDeliveryData] = useState(data || []);
  const [customer, setCustomer] = useState(customerData || []);
  const [imgUrl, setimgUrl] = useState("")
  const [imgUrltwo, setimgUrltwo] = useState("")
  const router = useRouter();
  useEffect(() => {
    console.log("podData", podData.url)
    setimgUrl(podData?.url)
    setimgUrltwo(podscanData?.url)

  }, [])
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
        <label className="text-gray-700 text-sm sm:text-base whitespace-nowrap">
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
        <div className="w-[30%] ">
          <Field_two label={'POD'} data={imgUrl && ('poddata')} datatwo={imgUrltwo && ('podscanData')} linkOne={imgUrl && imgUrl} linktwo={imgUrltwo && imgUrltwo} />        </div>
        {/* Booking Info */}

        {deliveryData?.length ? (
          deliveryData.map((item, index) => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

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
                <Field label="Reference No :" data={item.Ref_No2} />
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
            deliveryData.map((item, index) => (

              <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
                <div className="flex justify-between border-b pb-2 mb-2">
                  <span className="font-bold text-red-500">Consignor</span>
                  <span>{item?.Consignor_Name || "—"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <p><span className="text-gray-500">Consignee:</span> {item?.Consignee_Name || "—"}</p>
                  <p><span className="text-gray-500">Type:</span> {item?.Job_Name || "—"}</p>
                  <p><span className="text-gray-500">Services:</span> {item?.Services || "—"}</p>
                  <p><span className="text-gray-500">Weight:</span> {item?.Act_Weight || "0"}</p>
                  <p><span className="text-gray-500">Pkgs:</span> {item?.No_of_pkg || "0"}</p>
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
                <tr key={index} className="hover:bg-gray-50 border-b">
                  <td className="p-3">{item?.Consignor_Name || "—"}</td>
                  <td className="p-3">{item?.Consignee_Name || "—"}</td>
                  <td className="p-3">{item?.Job_Name || "—"}</td>
                  <td className="p-3">{item?.Services || "—"}</td>
                  <td className="p-3">{item?.Act_Weight || "0"}</td>
                  <td className="p-3">{item?.No_of_pkg || "0"}</td>
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
            customerData.map((item, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-red-500 ml-2 py-1">
                <div className="absolute -left-[9px] top-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
                <p className="font-bold text-gray-800">{item.Place_name || "Unknown Branch"}</p>
                <p className="text-xs text-gray-500">
                  {item?.Status_date ? new Date(item.Status_date).toLocaleString() : "—"}
                </p>
                <div className="mt-2 text-sm bg-gray-50 p-2 rounded">
                  <p><span className="font-semibold">Status:</span>
                    {item.STATUS_CODE === "Manifest"
                      ? `Forwarded to ${item.Place_name}`
                      : item.STATUS_CODE === "DRS"
                        ? `Forwarded to ${id || "—"}`
                        : "—"}
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
              {customerData?.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 border-b">
                  <td className="p-3">{item.Place_name || "—"}</td>
                  <td className="p-3">
                    {item?.Status_date
                      ? new Date(item.Status_date).toLocaleString('en-US', {
                        month: 'short',
                        day: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                      })
                      : "—"}
                  </td>
                  <td className="p-3">
                    {item.STATUS_CODE === "Manifest"
                      ? `Forwarded to ${item.Place_name}`
                      : item.STATUS_CODE === "DRS"
                        ? `Forwarded to ${id || "—"}`
                        : "—"}
                  </td>


                  <td className="p-3">{item.Received_By || "—"}</td>
                  <td className="p-3">{item.remark || "—"}</td>
                  <td className="p-3">{item.jobname || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
}

function Field({ label, data }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
      <span className="text-gray-700 text-sm sm:text-base sm:w-32">{label}</span>
      <div className="border text-sm text-zinc-800 border-gray-300 rounded-full px-3 flex items-center h-8 w-full sm:flex-1">
        {data || "—"}
      </div>
    </div>
  );
}
function Field_two({ label, data, linkOne, linktwo, datatwo }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
      <span className="text-gray-700 text-sm sm:text-base sm:w-32">{label}</span>
      <div className="border text-sm text-zinc-800 border-gray-300 rounded-full px-3 flex items-center gap-2 h-8 w-full sm:flex-1">
        {linkOne && (<Link href={linkOne} target="_blank" rel="noopener noreferrer">{data}</Link>)} /    {linktwo && (<Link href={linktwo} target="_blank" rel="noopener noreferrer">{datatwo}</Link>)}
      </div>
    </div>
  );
}

