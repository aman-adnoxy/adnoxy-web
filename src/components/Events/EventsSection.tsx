"use client";

import React from "react";
import { CalendarDays } from "lucide-react";

const events = [
  {
    id: 1,
    title: "ADNOXY Half Marathon 2025",
    link: "https://allevents.in/ahmedabad/adnoxy-half-marathon-2025-tickets/80001577179946",
    date: "June 15, 2025",
    location: "Akshar River Cruise",
  },
  {
    id: 2,
    title: "Web3 and AI Future Conference",
    link: "/events/web3-ai-future-conference", // Keep internal links like this
    date: "August 10, 2025",
    location: "New York, NY",
  },
];

const EventsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-100 dark:from-[#1f1f1f] dark:to-[#2a2a2a]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 font-['Plus_Jakarta_Sans'] leading-tight">
          🌟 Explore Our Upcoming Events
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 font-['Poppins']">
          Be a part of impactful experiences designed to inspire, innovate, and connect.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 font-['Poppins']">
          {events.map((event) => {
            const isExternal = event.link.startsWith("http");

            return isExternal ? (
              <a
                key={event.id}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-3xl border border-purple-200 bg-white p-6 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:border-purple-400 hover:shadow-xl dark:bg-[#1d1d1d] dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <CalendarDays className="w-8 h-8 text-purple-500 group-hover:text-purple-700 transition" />
                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 group-hover:text-purple-900 dark:text-purple-400 dark:group-hover:text-white">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {event.date} · {event.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-purple-600 group-hover:underline dark:text-purple-300">
                    Buy Tickets →
                  </span>
                </div>
              </a>
            ) : (
              <a
                key={event.id}
                href={event.link}
                className="group relative block rounded-3xl border border-purple-200 bg-white p-6 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:border-purple-400 hover:shadow-xl dark:bg-[#1d1d1d] dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <CalendarDays className="w-8 h-8 text-purple-500 group-hover:text-purple-700 transition" />
                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 group-hover:text-purple-900 dark:text-purple-400 dark:group-hover:text-white">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {event.date} · {event.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-purple-600 group-hover:underline dark:text-purple-300">
                    View Details →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;



