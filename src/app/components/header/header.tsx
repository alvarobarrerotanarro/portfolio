import Link from "next/link";
import Nav from "@/app/components/header/nav";
import Title from "@/app/components/header/title";
import Card from "@/app/components/card"

export default function Header() {

  return (
    <header className={`
      relative
      w-full
      bg-[var(--background)]
    `}>
      {/* --- Header Nav Container --- */}
      <Nav showThumbAt={758} height={80} />

      {/* --- Header Content --- */}
      <div>
        <Card className={`
          min-h-[79px]    
        `} />

        <Card className={`
            flex 
            flex-col
          `}>
          <Title duration={1500} type="h1">Desarrollador de Software Autodidacta.</Title>
        </Card>
        <Card>
          <p>Mi nombre es <Link href="https://github.com/alvarobarrerotanarro" target="_blank">Álvaro</Link>, tengo 18 años y soy <span>desarrollador junior</span>.</p>
        </Card>

        <Card className={`
            flex 
            flex-col
          `}>
          <Title duration={5000} type="h6">{`console.log("Hello World !");`}</Title>
        </Card>
        <Card>
          <p>Experimentado en diversos <Link href="https://github.com/alvarobarrerotanarro" target="_blank">entornos y lenguajes</Link> de programacion.</p>
        </Card>
        <Card className="min-h-[100px]"></Card>
      </div>
    </header>
  )
}