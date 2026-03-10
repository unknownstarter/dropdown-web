import Link from "next/link";

export const metadata = {
    title: "이용약관 | Dropdown",
};

export default function TermsPage() {
    return (
        <main className="max-w-2xl mx-auto px-6 py-16 text-white/80 text-sm leading-relaxed">
            <Link href="/" className="text-white/30 text-xs hover:text-white/60 transition-colors">
                ← 돌아가기
            </Link>

            <h1 className="text-xl font-semibold text-white mt-8 mb-8">이용약관</h1>

            <p className="text-white/40 text-xs mb-8">시행일: 2025년 1월 1일</p>

            <div className="space-y-8 text-white/60 text-[13px] leading-relaxed">
                <section>
                    <h2 className="text-white/80 font-medium mb-2">제1조 (목적)</h2>
                    <p>이 약관은 드롭다운(Dropdown)(이하 &quot;회사&quot;)이 제공하는 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.</p>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">제2조 (정의)</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>&quot;서비스&quot;란 회사가 제공하는 모든 온라인 서비스를 의미합니다.</li>
                        <li>&quot;이용자&quot;란 이 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
                        <li>&quot;회원&quot;이란 회사에 회원 등록을 한 자로서, 회사의 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">제3조 (약관의 효력 및 변경)</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</li>
                        <li>회사는 합리적인 사유가 발생할 경우 관련 법령에 위배되지 않는 범위 내에서 약관을 변경할 수 있으며, 변경된 약관은 공지 후 효력이 발생합니다.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">제4조 (서비스의 제공)</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>회사는 이용자에게 다양한 온라인 서비스를 제공합니다.</li>
                        <li>서비스의 구체적인 내용은 회사가 별도로 정하는 바에 따릅니다.</li>
                        <li>회사는 운영상, 기술상의 필요에 따라 서비스를 변경할 수 있습니다.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">제5조 (회원 가입)</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>이용자는 회사가 정한 양식에 따라 회원 정보를 기입한 후 이 약관에 동의한다는 의사 표시를 함으로써 회원 가입을 신청합니다.</li>
                        <li>회사는 상기 신청에 대해 승낙함으로써 회원 가입이 완료됩니다.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">제6조 (이용자의 의무)</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>이용자는 관련 법령, 이 약관의 규정, 이용 안내 등 회사가 통지하는 사항을 준수하여야 합니다.</li>
                        <li>이용자는 회사의 서비스를 이용하여 불법적인 행위를 하여서는 안 됩니다.</li>
                        <li>이용자는 타인의 개인정보를 침해하거나 서비스 운영을 방해하는 행위를 하여서는 안 됩니다.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">제7조 (회사의 의무)</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>회사는 관련 법령과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위해 노력합니다.</li>
                        <li>회사는 이용자의 개인정보를 보호하기 위해 보안 시스템을 구축하며 개인정보처리방침을 준수합니다.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">제8조 (서비스의 중단)</h2>
                    <p>회사는 시스템 점검, 교체 및 고장, 통신 두절 등의 사유가 발생한 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">제9조 (면책 조항)</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 책임이 면제됩니다.</li>
                        <li>회사는 이용자의 귀책 사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">제10조 (분쟁 해결)</h2>
                    <p>이 약관에 관한 분쟁은 대한민국 법률에 따라 해결하며, 회사의 본사 소재지를 관할하는 법원을 전속적 관할 법원으로 합니다.</p>
                </section>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 text-white/20 text-[10px]">
                <p>드롭다운(Dropdown) · 대표자: 황재하</p>
                <p>hello@dropdown.xyz</p>
            </div>
        </main>
    );
}
