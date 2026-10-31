"use client"

import { useEffect, useRef } from "react";
import Link from "next/link";
import { TypingText } from "@alvarobarrerotanarro/react-auto-typing";
import Nav from "@/app/components/header/nav";
import Card from "@/app/components/card"
import { spaceGrotesk } from "@/app/fonts";

const outputConsoleMessages = [
  {
    text: "Server listening at http://localhost:3000",
    delay: 500
  },
  {
    text: "GET / 200 in 16ms",
    delay: 300
  },
  {
    text: "GET /#proyectos 200 in 27ms",
    delay: 200
  },
  {
    text: "GET /#contacto 200 in 12ms",
    delay: 600
  }
];

function CustomCursor() {
  return (
    <div
      className={`
          inline-block
          w-1
          h-3
          sm:h-5
          md:h-7
          lg:h-8
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
  );
}

export default function Header() {
  const outputConsoleReferences = useRef<HTMLElement[]>([]);
  let accumulatedDelay = 6500;

  useEffect(() => {
    for (let i = 0; i < outputConsoleReferences.current.length; i++) {
      console.log("hola");

      const { delay } = outputConsoleMessages[i];
      accumulatedDelay += delay;

      setTimeout(() => {
        const messageElement = outputConsoleReferences.current[i];
        messageElement.style.visibility = "visible";
        messageElement.style.animation = "fadein-with-rotation 0.2s ease-in-out";
      }, accumulatedDelay);
    }
  }, [outputConsoleReferences.current.length]);

  return (
    <header className={`
      relative
      w-full
      bg-[var(--background)]
    `}>
      <Nav />
      <Card className={`
          min-h-16
          md:min-h-48
          lg:min-h-24
          px-4
          py-2
        `} />

      <Card className={`
          min-h-28
          md:min-h-40
          lg:min-h-48
          px-4

          flex
          items-center
        `}>

        <h1 className={`
            text-3xl
            md:text-5xl
            lg:text-6xl
          `}>
          <span className="hidden">Soy desarrollador autodidacta.</span>
          <TypingText duration={1500} cursor={<CustomCursor />} className={`text-foreground`}>Soy desarrollador</TypingText>
          <br />
          <TypingText delay={1500} duration={1500} cursor={<CustomCursor />} className={`text-foreground`}>autodidacta.</TypingText>
        </h1>
      </Card>

      <Card>
        <p className={`text-xl`}>Me llamo <Link href="https://github.com/alvarobarrerotanarro" target="_blank">Álvaro</Link> y me gusta <span>programar</span> 😁👍.</p>
      </Card>

      <Card className={`
          min-h-24
          md:min-h-14
          lg:min-h-96
          p-4
          
          flex
          flex-col
          justify-between
          gap-4
        `}>
        <h2 className={`
            text-xl   
            md:text-3xl
            lg:text-5xl
          `}>
          <span className={`hidden`}>{`npm run dev`}</span>
          <span>alvaro@ubuntu</span>:<span>~/proj</span><span className="text-[--foreground]">$ </span>
          <TypingText delay={3200} duration={3000} cursor={<CustomCursor />} className={`text-foreground`}>{`npm run dev`}</TypingText>
        </h2>

        {outputConsoleMessages.map((msg, i) => {
          return (
            <p key={i} ref={(e) => {
              if (e != null) {
                outputConsoleReferences.current[i] = e;
              }
            }} style={{ visibility: "hidden" }} className={`md:text-2xl`}>{msg.text}</p>
          );
        })}

      </Card>


      <Card className="min-h-12 px-4 py-2">
        <br />
        <br />
        <br />
      </Card>
    </header>
  )
}