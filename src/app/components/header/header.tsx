
import Link from "next/link";
import { TypingText } from "@alvarobarrerotanarro/react-auto-typing";
import Nav from "@/app/components/header/nav";
// import Title from "@/app/components/header/title";
import Card from "@/app/components/card"


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
      {/* --- Header Nav Container --- */}
      <Nav />

      {/* --- Header Content --- */}
      <div>
        <Card className={`
          sm:min-h-16
          md:min-h-48
          lg:min-h-24
        `} />

        <Card className={`
          min-h-16
          md:min-h-20
          lg:min-h-32
        `}>

          <h1 className={`
            text-2xl
            md:text-4xl
            lg:text-6xl
          `}>
            {/* SEO */}
            <span className="hidden">Soy desarrollador de software autodidacta.</span>
            {/* Animation */}
            <TypingText duration={1500} cursor={<CustomCursor />} className={`text-foreground`}>Soy desarrollador de</TypingText>
            <br />
            <TypingText delay={1500} duration={1500} cursor={<CustomCursor />} className={`text-foreground`}>software autodidacta.</TypingText>
          </h1>
        </Card>

        <Card>
          <p>Mi nombre es <Link href="https://github.com/alvarobarrerotanarro" target="_blank">Álvaro</Link>, tengo 18 años y soy <span>desarrollador junior</span>.</p>
        </Card>

        <Card className={`
          min-h-8
          md:min-h-10
          lg:min-h-14
        `}>
          <h2 className={`
            text-xl   
            md:text-3xl
            lg:text-5xl
          `}>
            <span className={`hidden`}>{`console.log("Hello World !");`}</span>
            <TypingText delay={3200} duration={1500} cursor={<CustomCursor />} className={`text-foreground`}>{`console.log("Hello World !");`}</TypingText>
          </h2>
        </Card>

        <Card>
          <p>Experimentado en diversos <Link href="https://github.com/alvarobarrerotanarro" target="_blank">entornos y lenguajes</Link> de programacion.</p>
        </Card>
        <Card className="min-h-12"></Card>
      </div>
    </header>
  )
}