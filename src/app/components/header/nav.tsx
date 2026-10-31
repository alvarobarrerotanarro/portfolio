"use client"

import Link from "next/link";
import { MouseEventHandler, useContext, useEffect } from "react";
import { BackdropCtx } from "@/app/contexts/backdrop-ctx";
import Card from "@/app/components/card"
import ThemeButton from "@/app/components/header/theme-button";
import { spaceGrotesk } from "@/app/fonts";

const linksData = [
  {
    text: "SOBRE MI",
    href: "/#sobre-mi"
  },
  {
    text: "PROYECTOS",
    href: "/#proyectos"
  },
  {
    text: "TECNOLOGIAS",
    href: "/#tecnologias"
  },
  {
    text: "CONTACTO",
    href: "/#contacto"
  }
];

function NavLinks({ broad }: { broad: boolean }) {
  const ulcls = broad ? (
    "flex flex-col gap-6 lg:flex-row lg:gap-[15%]"
  ) : (
    "flex flex-col gap-6 nowrap"
  );
  const licls = "hover:no-underline text-foreground text-nowrap";

  return (
    <ul className={ulcls}>
      {linksData.map((data, i) => {
        return (
          <li key={i}><Link href={data.href} className={licls}><span className={`${spaceGrotesk.className} text-[--foreground-light] hover:text-[--foreground]`}>{data.text}</span></Link></li>
        );
      })}
    </ul >
  );
}

export default function Nav() {
  const bdropVisibility = useContext(BackdropCtx)

  /**
   * Keeps track of the screen width to disble the backdrop.
   */
  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth > 758) {
        bdropVisibility?.setv(false);
      }
    }
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  /**
   * Alternates the context state, and the button doesn't work if it's hidden.
   */
  const handleThumbClick: MouseEventHandler<HTMLElement> = () => {
    if (bdropVisibility != null && window.innerWidth <= 758) {
      bdropVisibility.setv(!bdropVisibility.vinfo.matchesVisibility);
    }
  }

  const isShowBackdrop = () => {
    return bdropVisibility != null && bdropVisibility.vinfo.matchesVisibility;
  };

  return (
    <nav
      className={`
        w-full
        z-50
        fixed
    `}>
      {/* Desktop nav handle */}
      <div className={`
        w-full
        hidden     
        md:inline-block
        bg-background-heavy
      `}>
        <Card>
          <div
            className={`
              min-h-48
              lg:min-h-24
              flex
              items-center
            `}>
            <div className={`
              flex
              justify-between
              flex-grow
            `}>
              <NavLinks broad={true} />
              <ThemeButton />
            </div>
          </div>
        </Card>
      </div>

      {/* Mobile nav handle */}
      <div className={`
        w-full
        flex
        md:hidden
        bg-background-heavy
      `}>

        <Card className={`
          min-h-16
          flex
          flex-col
          justify-center
        `}>
          <button className={`w-full flex justify-center`}
            onClick={handleThumbClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`
                transition-transform
                size-8
                ${isShowBackdrop() ? "rotate-180" : ""}
              `}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
          </button>

          {/* Dialog box */}
          {isShowBackdrop() ? (
            <div className={`
              flex
              flex-col
              gap-8
              justify-between
              p-8
            `}>
              <NavLinks broad={false} />
              <ThemeButton />
            </div>
          ) : null}

        </Card>

      </div>
    </nav >
  )
}