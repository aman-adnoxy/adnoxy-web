"use client";

import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "ADNOXY Launch Event",
    date: "June 15, 2025",
    location: "San Francisco, CA",
    description:
      "Join us for the official launch of ADNOXY with tech talks, demos, and unicorn magic in the air.",
    image: "/images/blog/blog-022.jpg",
    detailedDescription:
      "This is where it all begins! Be part of our groundbreaking launch event as we introduce ADNOXY, showcasing cutting-edge tech, demos, and a future full of possibilities. Meet thought leaders, innovators, and creators.",
  },
  {
    id: 2,
    title: "Web3 and AI Future Conference",
    date: "August 10, 2025",
    location: "New York, NY",
    description:
      "Explore how ADNOXY is shaping the future of Web3 and AI integration, with rainbows of innovation.",
    image: "/images/blog/blog-022.jpg",
    detailedDescription:
      "Dive deep into the future of Web3 and AI as we explore emerging technologies, industry trends, and the endless possibilities that ADNOXY brings to the tech space. Network with experts and peers.",
  },
];

export default function EventsSection() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section
      className={`relative min-h-screen px-6 py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-200 transition-opacity duration-700 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-[url('/sparkles.svg')] bg-cover opacity-25 pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 drop-shadow-md">
          ✨ Upcoming Events ✨
        </h2>

        <p className="text-lg text-gray-700 mb-10 max-w-xl mx-auto font-medium">
          Step into innovation with our high-impact gatherings — where creativity meets cutting-edge tech.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/90 backdrop-blur-2xl rounded-2xl p-4 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 border border-fuchsia-200 text-left max-w-sm mx-auto"
            >
              <div className="flex flex-col gap-4">
                {/* Image */}
                <div className="w-full h-40 overflow-hidden rounded-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-1 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400 animate-bounce" />
                    {event.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2 italic">
                    📍 {event.location} — 🗓️ {event.date}
                  </p>
                  <p className="text-sm text-gray-800 mb-3">{event.description}</p>

                  <div className="text-sm text-gray-700">
                    <h4 className="font-semibold mb-1 text-pink-600">
                      More Details:
                    </h4>
                    <p>{event.detailedDescription}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



