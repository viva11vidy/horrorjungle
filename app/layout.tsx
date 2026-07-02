import type { Metadata } from "next";
import { Poppins, Quicksand, Bebas_Neue } from "next/font/google";
import Link from "next/link";
import localFont from "next/font/local";
import Sidebar from "../components/Sidebar";
import ScrollManager from "../components/ScrollManager";
import "@flaticon/flaticon-uicons/css/all/all.css";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",

});

const stormGust = localFont({
  src: "../public/assets/fonts/storm-gust.ttf",
  variable: "--font-storm-gust",
  display: "swap",
});

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
		<head>
			<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
			rel="stylesheet"
			crossOrigin="anonymous"
			/>
			<link
			rel="stylesheet"
			href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css"
			/>
		</head>
		<body className={`${poppins.variable} ${quicksand.variable} ${stormGust.variable} ${bebasNeue.variable} hj-app`} >
			<div className="background-gradinet"></div>
			<div className="main-body">
				<Sidebar />
        <ScrollManager />
				<div className="right-section">
					<div className="top-menu">
						<div className="top-menu-left">
							<a className="menu-icon"><i className="fa-light fa-bars"></i></a>
							<Link className="active" href="/movies">Movie</Link>
							<a>TV Show</a>
							<a>Anime</a>
						</div>
						<div className="top-menu-right">
							<a>Upgrade</a>
							<a>User</a>
						</div>
					</div>
			
          <div className="right-bottom">
					  {children}
          </div>
          
				</div>
			</div>
		</body>
	</html>

  );
}