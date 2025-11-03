'use client';

import { useState } from 'react';

export default function TrackShipment() {
  const [awb, setAwb] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tracking AWB: ${awb}`);
  };

  return (
    <div className="absolute z-30 bottom-10 md:bottom-50 right-0 flex items-center justify-center ">
      <div className="bg-[#00000080] rounded-tl-2xl rounded-bl-2xl shadow-lg p-2 md:p-4  md:py-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6">
          Track Shipment
        </h1>
<p className="text-white ">Airway Bill no:</p>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={awb}
            onChange={(e) => setAwb(e.target.value)}
            placeholder="Tracking number"
            required
            className="flex-1 px-2 py-2 border border-gray-300 rounded-l-lg "
          />
          <button
            type="submit"
            className="px-2 py-2 bg-[#ED3039] text-white rounded-r-lg hover:bg-red-700 cursor-pointer transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}