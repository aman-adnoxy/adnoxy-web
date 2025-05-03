import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'ADNOXY | Innovating Offline Ads',
    template: '%s | ADNOXY'
  },
  description: 'Premium retail media solutions connecting brands with consumers through innovative offline advertising in top retail spaces.',
  keywords: ['retail media', 'offline advertising', 'fashion marketing', 'retail marketing', 'in-store advertising', 'shelf rentals'],
  metadataBase: new URL('https://www.adnoxy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ADNOXY | Innovating Offline Ads',
    description: 'Premium retail media solutions for brands',
    url: 'https://www.adnoxy.com',
    siteName: 'ADNOXY',
    images: [
      {
        url: '/images/logo/logo-2.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADNOXY | Innovating Offline Ads',
    description: 'Premium retail media solutions for brands',
    images: ['/images/logo/logo-2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'NPv3po6Q9JjA3MjZ9bRn7O5R37fuZHMFIfgDMMm9O6I',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";import { Metadata } from "next";

