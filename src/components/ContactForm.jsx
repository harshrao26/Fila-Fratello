"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const now = new Date();
    const offset = 330;
    const istDate = new Date(now.getTime() + offset * 60 * 1000);
    const timestamp = istDate.toISOString().replace("T", " ").split(".")[0];

    const dataToSend = {
      ...formData,
      timestamp,
    };

    try {
      await axios.post("https://hook.eu2.make.com/jeq5yvycoe8dkdraa3bxmfmxsgkjpwq6", dataToSend);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', description: '' });
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-slate-900 py-24 md:py-32 px-6 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-10">
          <div className="space-y-6">
            <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
              Let's Advance <br /> <span className="text-blue-500 italic">Healthcare Together</span>
            </h2>
            <p className="text-lg text-slate-400 font-normal leading-relaxed max-w-xl">
              Interested in partnering with Fila Fratello? Whether you're a distributor, provider, or business client, our team is ready to assist.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            {[
              "Expert support from our medical & pharma team",
              "Quick response time within 24 business hours",
              "100% data confidentiality and secure communication"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-blue-400" />
                </div>
                <span className="text-slate-300 font-normal">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl">
          {isSuccess ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-white">Message Received!</h3>
                <p className="text-slate-400 font-normal">Our team will get back to you shortly.</p>
              </div>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div className="sm:col-span-2 space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600"
                  placeholder="john@company.com"
                />
              </div>

              <div className="sm:col-span-2 space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest ml-1">Inquiry Details</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600 resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="sm:col-span-2 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold py-5 rounded-2xl transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
                {!isSubmitting && <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
