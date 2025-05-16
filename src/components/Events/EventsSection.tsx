"use client";

import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "ADNOXY Half Marathon 2025",
    date: "June 15, 2025",
    location: "Akshar River Cruise",
    description:
      "Join us for the ADNOXY Half Marathon 2025 an exciting event bringing together fitness enthusiasts amateur runners and seasoned athletes for a day of energy endurance and community spirit! Set against a vibrant and scenic route this 21.1 km race offers the perfect challenge for runners of all levels.",
    image: "/images/events/marathon.png",
    detailedDescription:
      "Participants who wish to cancel their registration for the ADNOXY Half Marathon may be eligible for a full refund if the request is made within seven days of registration and at least 21 days prior to the event. Cancellations made between 15 and 20 days before the event will be eligible for a 50% refund. No refunds will be issued for cancellations made within 14 days of the event or for no-shows on race day. In the event of cancellation by the organizers, participants will receive a full refund or the option to transfer their entry to a rescheduled date.",
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

const EventsSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section
  className={`relative min-h-screen px-6 py-20 bg-gray-100 transition-opacity duration-700 ease-in-out ${
    fadeIn ? "opacity-100" : "opacity-0"
  }`}
>
  {/* Pseudo-element for rounded corners */}
  <div className="absolute inset-0 bg-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl pointer-events-none z-0"></div>

  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <h2 className="text-5xl font-extrabold mb-6 text-black bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 drop-shadow-md font-['Plus_Jakarta_Sans']">
      ✨ Upcoming Events ✨
    </h2>

    <p className="text-lg text-gray-700 mb-10 max-w-xl mx-auto font-medium font-['Poppins']">
      Step into innovation with our high-impact gatherings — where creativity meets cutting-edge tech.
    </p>

    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          className="bg-white/90 backdrop-blur-2xl rounded-2xl p-4 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 border border-fuchsia-200 text-left max-w-sm mx-auto font-['Poppins']"
        >
          <div className="flex flex-col gap-4">
            {/* Image */}
            <div className="w-full h-40 overflow-hidden rounded-lg">
              <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={400}
                className="object-cover"
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
                <h4 className="font-semibold mb-1 text-pink-600">More Details:</h4>
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
};

export default EventsSection;



