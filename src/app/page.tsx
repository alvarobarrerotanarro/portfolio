import Header from "@/app/components/header/header"
import Card from "@/app/components/card"

export default function Home() {
  return (
    <>
      <Header />
      <Card className={`
          flex
          flex-col
          gap-6
        `}>
        <h2>Asi justifico mis areas de interes.</h2>
        <p>
          Inicie mi experiencia como programador de forma autodidacta cuando apenas tenia catorce años trabajando en proyectos personales y experimentando en diferentes entornos.
        </p>
        <h3>Siempre he despertado interes por la WEB.</h3>
        <p>
          En los inicios de mi carrera commence diseñando paginas web con JavaScript, lo que eventualmente me llevo a presentar interes por el lado del servidor y <span>Node.JS</span>.
        </p>
        <h3>Soy proactivo y autodidacta.</h3>
        <p>
          Mas recientemente estoy centrado en aprender desarrollo de software para sistemas distribuidos en C/C++.
        </p>
      </Card>
      <Card>
        <br />
        <br />
      </Card>
      <Card>
        <h2>Estas son mis habilidades técnicas.</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt asperiores beatae dolor ex, delectus inventore doloremque aliquam ipsum consectetur.</p>
      </Card>
      <Card>
        <br />
        <br />
      </Card>
      <Card>
        <h2>Estos son algunos de mis proyectos destacados.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem a delectus perferendis perspiciatis ea velit illum ab reiciendis totam deserunt.</p>
      </Card>
    </>
  )
}