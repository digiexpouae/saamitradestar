"use client";
import { useState } from "react";

export default function ApplyForm({className}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    role: "",
    currentSalary: "",
    expectedSalary: "",
    linkedin: "",
    resume: null,
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! 🚀");
  };

  return (
    <div className={`flex justify-center items-center h-auto ${className}`}>

      <div className="bg-white shadow-md rounded-2xl px-5 md:px-20  py-10 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-2">Apply Now</h2>

        <form className="space-y-1" onSubmit={handleSubmit}>
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
          <div className="grid md:grid-cols-2 gap-2 md:gap-2 md:gap-2 md:gap-3">
            <div className="">
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
              <label className="block text-sm font-medium">Ph Number*</label>
              <div className="flex">
                <select className="border rounded-l-full px-2">
                  <option>+971</option>
                  <option>+92</option>
                  <option>+91</option>
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

          {/* Country & City */}
          <div className="grid md:grid-cols-2 gap-2 md:gap-2 md:gap-3">
            <div>
              <label className="block text-sm font-medium">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Enter Country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border rounded-full px-4 py-2 mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                value={formData.city}
                onChange={handleChange}
                className="w-full border rounded-full px-4 py-2 mt-1"
              />
            </div>
          </div>

          {/* Preferred Role */}
          <div>
            <label className="block text-sm font-medium">Preferred Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded-full px-4 py-2 mt-1"
            >
              <option value="">Select</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          {/* Salary */}
          <div className="grid md:grid-cols-2 gap-2 md:gap-2 md:gap-3">
            <div>
              <label className="block text-sm font-medium">Current Salary</label>
              <input
                type="text"
                name="currentSalary"
                placeholder="Enter"
                value={formData.currentSalary}
                onChange={handleChange}
                className="w-full border rounded-full px-4 py-2 mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Expected Salary</label>
              <input
                type="text"
                name="expectedSalary"
                placeholder="Enter"
                value={formData.expectedSalary}
                onChange={handleChange}
                className="w-full border rounded-full px-4 py-2 mt-1"
              />
            </div>
          </div>

          {/* Linkedin + Resume */}
          <div className="grid md:grid-cols-2 gap-2 md:gap-2 md:gap-3">
            <div>
              <label className="block text-sm font-medium">LinkedIn Profile</label>
              <input
                type="url"
                name="linkedin"
                placeholder="Enter"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full border rounded-full px-4 py-2 mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Resume</label>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                className="w-full border rounded-full px-4 py-2 mt-1"
              />
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium">
              Please mention your top skills and the areas you're best at.
            </label>
            <textarea
              name="skills"
              placeholder="Enter your skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full border resize-none rounded-lg px-4 py-2 mt-1 h-24"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-red-500 text-white font-medium py-2 rounded-full hover:bg-red-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
