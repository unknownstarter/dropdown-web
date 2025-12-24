"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const sentences = [
    "Good ideas are often hidden.",
    "Potential exists everywhere—rarely unlocked.",
    "Dropdown exists to open what’s inside.",
];

export default function Manifesto() {
    return (
        <section className="py-32 px-8 flex flex-col gap-24 relative overflow-hidden bg-[#121212]">
            {sentences.map((text, i) => (
                <FadeInText key={i} text={text} delay={i * 0.1} />
            ))}
        </section>
    );
}

function FadeInText({ text, delay }: { text: string; delay: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay }}
            className="text-2xl font-light leading-snug text-white/90 text-center tracking-wide"
        >
            {text}
        </motion.p>
    );
}
