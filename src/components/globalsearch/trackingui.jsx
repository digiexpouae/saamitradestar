import { useState } from "react";
import Header from '../../layout/header'
export default function GlobalSearch() {
  const [consignmentNo, setConsignmentNo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        <label className="text-gray-700 text-sm sm:text-base" style={{whiteSpace:'nowrap'}}>
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
            <span className="text-red-500 font-semibold">{consignmentNo || "—"}</span>
          </p>

          {/* Booking Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="space-y-2">
              <Field label="Type :" />
              <Field label="Book Place :" />
              <Field label="Book Date :" />
              <Field label="POD :" />
            </div>
            <div className="space-y-2">
              <Field label="Reference No :" />
              <Field label="Delivery Place :" />
              <Field label="Book Time :" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:min-w-[600px]">
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
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No Data Found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
}

function Field({ label }) {
  return (
    <div className="flex flex-col md:flex-row flex-col sm:items-center  gap-2">
      <span className="text-gray-700 text-sm sm:text-base sm:w-32">{label}</span>
      <input
        type="text"
        className="border border-gray-300 rounded-full px-3 py-1 w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
  );
}
