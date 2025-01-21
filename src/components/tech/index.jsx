import { Painel } from "../painel"

export const Tech = () => {

    return  <Painel id="tecnologias">
    <h2 className="flex text-base lg:text-2xl font-bold gap-4">Minhas Tecnologias</h2>
    <div className="flex">
      <img className="flex justify-center min-h-[30dvh] max-w-[20rem] gap-x-12 gap-y-12 px-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="logo HTML5" />
      <img className="flex justify-center min-h-[30dvh] max-w-[20rem] gap-x-12 gap-y-12 px-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="logo CSS3" />
      <img className="flex justify-center min-h-[30dvh] max-w-[20rem] gap-x-12 gap-y-12 px-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="logo JavaScript"/>
      <img className="flex justify-center min-h-[30dvh] max-w-[20rem] gap-x-12 gap-y-12 px-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="logo React"/>
    </div>
    
  </Painel>
}