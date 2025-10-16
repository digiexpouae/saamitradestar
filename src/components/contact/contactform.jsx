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
    <div className={`flex justify-center items-center pt-10 h-auto ${className}`}>

      <div className="bg-white  rounded-2xl px-5 md:px-20  py-10 w-full max-w-2xl">
        <h2 className=" text-3xl md:text-5xl font-medium text-center mb-2">Get In Touch</h2>

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
          <div className="grid md:grid-cols-2 gap-2 md:gap-2 md:gap-2 md:gap-3">
            <div className="w-[100%]">
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
            <div className="w-[100%]">
              <label className="block text-sm font-medium">Ph Number*</label>
              <div className="flex">
                <select className="border rounded-l-full px-2">
                <option>+1</option>   
<option>+7</option>   
<option>+20</option>  
<option>+27</option>  
<option>+30</option>  
<option>+31</option>  
<option>+32</option>  
<option>+33</option>  
<option>+34</option>  
<option>+39</option>  
<option>+44</option>  
<option>+49</option>  
<option>+60</option>  
<option>+61</option>  
<option>+62</option>  
<option>+63</option>  
<option>+64</option>  
<option>+65</option>  
<option>+81</option>  
<option>+82</option>  
<option>+86</option>  
<option>+90</option>  
<option>+91</option>  
<option>+92</option>  
<option>+94</option>  
<option>+95</option>  
<option>+971</option> 
<option>+974</option> 
<option>+966</option> 
<option>+968</option> 
<option>+973</option> 
<option>+880</option> 
<option>+98</option>  
<option>+966</option> 
<option>+972</option> 
<option>+20</option>  
<option>+27</option>  
<option>+55</option>  
<option>+52</option>  
<option>+54</option>  
<option>+234</option> 
<option>+254</option> 

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


          {/* Preferred Role */}
        

     
          {/* Skills */}
          <div>
            <label className="block text-sm font-medium">
Message            </label>
            <textarea
              name="skills"
              placeholder="Enter your skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full border resize-none rounded-lg px-4 py-1 mt-1 h-24"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full cursor-pointer bg-red-500 text-white font-medium py-2 rounded-full hover:bg-red-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}