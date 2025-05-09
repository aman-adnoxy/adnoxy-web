// app/unreachable/page.tsx
"use client";

import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";

export default function UnreachablePage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`flex h-screen items-center justify-center bg-white px-4 transition-opacity duration-700 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-red-700 mb-4 tracking-tight">ADNOXY</h1>
        <h2 className="text-3xl font-bold text-red-800 mb-2">Site Unreachable</h2>
        <p className="text-lg text-red-900 mb-6">
          We're currently experiencing issues. Please try again in a few moments.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-full bg-red-700 px-5 py-2.5 text-white text-base font-medium hover:bg-red-800 transition"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
        <p className="mt-6 text-sm text-red-500">
          We appreciate your patience. — The ADNOXY Team
        </p>
      </div>
    </div>
  );
}
