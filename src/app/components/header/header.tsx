
import Link from "next/link";
import localFont from "next/font/local"
import { TypingText } from "@alvarobarrerotanarro/react-auto-typing";
import Nav from "@/app/components/header/nav";
import Card from "@/app/components/card"

const spaceGrotesk = localFont({
  src: "../../fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  weight: "100 900",
});

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
  return (
    <header className={`
      relative
      w-full
      bg-[var(--background)]
    `}>
      <Nav />
      <div>
        <Card className={`
          min-h-16
          md:min-h-48
          lg:min-h-24
          px-4
          py-2
        `} />

        <Card className={`
          min-h-16
          md:min-h-20
          lg:min-h-32
          px-4
          py-2
        `}>

          <h1 className={`
            text-2xl
            md:text-4xl
            lg:text-6xl
          `}>
            <span className="hidden">Soy desarrollador de software autodidacta.</span>
            <TypingText duration={1500} cursor={<CustomCursor />} className={`${spaceGrotesk.className} text-foreground`}>Soy desarrollador de</TypingText>
            <br />
            <TypingText delay={1500} duration={1500} cursor={<CustomCursor />} className={`${spaceGrotesk.className} text-foreground`}>software autodidacta.</TypingText>
          </h1>
        </Card>

        <Card>
          <p>Mi nombre es <Link href="https://github.com/alvarobarrerotanarro" target="_blank">Álvaro</Link>, tengo 19 años y soy <span>desarrollador</span>.</p>
        </Card>

        <Card className={`
          min-h-8
          md:min-h-10
          lg:min-h-14
          px-4
          py-2
        `}>
          <h2 className={`
            text-xl   
            md:text-3xl
            lg:text-5xl
          `}>
            <span className={`hidden`}>{`std::cout << "Hello World" << '\\n';`}</span>
            <TypingText delay={3200} duration={1500} cursor={<CustomCursor />} className={`${spaceGrotesk.className} text-foreground`}>{`std::cout << "Hello World" << '\\n';`}</TypingText>
          </h2>
        </Card>

        <Card>
          <p>Con conocimientos en diferentes <Link href="https://github.com/alvarobarrerotanarro" target="_blank">entornos y lenguajes</Link> de programacion.</p>
        </Card>
        <Card className="min-h-12 px-4 py-2"></Card>
      </div>
    </header>
  )
}