// app/privacy-policy/page.tsx
"use client";

import Head from "next/head";
import { useEffect, useState } from "react";

export default function PrivacyPolicyPage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Head>
        <title>Privacy Policy | YourBrandName</title>
        <meta
          name="description"
          content="Review the privacy policy of YourBrandName."
        />
      </Head>

      <main
        className={`transition-opacity duration-700 ease-in-out ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-12">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              This Privacy Policy explains how we collect, use, and protect your data.
            </p>
          </header>

          <section className="space-y-8 text-base text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
              <p>
                We collect personal information that you provide to us directly, as well as information about your use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">2. Use of Information</h2>
              <p>
                We use the information to provide and improve our services, as well as to communicate with you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">3. Data Security</h2>
              <p>
                We take reasonable precautions to protect your data, but we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">4. Your Rights</h2>
              <p>
                You have the right to access, modify, or delete your personal data in accordance with applicable laws.
              </p>
            </div>
          </section>

          <footer className="mt-12 text-sm text-gray-500">
            Last updated: May 8, 2025
          </footer>
        </div>
      </main>
    </>
  );
}
