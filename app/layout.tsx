import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: " next test app",
  description: "Created by JG Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link real="icon" href="/favicon.ico" />
      </Head>{" "}
      <body className="mx-4">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
