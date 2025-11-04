import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Headers/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ebenezer Oluwafemi - Data Analyst & Frontend Developer",
  description: "Professional portfolio showcasing data analysis expertise, business intelligence solutions, and web development projects. Specializing in Power BI, Excel, SQL, Python, and modern web technologies.",
  keywords: "Data Analyst, Business Intelligence, Power BI, Excel, SQL, Python, Frontend Developer, React, TypeScript",
  authors: [{ name: "Ebenezer Oluwafemi" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950`}>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Technologies />
          <Contact />
        </main>
        <Footer />
        {children}
      </body>
    </html>
  );
}
