import Picture from "./assets/pic.jpg";
import StockDo from "./assets/projects_images/stockdo.png";
import Adoptify from "./assets/projects_images/adoptify.jpg";
import Bertioga from "./assets/projects_images/bertioga.jpg";
import Calculadora from "./assets/projects_images/calculadora.jpg";
import Carlist from "./assets/projects_images/carlist.jpg";
import Danganfellas from "./assets/projects_images/danganfellas.jpg";
import GuessYourTrack from "./assets/projects_images/guessyourtrack.jpg";
import NextDictionary from "./assets/projects_images/nextdictionary.jpg";
import PizzaPlanet from "./assets/projects_images/pizzaplanet.jpg";
import SolarSystem from "./assets/projects_images/solarsystem.jpg";
import Cursos from "./assets/projects_images/cursos.jpg";
import IMC from "./assets/projects_images/IMC.jpg";
import Portfolio from "./assets/projects_images/portfolio.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaWhatsapp,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  const projects = [
    {
      image: StockDo,
      rep: "https://github.com/StockDo/stockdo",
      demo: "https://stockdo.vercel.app",
    },
    {
      image: Adoptify,
      rep: "https://github.com/RenanL15/adoptify",
      demo: "https://adoptify-renanl15.vercel.app",
    },
    {
      image: Bertioga,
      rep: "https://github.com/RenanL15/site-bertioga",
      demo: "https://bertioga.vercel.app",
    },
    {
      image: Carlist,
      rep: "https://github.com/RenanL15/car-list",
      demo: "https://car-list-react.vercel.app",
    },
    {
      image: PizzaPlanet,
      rep: "https://github.com/RenanL15/pizza-planet",
      demo: "https://pizza-planet.vercel.app",
    },
    {
      image: Danganfellas,
      rep: "https://github.com/RenanL15/danganfellas",
      demo: "https://danganfellas.vercel.app",
    },
    {
      image: GuessYourTrack,
      rep: "https://github.com/RenanL15/guess-your-track",
      demo: "https://guessyourtrack.vercel.app",
    },
    {
      image: Calculadora,
      rep: "https://github.com/RenanL15/calculadora-react",
      demo: "https://calculadora-react-tan.vercel.app/",
    },
    {
      image: SolarSystem,
      rep: "https://github.com/RenanL15/solar-system",
      demo: "https://solar-system-renanl15.vercel.app",
    },
    {
      image: NextDictionary,
      rep: "https://github.com/RenanL15/NextDictionary",
      demo: "https://next-dictionary-project.vercel.app",
    },
    {
      image: Portfolio,
      rep: "https://github.com/RenanL15/solar-system",
      demo: "https://renan-almeida.vercel.app",
    },
    {
      image: IMC,
      rep: "https://github.com/RenanL15/calculo-imc",
    },
    {
      image: Cursos,
      rep: "https://github.com/RenanL15/cadastro-cursos",
    },
  ];
  return (
    <main className={`${dark ? "dark" : "light"}`}>
      <div className="fixed flex flex-col gap-4 m-3 text-2xl">
        <a href="https://github.com/RenanL15" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/renan-almeida-lopes"
          target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/13981046971" target="_blank">
          <FaWhatsapp />
        </a>
      </div>
      <button
        onClick={() => {
          setDark(!dark);
        }}
        className="fixed right-0 m-4">
        {dark ? <FaSun size={30} /> : <FaMoon size={30} />}
      </button>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4 mx-4 text-center">
          <h1 className="text-4xl font-title max-sm:text-3xl">Renan Almeida</h1>
          <h2 className="text-2xl font-subtitle max-sm:text-2xl">
            Desenvolvedor Full-stack
          </h2>
          <img
            src="https://skillicons.dev/icons?i=js,typescript,html,css,react,tailwind,nodejs,git,php,mysql"
            alt="My skills [JS, HTML, CSS, React, Tailwind, NodeJS, Angular, Bootstrap, PHP, Figma, MySQL]"
            width={450}
          />
        </div>
      </div>
      <h1 className="mb-12 text-3xl text-center underline font-title underline-offset-[1rem]">
        Sobre mim
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10 m-auto">
        <img
          src={Picture}
          alt="My picture"
          width={300}
          className="rounded-2xl"
        />
        <p className="font-main leading-[3rem] text-lg w-[50%] text-justify max-xl:w-[80%] max-xl:text-base max-xl:text-center max-xl:leading-9">
          Olá, meu nome é Renan Almeida, e atualmente sou formado em
          Desenvolvimento de Sistemas na ETEC Dra. Ruth Cardoso. Ao longo dos
          últimos 3 anos, tenho imergido no universo do desenvolvimento de
          websites, aplicando e aprimorando constantemente meus conhecimentos
          através de desenvolvimento de diversos projetos. Além disso,
          destaco-me por minha dedicação integral às tarefas que me são
          confiadas, mantendo compromisso com os prazos estabelecidos. Minha
          fidelidade à entrega de resultados é notória, e faço questão de
          garantir que cada projeto seja concluído de acordo com as
          especificações e expectativas da empresa.
        </p>
      </div>
      <div className="flex flex-col items-center mt-64">
        <h1 className="text-3xl font-title underline underline-offset-[1rem] text-center max-sm:text-2xl">
          Meus Projetos
        </h1>
        <div className="flex flex-wrap justify-center gap-24 mx-8 my-24">
          {projects.map((e, i) => (
            <div className="flex flex-col items-center">
              <div className="bg-black rounded-lg shadow-xl overflow-clip group">
                <div key={i} className="max-w-[25rem] overflow-clip">
                  <img
                    src={e.image}
                    className="duration-300 opacity-90 group-hover:scale-110"
                  />
                </div>
                <button
                  onClick={() => {
                    window.open(e.rep);
                  }}
                  className="flex items-center justify-center w-full gap-2 py-3 text-xl font-bold text-white bg-black font-main hover:bg-neutral-8 hover:bg-neutral-800 rep-btn">
                  Ver repositório
                  <span className="inline-block">
                    <FaGithub />
                    {/* <FaArrowUpRightFromSquare /> */}
                  </span>
                </button>
              </div>
              {e.demo && (
                <a
                  href={e.demo}
                  target="_blank"
                  className="mt-3 text-xl font-semibold text-slate-600 hover:underline">
                  Abrir website
                  <FaArrowUpRightFromSquare
                    size={19}
                    className="inline-block ml-2 text-center"
                  />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
