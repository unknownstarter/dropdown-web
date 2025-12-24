import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PhoneFrameProps {
    children: ReactNode;
    className?: string;
}

export default function PhoneFrame({ children, className }: PhoneFrameProps) {
    return (
        <div className="min-h-screen w-full flex justify-center bg-[#121212] overflow-x-hidden">
            <div
                className={cn(
                    "w-full max-w-[420px] bg-[#121212] relative flex flex-col min-h-screen shadow-2xl overflow-x-hidden",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}
