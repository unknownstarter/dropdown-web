"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import Image from "next/image";

export default function Hero({ onExplore }: { onExplore: () => void }) {
    const scrollToProduct = () => {
        trackEvent("cta_click", { cta: "explore_inside" });
        const el = document.getElementById("inside-dropdown");
        el?.scrollIntoView({ behavior: "smooth" });

        // Open the list only after the scroll lands: opening it mid-scroll changes the page height and stops the scroll short.
        let opened = false;
        const open = () => {
            if (opened) return;
            opened = true;
            window.removeEventListener("scrollend", open);
            onExplore();
        };
        window.addEventListener("scrollend", open);
        window.setTimeout(open, 1200);
    };

    return (
        <section className="h-screen flex flex-col items-center justify-center px-6 relative snap-start">
            {/* Ambient Background Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center z-10 flex flex-col items-center"
            >
                <div className="relative w-[180px] h-[60px] mb-4">
                    <Image
                        src="/logo.png"
                        alt="Dropdown Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <h1 className="text-5xl font-bold tracking-tight mb-2 text-white">
                    Dropdown
                </h1>
                <p className="text-lg text-white/60 mb-8 font-light tracking-wide">
                    A container of possibilities.
                </p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="text-white/80 max-w-[280px] mx-auto mb-12 text-sm leading-relaxed"
                >
                    We build small products that quietly expand human potential.
                </motion.p>

                <div className="flex flex-col gap-3 items-center w-full max-w-[240px] mx-auto">
                    <button
                        onClick={scrollToProduct}
                        className="w-full bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:scale-105 transition-transform active:scale-95 flex items-center justify-center gap-2"
                    >
                        Explore what’s inside
                        <ArrowDown className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
