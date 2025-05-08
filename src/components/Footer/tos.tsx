// pages/tos.tsx



// app/tos/page.tsx
"use client";

import Head from "next/head";

export default function TermsOfServicePage() {
  return (
    <>
      <Head>
        <title>Terms of Service | YourBrandName</title>
        <meta
          name="description"
          content="Review the terms and conditions for using YourBrandName's services."
        />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">
          Welcome to our Terms of Service. Please read carefully before using our services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using our website, you agree to be bound by these terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Modifications</h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. Continued use of the site means you accept any changes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
        <p className="mb-4">
          Users agree not to misuse the service, upload harmful content, or violate any applicable laws.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
        <p className="mb-4">
          We are not liable for damages or losses resulting from your use of our platform.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          Last updated: May 8, 2025
        </p>
      </div>
    </>
  );
}
