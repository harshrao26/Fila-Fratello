"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import ifw from "../assets/if.webp";

const PharmaInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();
    const offset = 330;
    const istDate = new Date(now.getTime() + offset * 60 * 1000);
    const timestamp = istDate.toISOString().replace("T", " ").split(".")[0];

    const dataToSend = {
      ...formData,
      timestamp,
    };

    try {
      await axios.post(
        "https://hook.eu2.make.com/jeq5yvycoe8dkdraa3bxmfmxsgkjpwq6",
        dataToSend
      );
      alert("Inquiry submitted successfully");
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="w-full px-6 md:px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Image - Hidden on Mobile */}
        <div className="hidden md:block">
          <Image src={ifw} alt="Pharma Inquiry" className="w-full h-auto object-cover" />
        </div>

        {/* Right Form */}
        <div className="bg-white p-6 sm:p-8 md:p-6 w-full">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Inquiry Details (Product / Business / Supply)
              </label>
              <textarea
                name="description"
                rows="4"
                placeholder="Please mention your inquiry type and company details if applicable."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-2 rounded-md hover:bg-blue-800 transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>

  );
};

export default PharmaInquiryForm;
