// app/tos/page.tsx
"use client";

import Head from "next/head";
import { useEffect, useState } from "react";

export default function TermsOfServicePage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Head>
        <title>Terms of Service | YourBrandName</title>
        <meta
          name="description"
          content="Review the terms and conditions for using YourBrandName's services."
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
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Welcome to our Terms of Service. Please read carefully before
              using our services.
            </p>
          </header>

          <section className="space-y-8 text-base text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using our website, you agree to be bound by
                these terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">2. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time.
                Continued use of the site means you accept any changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                3. User Responsibilities
              </h2>
              <p>
                Users agree not to misuse the service, upload harmful content,
                or violate any applicable laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                4. Limitation of Liability
              </h2>
              <p>
                We are not liable for damages or losses resulting from your use
                of our platform.
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

