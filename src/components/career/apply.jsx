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
    countryCode: "+971", // ✅ controlled select
    country: "",
    city: "",
    role: "",
    currentSalary: "",
    expectedSalary: "",
    linkedin: "",
    resume: null, // ✅ will hold the File object
    skills: "",
  });

  // Handle inputs (including file)
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess("");
    setError("");

    try {
      // ✅ Use FormData to send file and text fields
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", `${formData.countryCode}${formData.phone}`);
      data.append("country", formData.country);
      data.append("city", formData.city);
      data.append("role", formData.role);
      data.append("currentSalary", formData.currentSalary);
      data.append("expectedSalary", formData.expectedSalary);
      data.append("linkedin", formData.linkedin);
      data.append("skills", formData.skills);

      if (formData.resume) {
        data.append("resume", formData.resume); // ✅ include file
      }

      const res = await fetch("/api/careerform", {
        method: "POST",
        body: data, // ✅ don't set headers — browser does it for FormData
      });
      if (res.ok) {
        setSuccess("Application submitted successfully ✅");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          countryCode: "+971",
          country: "",
          city: "",
          role: "",
          currentSalary: "",
          expectedSalary: "",
          linkedin: "",
          resume: null,
          skills: "",
        });
      } else {
        const err = await res.json();
        setError(err.message || "Failed to submit the form.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`flex justify-center items-center h-auto ${className}`}>
      <div className="bg-white shadow-md rounded-2xl px-5 md:px-20 py-10 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-2">Apply Now</h2>

        <form className="space-y-2" onSubmit={handleSubmit}>
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

          {/* Country & City */}
          <div className="grid md:grid-cols-2 gap-3">
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
          <div className="grid md:grid-cols-2 gap-3">
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
          <div className="grid md:grid-cols-2 gap-3">
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
              <label className="block text-sm font-medium">Resume*</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="w-full border rounded-full px-4 py-2 mt-1"
                required
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

          {/* Feedback */}
          {success && <p className="text-green-600 text-center">{success}</p>}
          {error && <p className="text-red-600 text-center">{error}</p>}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-red-500 text-white font-medium py-2 rounded-full hover:bg-red-600 ${
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
