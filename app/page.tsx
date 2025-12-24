"use client";

import PhoneFrame from "@/components/PhoneFrame";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import InsideDropdown from "@/components/sections/InsideDropdown";
import WhyDropdown from "@/components/sections/WhyDropdown";
import Footer from "@/components/sections/Footer";
import { useEffect } from "react";
import { pageview } from "@/lib/analytics";

export default function Home() {
  useEffect(() => {
    pageview(window.location.pathname);
  }, []);

  return (
    <PhoneFrame>
      <Hero />
      <Manifesto />
      <InsideDropdown />
      <WhyDropdown />
      <Footer />
    </PhoneFrame>
  );
}
