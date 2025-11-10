"use client"

import React, { useEffect } from "react"
import { useTextAnimation } from "@/utils/text-animation";


type TitleType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TitleTypeComProps = { children: React.ReactNode, className: string, type: TitleType };

/**
 * Helper react component. Checks the title type and returns the given JSX tag with children ReactNode within.
 */
function TitleTypeComp({ children, type, className }: TitleTypeComProps) {
  if (type == "h1") {
    return <h1 className={className}>{children}</h1>
  } else if (type == "h2") {
    return <h2 className={className}>{children}</h2>
  } else if (type == "h3") {
    return <h3 className={className}>{children}</h3>
  } else if (type == "h4") {
    return <h4 className={className}>{children}</h4>
  } else if (type == "h5") {
    return <h5 className={className}>{children}</h5>
  } else if (type == "h6") {
    return <h6 className={className}>{children}</h6>
  }
}

type TitleProps = {
  className?: string;
  children: string;
  duration: number;
  type?: TitleType
}

export default function Title({ className = "", children, duration, type = "h1" }: TitleProps) {
  const [textState, textAnimationPlayer, textAnimationKiller] = useTextAnimation({ target: children, duration });

  /**
   * Watches the changes in the animation and
   * kills the previous animation and plays the
   * new one.
   */
  useEffect(() => {
    textAnimationPlayer();

    return () => {
      textAnimationKiller();
    }
  }, [textAnimationPlayer]);

  return (
    <div className={className}>
      <TitleTypeComp type={type} className={`
          inline-block
          text-[3rem]
          sm:text-[3.5rem]
          md:text-[4.2rem]
        `}>
        <span className={`
          text-inherit    
        `}>{textState.text}</span>
        <div className={`
          inline-block
          w-1
          h-14
          `}>
          <div style={{
            animation: "title-blinking-cursor ease 1s infinite"
          }} className={`
              w-full
              h-full
              bg-glow
            `}>
          </div>
        </div>
      </TitleTypeComp>
    </div>
  )
}