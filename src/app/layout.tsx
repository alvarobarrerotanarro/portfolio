"use client"

import React, { MouseEventHandler, useContext } from "react";
// import type { Metadata } from "next";
import localFont from "next/font/local";
import BackdropProvider, { BackdropCtx } from "@/app/contexts/backdrop-ctx";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// FIXME: metadata is incompatible with "use client" directive.

// export const metadata: Metadata = {
//   title: "Portfolio Álvaro Barrero Tanarro",
//   description: "Portfolio, presentacion y curriculum para el desarrollador de software y aplicaciones autodidacata Álvaro Barrero Tanarro; con experiencia en numerosos entornos de programacion y tecnologias.",
//   authors: [{ name: "Álvaro Barrero Tanarro", url: "https://github.com/alvarobarrerotanarro" }],
//   creator: "Álvaro Barrero Tanarro",
//   keywords: ["portfolio", "alvaro barrero tanarro", "alvaro", "barrero", "desarrollador", "github", "typescript", "javascript", "c", "c++", "cpp", "tecnologia", "informatica", "programador", "software", "desarrollo de software", "web", "desarrollo web", "aplicaciones", "desarrollo de aplicaciones", "bases de datos", "react", "nextjs", "nodejs", "cmake"],
//   classification: "Portafolio de desarrollador de software",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BackdropProvider>
        <BodyWrapper>{children}</BodyWrapper>
      </BackdropProvider>
    </html>
  );
}

function BodyWrapper({ children }: { children: React.ReactNode }) {
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