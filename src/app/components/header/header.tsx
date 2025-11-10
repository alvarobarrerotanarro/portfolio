import Link from "next/link";
import Nav from "@/app/components/header/nav";
import Title from "@/app/components/header/title";
import Card from "@/app/components/card"

export default function Header() {

  return (
    <div className={`
      relative
      bg-[var(--background)]
    `}>
      {/* --- Header Nav Container --- */}
      <div
        className={`
            absolute
            -z-50
            w-full
            h-full
          `}
      >
        <div
          className={`
            flex
            justify-center
            py-6
          `}
        >
          <Nav />
        </div>
      </div>
      {/* --- Header Content --- */}
      <div>
        <Card>
          <br />
          <br />
          <br />
          <br />
        </Card>

        <Card className={`
            flex 
            flex-col
          `}>
          <Title duration={1500} type="h1">Desarrollador de Software Autodicacta.</Title>
        </Card>
        <Card>
          <p>Mi nombre es <Link href="https://github.com/alvarobarrerotanarro" target="_blank">Álvaro</Link> y soy <span>desarrollador por vocacion</span>.</p>
        </Card>

        <Card className={`
            flex 
            flex-col
          `}>
          <Title duration={5000} type="h6">{`console.log("Hello World !");`}</Title>
        </Card>
        <Card>
          <p>Experimentado en multitud de <Link href="https://github.com/alvarobarrerotanarro" target="_blank">entornos y lenguajes</Link> de programacion.</p>
        </Card>
        <Card>
          <br />
          <br />
          <br />
          <br />
        </Card>
      </div>
    </div>
  )
}