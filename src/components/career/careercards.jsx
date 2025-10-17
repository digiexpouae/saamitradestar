// components/JobCard.tsx
import { useState } from "react";
import { FaTimes } from "react-icons/fa"; // cross icon
import ApplyForm from "./apply";

const JobCard = ({ head, text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      style={{ border: "1px solid black" }}
      className="w-[90%] md:w-[100%] rounded-xl bg-white shadow-sm p-[28px]"
    >
      <div className="md:pl-4 text-black">
        <h2 className="text-xl font-semibold mb-4">{head}</h2>

        <div className="flex flex-wrap gap-2 mb-4">
          {["Dubai", "Full-time", "On-site", "Sales"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm border border-black rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm mb-6">{text}</p>

        {/* Apply Button */}
        <button
          className="cursor-pointer w-[70%] bg-[#EE223D] text-white py-3 rounded-[30px] font-medium hover:bg-red-800 transition"
          onClick={() => setIsModalOpen(true)}
        >
          Apply Now
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] backdrop-blur-sm bg-black/40 flex overflow-auto justify-center ">
            <div className="relative  rounded-2xl h-full flex flex-col items-center md:justify-center w-[100%] lg:justify-start md:max-w-xl shadow-lg">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className=" cursor-pointer absolute top-6 right-10 text-gray-600 hover:text-gray-900"
              >
                <FaTimes size={20} />
              </button>

              {/* Apply Form */}
              <ApplyForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
