"use client"

import { MouseEventHandler, useContext } from "react";
import { BackdropCtx } from "@/app/contexts/backdrop-ctx";
import { geistSans, spaceGrotesk } from "@/app/fonts";

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
          ${spaceGrotesk.className}
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