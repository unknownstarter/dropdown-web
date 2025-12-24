"use client";

import { trackEvent } from "@/lib/analytics";

export default function Footer() {
    const handleSocialClick = (platform: string) => {
        trackEvent("cta_click", { cta: `footer_${platform}` });
    };

    return (
        <footer className="py-12 pb-24 text-center text-white/30 text-xs flex flex-col gap-4">
            <div className="flex justify-center gap-6">
                <a href="https://www.threads.net/@whatif_multiverse" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors" onClick={() => handleSocialClick("threads")}>Threads</a>
                <a href="mailto:whatif.milkyway.dev@gmail.com" className="hover:text-white/60 transition-colors" onClick={() => handleSocialClick("email")}>Email</a>
            </div>
            <p>© {new Date().getFullYear()} Dropdown</p>
        </footer>
    );
}
