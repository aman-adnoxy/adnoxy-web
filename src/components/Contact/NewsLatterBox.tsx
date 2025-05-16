"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: "Newsletter subscription request",
        }),
      });

      if (response.ok) {
        setStatus("Subscribed successfully!");
        setFormData({ name: "", email: "" });
      } else {
        setStatus("Failed to subscribe. Try again.");
      }
    } catch (error) {
      console.error("API error:", error);
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="relative z-10 rounded-3xl bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
        Subscribe for exclusive updates
      </h3>
      <p className="pb-5 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25 font-['Poppins']">
        We craft engaging campaigns that captivate and inspire.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-stroke mb-4 w-full rounded-3xl border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-stroke mb-4 w-full rounded-3xl border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />

        <input
          type="submit"
          value="Subscribe"
          className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-3xl bg-black px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-gray-800 dark:shadow-submit-dark"
        />
      </form>

      {status && (
        <p className="text-center text-sm text-body-color dark:text-body-color-dark">
          {status}
        </p>
      )}

      <p className="text-center text-base leading-relaxed text-body-color dark:text-body-color-dark">
        No spam guaranteed.
      </p>
    </div>
  );
};

export default NewsLatterBox;

