import Image from "next/image";
import Link from "next/link"
import Header from "@/app/components/header/header"
import Card from "@/app/components/card"
import SliderCard from "@/app/components/slider-card"
import Project from "@/app/components/project"
import InvertedCard from "@/app/components/inverted-card";
import { spaceGrotesk } from "@/app/fonts";

import ArrowSvg from "@/app/images/svgs/arrow.svg"
import GitHubSvg from "@/app/images/svgs/github.svg"

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

const projectsData = [
  {
    name: "UEMOVE",
    description: "Aplicacion de escritorio para gestion deportiva universitaria.",
    tags: ["Java", "Swing", "MySQL", "JDBC", "Hikary"],
    githubURL: "https://github.com/alvarobarrerotanarro/UEMOVE"
  },
  {
    name: "Easy Password Manager",
    description: "Gestor de contraseñas con encriptacion para linea de comandos.",
    tags: ["C", "CMake", "libsodium"],
    githubURL: "https://github.com/alvarobarrerotanarro/easy-password-manager",
  },
  {
    name: "Easy CPP Sockets",
    description: "Libreria C++ RAII para sockets Unix con soporte para std::iostream.",
    tags: ["C++", "CMake", "GTest"],
    githubURL: "https://github.com/alvarobarrerotanarro/EasyCPPSockets"
  },
  {
    name: "Controlador Electrovalvulas ESP32",
    description: "Controlador de sistema de limpieza para piscinas basado en electrovalvulas.",
    tags: ["C++", "Arduino", "ESP32"],
    githubURL: "https://github.com/alvarobarrerotanarro/ControladorElectrovalvulasPiscina"
  },
  {
    name: "Clon Cookie Clicker",
    description: "Consiste en mi propia version del famoso juego Cookie Clicker.",
    tags: ["JavaScript", "HTML", "CSS"],
    githubURL: "https://github.com/alvarobarrerotanarro/Cookie-Clicker"
  },
  {
    name: "React Auto Typing",
    description: "Una libreria para React que incluye un componente para animaciones de texto.",
    tags: ["TypeScript", "React"],
    githubURL: "https://github.com/alvarobarrerotanarro/Cookie-Clicker"
  },
  {
    name: "Juego Memorizacion Tarjetas",
    description: "Consiste en un juego donde hay que recordar la ubicacion exacta de las tarjetas emparejadas.",
    tags: ["JavaScript", "HTML", "CSS"],
    githubURL: "https://github.com/alvarobarrerotanarro/Cookie-Clicker"
  },
  {
    name: "Roman Numeral Parser",
    description: "Consiste en una pequeña libreria interfaz de programacion escrita en Java que pretende facilitar la conversion entre numeros Arabes a Romanos y viceversa.",
    tags: ["Java"],
    githubURL: "https://github.com/alvarobarrerotanarro/roman-numeral-parser"
  }
]


export default function Home() {
  return (
    <>
      <Header />

      <InvertedCard className="flex flex-wrap md:flex-nowrap">
        <div className="min-h-96 min-w-full md:min-w-[40%] flex items-center flex-grow pb-6 border-b border-[--background] md:pb-0 md:pr-6 md:border-r md:border-b-0">
          <div className="flex flex-col gap-8 py-8">
            <span>01 / SOBRE MI</span>
            <h2 id="sobre-mi" className="text-5xl">Origenes</h2>
            <p className="leading-10 text-xl text-[--background]">Mi nombre es Álvaro Barrero Tanarro, tengo 19 años y soy desarrollador. Me inicié en el desarrollo de forma autodidacta a los 14 años, creando páginas web y, con el tiempo, ampliando mi interés hacia lenguajes como Java y C++.</p>
          </div>
        </div>

        <div className="min-h-96 min-w-full md:min-w-[40%] flex items-center flex-grow">
          <div className="flex flex-col gap-8 p-4 pl-6 pb-10 sm:pb-4 text-[--background]">
            <h2>Objetivos</h2>
            <ul className="flex flex-col gap-6 text-xl">
              <li className="pl-8 border-b border-[--background] hover:translate-x-3 hover:bg-[--foreground-light] duration-200 cursor-pointer">Finalizar ciclo formativo de grado superior DAM.</li>
              <li className="pl-8 border-b border-[--background] hover:translate-x-3 hover:bg-[--foreground-light] duration-200 cursor-pointer">Estudiar un grado universitario.</li>
              <li className="pl-8 border-b border-[--background] hover:translate-x-3 hover:bg-[--foreground-light] duration-200 cursor-pointer">Aprender nuevas habilidades con proyectos personales.</li>
            </ul>
          </div>
        </div>
      </InvertedCard>

      <Card className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 p-4">
          <span className={`${spaceGrotesk.className}`} >02 / TRABAJO SELECCIONADO</span>
          <h2 id="proyectos" className="text-7xl">Proyectos</h2>
          <p className="text-[--foreground-light]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, animi.</p>
        </div>

        <div className="max-h-[768px] overflow-y-scroll overflow-x-hidden">
          {projectsData.map((project, i) => {
            return (
              <div key={i} className="mt-4 hover:translate-x-3 duration-100 hover:bg-[--background]">
                <Project name={project.name} description={project.description} tags={project.tags} githubURL={project.githubURL} index={i + 1} />
              </div>
            );
          })}
          <div className="mt-4 hover:translate-x-3 duration-100 hover:bg-[--background]">
            <Card className="p-4 flex flex-wrap justify-between items-center gap-4">
              <div className="flex-grow">
                <h2 id="tecnologias" className="text-wrap text-xl sm:text-2xl md:text-4xl">@alvarobarrerotanarro</h2>
              </div>
              <div className="flex justify-end flex-grow">
                <GitHubSvg className="text-[--foreground] w-16 h-16" />
              </div>
              <div className="flex justify-end flex-grow">
                <Link target="_blank" href={"https://github.com/alvarobarrerotanarro"} className="inline-flex w-16 h-16 items-center justify-center bg-transparent text-[--foreground] hover:text-[--background] hover:bg-[--foreground] border border-[--foreground] rounded-full bg-slate-200"><ArrowSvg className="text-inherit w-8 h-8 rotate-[130deg]" /></Link>
              </div>
            </Card>
          </div>
        </div>

      </Card>

      <Card>
        <br />
        <br />
        <br />
      </Card>

      <Card className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 p-4">
          <h2 className="text-5xl">Tecnologias</h2>
          <p className="text-[--foreground-light]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt asperiores beatae dolor ex, delectus inventore doloremque aliquam ipsum consectetur.</p>
        </div>
      </Card>
      <SliderCard minimalSliderWidth={700} height={30} fps={15}>
        {techImages.map(tech => {
          return <div className="min-h-full flex items-center select-none">
            <Image src={tech.image.src} alt={tech.alt} width={tech.width} height={tech.height} />
          </div>
        })}
      </SliderCard>

      <Card>
        <br />
        <br />
        <br />
      </Card>
    </>
  )
}