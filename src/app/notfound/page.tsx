// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-[10rem] font-light text-gray-800 leading-none">404</h1>
        <p className="text-2xl text-gray-700 mb-2">That’s an error.</p>
        <p className="text-base text-gray-600 mb-6">
          The requested URL was not found on this server. That’s all we know.
        </p>
        <Link
  href="/"
  className="inline-block text-red-700 text-base hover:underline"
>
  Return to ADNOXY homepage
</Link>

        <p className="mt-8 text-sm text-gray-400">— ADNOXY Web Services</p>
      </div>
    </div>
  );
}
