import { useEffect, useState } from "react";
import Header from '../../layout/header'
import { useRouter } from "next/navigation";
export default function GlobalSearch({ data, id, customerData }) {
  const [consignmentNo, setConsignmentNo] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [deliveryData, setDeliveryData] = useState(data || []);
  const [customer, setCustomer] = useState(customerData || []);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    const id = consignmentNo
    router.push(`/tracking/${id}`);
    setSubmitted(true);
  };

  useEffect(() => {
    console.log("client Data", data)
    setDeliveryData(data)
    setCustomer(customerData)
  }, [data, customerData])
  return (
    <div className="max-w-5xl mx-auto   sm:p-6">

      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">
        Global Search
      </h1>
      {/* Search Bar */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row px-4 md:px-0  sm:items-center gap-3 mb-8"
      >
        <label className="text-gray-700 text-sm sm:text-base" style={{ whiteSpace: 'nowrap' }}>
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
              className="bg-red-500 text-white px-5 py-2  rounded-full hover:bg-red-600 transition w-full sm:w-auto"
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

      {/* Booking Details */}
      <>
        <div className="mb-6 px-4 md:px-0 ">
          <p className="text-base sm:text-lg">
            Booking Details for Consignment No :{" "}
            {/* <span className="text-red-500 font-semibold">{consignmentNo || "—"}</span> */}
            {id}
          </p>

          {/* Booking Info */}


          {/* Booking Info */}
          {deliveryData?.length ? (
            deliveryData.map((item, index) => (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

                <div className="space-y-2">
                  <Field label="Type :" data={item.Job_Name} />
                  <Field label="Book Place :" data={item.Book_Place} />
                  <Field label="Book Date :" data={item.Book_Dt} />
                  <Field label="POD :" data={item.POD} />
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

        {/* Table */}



        {/* Table */}
        <div className="overflow-x-auto space-y-4 w-full mb-6">
          <table className="w-full min-w-[600px] border-collapse text-sm">

            <thead>
              <tr className="bg-red-500 text-white">
                <th className="p-2 border">Consignor</th>
                <th className="p-2 border">Consignee</th>
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Services</th>
                <th className="p-2 border">Weight</th>
                <th className="p-2 border">No of pkg</th>
              </tr>
            </thead>
            <tbody>
              {deliveryData && deliveryData.length > 0 ? (
                deliveryData.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-2 border text-center text-gray-800">
                      {item?.Consignor_Name || "—"}
                    </td>
                    <td className="p-2 border text-center text-gray-800">
                      {item?.Consignee_Name || "—"}
                    </td>
                    <td className="p-2 border text-center text-gray-800">
                      {item?.Job_Name || "—"}
                    </td>
                    <td className="p-2 border text-center text-gray-800">
                      {item?.Services || "—"}
                    </td>
                    <td className="p-2 border text-center text-gray-800">
                      {item?.Act_Weight || "0"}
                    </td>
                    <td className="p-2 border text-center text-gray-800">
                      {item?.No_of_pkg || "0"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-8 text-gray-500 italic">
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>

          </table>


          <table className="w-full border-collapse text-sm md:min-w-[600px]">
            <thead>
              <tr className="bg-red-500 text-white">
                <th className="p-2 border">Branch</th>
                <th className="p-2 border">Status Date & Time</th>
                <th className="p-2 border">Received By</th>
                <th className="p-2 border">Remark</th>
                <th className="p-2 border">Reference</th>

              </tr>
            </thead>
            <tbody>
              {deliveryData && customerData ? (
                customerData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="p-2 border text-center text-gray-800">{item.Place_name || "—"}</td>
                    <td className="p-2 border text-center text-gray-800">
                      {item?.Status_date
                        ? new Date(item.Status_date).toLocaleString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true, // for AM/PM format
                        })
                        : "—"}
                    </td>                    <td className="p-2 border text-center text-gray-800">{item.Received_By || "—"}</td>
                    <td className="p-2 border text-center text-gray-800">{item.remark || "—"}</td>
                    <td className="p-2 border text-center text-gray-800">{item.jobname || "—"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    No Data Found
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>
      </>
    </div >
  );
}

function Field({ label, data }) {
  return (
    <div className="flex flex-col md:flex-row flex-col sm:items-center  gap-2">
      <span className="text-gray-700 text-sm sm:text-base sm:w-32">{label}</span>
      <div

        className="border text-sm text-zinc-800 border-gray-300 rounded-full px-3 flex items-center  h-8 w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-red-500"
      >{data}</div>
    </div>
  );
}
