"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

export default function WhyDropdown() {
    return (
        <section className="py-24 px-8 flex flex-col items-start gap-12 bg-[#121212]">
            <div className="space-y-6 text-white/80">
                <Statement delay={0}>Dropdown is not a studio.</Statement>
                <Statement delay={0.1}>Not a startup factory.</Statement>
                <Statement delay={0.2}>
                    It’s a place where ideas are allowed to grow quietly—then prove themselves.
                </Statement>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="pt-8 opacity-60"
                >
                    <p className="text-sm border-l-2 border-white/20 pl-4 py-1 italic">
                        milkyway is our first opened option.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function Statement({ children, delay }: { children: React.ReactNode; delay: number }) {
    return (
        <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className="text-lg font-light leading-relaxed"
        >
            {children}
        </motion.p>
    );
}
