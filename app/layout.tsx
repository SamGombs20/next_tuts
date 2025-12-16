import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css"
import Footer from "./components/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ObesiScan",
  description: "Developed by Joshua",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <Navbar />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
