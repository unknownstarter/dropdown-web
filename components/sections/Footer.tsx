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
            <div className="mt-4 text-white/20 text-[10px] leading-relaxed space-y-0.5">
                <p>상호: dropdown · 대표자: 노아</p>
                <p>사업자등록번호: 154-28-02110</p>
                <p>서울특별시 송파구 중대로 207, 2층 201-J554호(가락동, 대명빌딩)</p>
                <p>hello@dropdown.xyz</p>
            </div>
        </footer>
    );
}
