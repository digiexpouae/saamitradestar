'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TrackShipment() {
    const router = useRouter();
    const [awb, setAwb] = useState('');
    const [data, setData] = useState([]);






    const handleSubmit = (e) => {
        e.preventDefault();


        router.push(`/tracking/${awb}`);
    };
    return (
        <div className="flex items-center w-full justify-center  ">
            <div className="    flex md:flex-row flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold text-gray-500 ">
                    Track Shipment
                </h1>
                <form onSubmit={handleSubmit} className="flex ">
                    <div className="flex rounded-full shadow  w-xs md:w-sm bg-white h-12 " style={{ boxShadow: '0px 2px 4px black ', }}>
                        <input
                            type="text"
                            value={awb}
                            onChange={(e) => setAwb(e.target.value)}
                            placeholder="Tracking number"
                            required

                            className="flex-1 px-4 md:pl-6 md:pr-2 bg-white w-xs text-black  rounded-l-full focus:outline-none border-gray-300  "
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-[#ED3039] text-white rounded-full hover:bg-red-700 cursor-pointer transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}