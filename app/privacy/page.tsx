import Link from "next/link";

export const metadata = {
    title: "개인정보처리방침 | Dropdown",
};

export default function PrivacyPage() {
    return (
        <main className="max-w-2xl mx-auto px-6 py-16 text-white/80 text-sm leading-relaxed">
            <Link href="/" className="text-white/30 text-xs hover:text-white/60 transition-colors">
                ← 돌아가기
            </Link>

            <h1 className="text-xl font-semibold text-white mt-8 mb-8">개인정보처리방침</h1>

            <p className="text-white/40 text-xs mb-8">시행일: 2025년 1월 1일</p>

            <div className="space-y-8 text-white/60 text-[13px] leading-relaxed">
                <section>
                    <h2 className="text-white/80 font-medium mb-2">1. 개인정보의 수집 및 이용 목적</h2>
                    <p>드롭다운(Dropdown)(이하 &quot;회사&quot;)은 다음의 목적을 위해 개인정보를 처리합니다.</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>서비스 제공 및 운영</li>
                        <li>회원 가입 및 관리</li>
                        <li>결제 및 환불 처리</li>
                        <li>고객 문의 및 불만 처리</li>
                        <li>서비스 개선 및 신규 서비스 개발</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">2. 수집하는 개인정보 항목</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>필수항목: 이메일 주소, 비밀번호, 이름(닉네임)</li>
                        <li>결제 시: 결제 정보(카드번호, 결제 수단 정보는 PG사에서 직접 처리)</li>
                        <li>자동 수집 항목: 접속 로그, 쿠키, 접속 IP, 기기 정보</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">3. 개인정보의 보유 및 이용 기간</h2>
                    <p>회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관련 법령에 의해 보존할 필요가 있는 경우 아래 기간 동안 보관합니다.</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
                        <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
                        <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
                        <li>접속에 관한 기록: 3개월</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">4. 개인정보의 제3자 제공</h2>
                    <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>이용자가 사전에 동의한 경우</li>
                        <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">5. 개인정보의 처리 위탁</h2>
                    <p>회사는 서비스 이행을 위해 아래와 같이 개인정보 처리 업무를 위탁하고 있습니다.</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>토스페이먼츠: 결제 처리</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">6. 이용자의 권리와 행사 방법</h2>
                    <p>이용자는 언제든지 자신의 개인정보에 대해 열람, 수정, 삭제, 처리 정지를 요청할 수 있습니다. 관련 요청은 아래 연락처로 문의해 주시기 바랍니다.</p>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">7. 개인정보의 파기</h2>
                    <p>회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</p>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">8. 개인정보 보호책임자</h2>
                    <ul className="list-none space-y-1">
                        <li>성명: 황재하</li>
                        <li>직위: 대표</li>
                        <li>이메일: hello@dropdown.xyz</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white/80 font-medium mb-2">9. 개인정보처리방침의 변경</h2>
                    <p>이 개인정보처리방침은 법령, 정책 또는 보안 기술의 변경에 따라 내용이 변경될 수 있으며, 변경 시 웹사이트를 통해 공지합니다.</p>
                </section>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 text-white/20 text-[10px]">
                <p>드롭다운(Dropdown) · 대표자: 황재하</p>
                <p>hello@dropdown.xyz</p>
            </div>
        </main>
    );
}
