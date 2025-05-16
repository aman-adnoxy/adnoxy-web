// app/events/page.tsx
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const events = [
  {
    id: 1,
    title: "ADNOXY Launch Event",
    date: "June 15, 2025",
    location: "San Francisco, CA",
    description: "Join us for the official launch of ADNOXY with tech talks, demos, and unicorn magic in the air.",
  },
  {
    id: 2,
    title: "Web3 and AI Future Conference",
    date: "August 10, 2025",
    location: "New York, NY",
    description: "Explore how ADNOXY is shaping the future of Web3 and AI integration, with rainbows of innovation.",
  },
];

export default function EventsPage() {
  return (
    <div className="p-6 min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-6 text-black">Upcoming Events</h1>


      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_rgba(236,72,153,0.15)] hover:shadow-[0_20px_50px_rgba(236,72,153,0.25)] transition-transform duration-300 transform hover:scale-105 border border-fuchsia-200"
          >
            <h3 className="text-3xl font-semibold text-red-800 mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-400 animate-bounce" />
              {event.title}
            </h3>
            <p className="text-sm text-red-700 mb-3 italic">
              📍 {event.location} — 🗓️ {event.date}
            </p>
            <p className="text-red-800">{event.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
