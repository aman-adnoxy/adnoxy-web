// app/terms-of-use/page.tsx
"use client";

import Head from "next/head";
import { useEffect, useState } from "react";

export default function TermsOfUsePage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Head>
        <title>Terms of Use | YourBrandName</title>
        <meta
          name="description"
          content="Review the terms of use of YourBrandName's services."
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
              Terms of Use
            </h1>
            <p className="text-lg text-gray-600">
              Please read these Terms of Use carefully before using our services.
            </p>
          </header>

          <section className="space-y-8 text-base text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold mb-2">1. General Terms</h2>
              <p>
                By accessing or using our services, you agree to comply with these terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">2. User Obligations</h2>
              <p>
                Users agree not to engage in harmful activities such as spamming or illegal actions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">3. Service Availability</h2>
              <p>
                We do not guarantee continuous or error-free service, and we reserve the right to modify or suspend the services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
              <p>
                All content and intellectual property related to our platform are protected by copyright laws.
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
