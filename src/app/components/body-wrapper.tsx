"use client"

import { MouseEventHandler, useContext } from "react";
import localFont from "next/font/local"
import { BackdropCtx } from "@/app/contexts/backdrop-ctx";


const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
    const bdropVisibility = useContext(BackdropCtx);

    /**
     * Whenever the user clicks the backdrop, it turns off.
     */
    const handleBackdropClick: MouseEventHandler<HTMLDivElement> = () => {
        if (bdropVisibility != null)
            bdropVisibility.setv(false);
    }

    const isShowBackdrop = () => {
        return bdropVisibility != null && bdropVisibility.vinfo.matchesVisibility;
    };

    return (
        <body
            className={`
          ${geistSans.className}
          relative
          bg-gradient-to-b from-grastart to-graend
          text-foreground
          antialiased

          ${isShowBackdrop() ? "overflow-hidden" : ""}
          `}
        >
            {children}
            {isShowBackdrop() ? (
                <div className={`
          absolute
          inset-0
          w-full
          bg-neutral-950/10
          backdrop-blur-sm
        `}
                    onClick={handleBackdropClick}
                >
                </div>
            ) : null}
        </body>
    )
}