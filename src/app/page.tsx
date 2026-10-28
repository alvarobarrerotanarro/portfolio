import Image from "next/image";
import Header from "@/app/components/header/header"
import Card from "@/app/components/card"
import SliderCard from "@/app/components/slider-card"

const techImages = [
  {
    name: "C++",
    width: 50,
    height: 50,
    alt: "Logo de C++",
    image: (await import("@/app/images/tech/cpp_logo.webp")).default
  },
  {
    name: "CMake",
    width: 50,
    height: 50,
    alt: "Logo de CMake",
    image: (await import("@/app/images/tech/cmake_logo.webp")).default
  },
  {
    name: "HTML",
    width: 50,
    height: 50,
    alt: "Logo de HTML",
    image: (await import("@/app/images/tech/html_logo.png")).default
  },
  {
    name: "CSS",
    width: 50,
    height: 50,
    alt: "Logo de CSS",
    image: (await import("@/app/images/tech/css_logo.png")).default
  },
  {
    name: "JavaScript",
    width: 50,
    height: 50,
    alt: "Logo de JavaScript",
    image: (await import("@/app/images/tech/js_logo.png")).default
  },
  {
    name: "React",
    width: 50,
    height: 50,
    alt: "Logo de React",
    image: (await import("@/app/images/tech/react_logo.webp")).default
  },


  {
    name: "Node.js",
    width: 50,
    height: 50,
    alt: "Logo de Node.js",
    image: (await import("@/app/images/tech/nodejs_logo.png")).default
  },
  {
    name: "Java",
    width: 50,
    height: 50,
    alt: "Logo de Java",
    image: (await import("@/app/images/tech/java_logo.png")).default
  },


  {
    name: "SQL",
    width: 50,
    height: 50,
    alt: "Logo de SQL",
    image: (await import("@/app/images/tech/sql_logo.png")).default
  },


  {
    name: "Vim",
    width: 50,
    height: 50,
    alt: "Logo de Vim",
    image: (await import("@/app/images/tech/vim_logo.webp")).default
  },
  {
    name: "Git",
    width: 50,
    height: 50,
    alt: "Logo de Git",
    image: (await import("@/app/images/tech/git_logo.png")).default
  },
  {
    name: "Linux",
    width: 50,
    height: 50,
    alt: "Logo de Linux",
    image: (await import("@/app/images/tech/linux_logo.webp")).default
  }
];

export default function Home() {
  return (
    <>
      <Header />

      <Card>
        <h2>Tecnologias que dominio.</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt asperiores beatae dolor ex, delectus inventore doloremque aliquam ipsum consectetur.</p>
      </Card>

      <SliderCard sliderWidth={1500} height={30}>
        {techImages.map(tech => {
          return <div className="min-h-full flex items-center select-none">
            <Image src={tech.image.src} alt={tech.alt} width={tech.width} height={tech.height} />
          </div>
        })}
      </SliderCard>



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