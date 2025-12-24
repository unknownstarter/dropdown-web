"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Command } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export default function InsideDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        trackEvent("dropdown_toggle", { state: newState ? "open" : "close" });
    };

    return (
        <section
            id="inside-dropdown"
            className="py-24 px-6 min-h-[60vh] flex flex-col items-center justify-start bg-[#121212]"
        >
            <div className="mb-10 text-center">
                <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-2">
                    The Container
                </h2>
            </div>

            <div className="w-full max-w-[340px] relative z-20">
                <motion.button
                    onClick={toggleOpen}
                    className={cn(
                        "w-full bg-[#1A1A1A] border border-white/5 rounded-2xl p-4 flex items-center justify-between transition-all duration-300",
                        isOpen ? "rounded-b-none border-b-0 bg-[#222]" : "hover:bg-[#222] shadow-lg shadow-black/50"
                    )}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" : "bg-white/20"}`} />
                        <span className="font-medium text-white/90">Inside Dropdown</span>
                    </div>
                    <ChevronDown
                        className={cn(
                            "w-5 h-5 text-white/50 transition-transform duration-300",
                            isOpen && "rotate-180"
                        )}
                    />
                </motion.button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute top-full left-0 right-0 bg-[#222] border border-t-0 border-white/5 rounded-b-2xl overflow-hidden shadow-2xl backdrop-blur-xl"
                        >
                            <div className="p-2 space-y-2">
                                {/* Product 1: Milkyway */}
                                <ProductCard
                                    title="milkyway"
                                    desc="A place where thoughts meet."
                                    icon={<Command className="w-4 h-4" />}
                                    active={true}
                                    link="https://apps.apple.com/kr/app/milkyway-%EC%B1%85%EC%97%90%EC%84%9C-%EB%B0%9C%EA%B2%AC%ED%95%9C-%EC%A7%80%EC%A0%81%EC%9D%B8-%EB%82%98%EB%A5%BC-%EB%A9%94%EB%AA%A8%ED%95%B4%EC%9A%94/id6741465148"
                                    note="2026년 상반기 중 배포 예정 (Android)"
                                />

                                {/* Product 2: Coming Soon */}
                                <ProductCard
                                    title="???"
                                    desc="Hidden potential."
                                    active={false}
                                />
                            </div>

                            <div className="px-4 py-3 bg-white/5 text-[10px] text-white/30 text-center border-t border-white/5 uppercase tracking-wider">
                                Select an option to expand
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

function ProductCard({
    title,
    desc,
    icon,
    active,
    link,
    note,
}: {
    title: string;
    desc: string;
    icon?: React.ReactNode;
    active: boolean;
    link?: string;
    note?: string;
}) {
    const handleClick = () => {
        if (active && link) {
            trackEvent("cta_click", { cta: `product_${title.toLowerCase()}` });
            window.open(link, '_blank');
        }
    };

    return (
        <div
            onClick={handleClick}
            className={cn(
                "group p-4 rounded-xl flex flex-col gap-2 transition-all duration-200",
                active
                    ? "cursor-pointer bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10"
                    : "opacity-40 cursor-not-allowed bg-transparent"
            )}
        >
            <div className="flex items-start justify-between w-full">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        {icon && <span className="text-white/70">{icon}</span>}
                        <h3 className="text-sm font-semibold text-white group-hover:text-white transition-colors">
                            {title}
                        </h3>
                    </div>
                    <p className="text-xs text-white/50">{desc}</p>
                </div>

                {active && (
                    <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-white transition-colors" />
                )}
            </div>

            {note && (
                <p className="text-[10px] text-white/30 font-light mt-1 w-full text-left">
                    {note}
                </p>
            )}
        </div>
    );
}
