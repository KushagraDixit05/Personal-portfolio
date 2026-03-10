"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import MagicButton from "./MagicButton";

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: null, text: "" });

    // Validate
    if (!form.name || !form.email || !form.message) {
      setIsLoading(false);
      setStatusMessage({
        type: "error",
        text: "Please fill in all required fields.",
      });
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Kushagra Dixit",
          from_email: form.email,
          to_email: "iamkushagradixit@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setIsLoading(false);
          setStatusMessage({
            type: "success",
            text: "Thank you. I will get back to you as soon as possible.",
          });
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setIsLoading(false);
          console.error(error);
          setStatusMessage({
            type: "error",
            text: "Something went wrong. Please try again later.",
          });
        }
      );
  };

  return (
    <div className="flex-[0.75] bg-black-200 p-8 rounded-2xl w-full max-w-2xl mx-auto border border-black-300 relative z-10 mt-12 mb-10 text-left">
      <div className="flex flex-col gap-2 mb-8">
        <h3 className="text-white text-3xl font-bold">Contact Me</h3>
        <p className="text-white-200 text-sm max-w-sm">
          Please reach out to me and I will get back to you at the speed of light.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >
        <label className="flex flex-col">
          <span className="text-white-100 font-medium mb-2 text-sm">Full Name <span className="text-red-500">*</span></span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-black-100 py-4 px-6 placeholder:text-white-200 text-white rounded-lg outline-none border-none font-medium text-sm focus:ring-2 focus:ring-purple/50 transition-all"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white-100 font-medium mb-2 text-sm">Email address <span className="text-red-500">*</span></span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="bg-black-100 py-4 px-6 placeholder:text-white-200 text-white rounded-lg outline-none border-none font-medium text-sm focus:ring-2 focus:ring-purple/50 transition-all"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white-100 font-medium mb-2 text-sm">Subject</span>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className="bg-black-100 py-4 px-6 placeholder:text-white-200 text-white rounded-lg outline-none border-none font-medium text-sm focus:ring-2 focus:ring-purple/50 transition-all"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white-100 font-medium mb-2 text-sm">Message <span className="text-red-500">*</span></span>
          <textarea
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message here"
            className="bg-black-100 py-4 px-6 placeholder:text-white-200 text-white rounded-lg outline-none border-none font-medium text-sm resize-none focus:ring-2 focus:ring-purple/50 transition-all"
            required
          />
        </label>

        {statusMessage.text && (
          <div
            className={`p-4 rounded-lg text-sm mt-2 ${
              statusMessage.type === "success"
                ? "bg-green-500/10 text-green-500 border border-green-500/20"
                : "bg-red-500/10 text-red-500 border border-red-500/20"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="bg-white py-4 px-8 outline-none w-full text-black font-semibold shadow-md rounded-xl hover:bg-white/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-2"
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
