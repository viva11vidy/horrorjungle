import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.horrorjungle.com"),

  title: {
    default: "Horrorjungle – Honest Horror Movie Reviews & Recommendations",
    template: "%s | Horrorjungle",
  },

  description:
    "Horrorjungle helps you decide which horror movies are worth watching. Read honest reviews, rankings, and find where to stream them.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.horrorjungle.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.horrorjungle.com",
    siteName: "Horrorjungle",
    title: "Horrorjungle – Horror Movie Reviews",
    description:
      "Honest horror movie reviews, rankings, and recommendations. Discover what’s worth watching.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Horrorjungle – Horror Movie Reviews",
    description:
      "Honest horror movie reviews and recommendations.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}