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

    const visitVibeSemantic = () => {
        trackEvent("cta_click", { cta: "visit_vibesemantic" });
        window.open("https://www.vibesemantic.xyz/", "_blank");
    };

    const visitMomoApp = () => {
        trackEvent("cta_click", { cta: "visit_momo_app" });
        window.open("https://apps.apple.com/kr/app/momo-%EB%AA%A8%EB%93%A0-%EC%9D%B8%EC%97%B0%EC%97%94-%EC%9D%B4%EC%9C%A0%EA%B0%80-%EC%9E%88%EB%8B%A4/id6760338547", "_blank");
    };

    const visitMomoWeb = () => {
        trackEvent("cta_click", { cta: "visit_momo_web" });
        window.open("https://fatemomo.xyz", "_blank");
    };

    const visitFanToPro = () => {
        trackEvent("cta_click", { cta: "visit_fan_to_pro" });
        window.open("https://growthcareer.xyz", "_blank");
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
                        Visit milkyway (iOS)
                    </button>

                    <button
                        onClick={visitVibeSemantic}
                        className="w-full bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
                    >
                        Visit Vibe Semantic
                    </button>

                    <button
                        onClick={visitMomoApp}
                        className="w-full bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
                    >
                        Visit momo (iOS)
                    </button>

                    <button
                        onClick={visitMomoWeb}
                        className="w-full bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
                    >
                        Visit momo (Web)
                    </button>

                    <button
                        onClick={visitFanToPro}
                        className="w-full bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
                    >
                        Visit Fan to Pro
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
