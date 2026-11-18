"use client";

import PhoneFrame from "@/components/PhoneFrame";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import InsideDropdown from "@/components/sections/InsideDropdown";
import WhyDropdown from "@/components/sections/WhyDropdown";
import Footer from "@/components/sections/Footer";
import { useEffect, useState } from "react";
import { pageview } from "@/lib/analytics";

export default function Home() {
  // The hero's only button opens the list below, so the list is the one place products are chosen.
  const [insideOpen, setInsideOpen] = useState(false);

  useEffect(() => {
    pageview(window.location.pathname);
  }, []);

  return (
    <PhoneFrame>
      <Hero onExplore={() => setInsideOpen(true)} />
      <Manifesto />
      <InsideDropdown isOpen={insideOpen} setIsOpen={setInsideOpen} />
      <WhyDropdown />
      <Footer />
    </PhoneFrame>
  );
}
