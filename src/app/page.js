"use client"

import ClientSection from "@/components/ClientSection/ClientSection";
import GenerateImage from "@/components/GenerateImage/GenerateImage";
import TopSection from "@/components/TopSection/TopSection";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";


export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <div className="bg-gradient-to-r from-gray-50 to-gray-100">
        {/* First Section in Home */}
        <TopSection />
        {/* Secound Section in Home */}
        <ClientSection />
        {/* Thard Section in Home */}
        <div data-aos="fade-up">
          <GenerateImage />
        </div>
      </div>
    </>
  )
}