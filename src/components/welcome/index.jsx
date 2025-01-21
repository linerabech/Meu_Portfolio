import { Painel } from "../painel"
import { ReactTyped } from "react-typed";


export const Welcome = () => {
    return <Painel className="home" id="home">
    <div className="home-content flex flex-col gap-4">
    <h2 className="flex flex-col gap-2 text-base lg:text-2xl font-bold">  
      <span>Olá!</span>
      <span> Meu nome é </span>
      <span className="destaque text-base lg:text-2xl">Aline Rabech Oliveira</span>
    </h2>
 
    <h1 className="text-base lg:text-2xl">
      Sou uma{" "}
    <ReactTyped
    className="text-primary font-bold"
      strings={[
        "Desenvolvedora Front-End",
        "Desenvolvedora Web",
        "UX/UI Designer",
      ]}
      typeSpeed={40}
      backSpeed={50}

      loop
    />
     
    </h1>
    
     <p className="text-base lg:max-w-[50%]  lg:text-2xl">Eu sou uma desenvolvedora web front-end especialista em HTML, CSS, JavaScript e frameworks como React. Tenho paixão por transformar ideias em interfaces funcionais e incríveis!</p>
 
    <div className="curriculo pt-4">
      <a target="_blanck" referrerPolicy="noreferrer" className="primaryButton flex bg-primary text-black py-[0.8rem] px-12 rounded-full cursor-pointer items-center justify-center text-lg lg:text-2xl font-bold" download="Aline_Rabech_CV" href="https://drive.google.com/file/d/14JNkbPU2eL6L5RH5VewWs-xJ86DfgTMP/view?usp=drive_link">
      Baixar CV
      </a>
      
    </div>
    </div>
   </Painel>
}