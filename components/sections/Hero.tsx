"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import Image from "next/image";

export default function Hero() {
    const scrollToProduct = () => {
        trackEvent("cta_click", { cta: "explore_inside" });
        const el = document.getElementById("inside-dropdown");
        el?.scrollIntoView({ behavior: "smooth" });
    };

    const visitMilkyway = () => {
        trackEvent("cta_click", { cta: "visit_milkyway" });
        window.open("https://apps.apple.com/kr/app/milkyway-%EC%B1%85%EC%97%90%EC%84%9C-%EB%B0%9C%EA%B2%AC%ED%95%9C-%EC%A7%80%EC%A0%81%EC%9D%B8-%EB%82%98%EB%A5%BC-%EB%A9%94%EB%AA%A8%ED%95%B4%EC%9A%94/id6741465148", "_blank");
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

                    <button
                        onClick={visitMilkyway}
                        className="w-full bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
                    >
                        Visit milkyway
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
