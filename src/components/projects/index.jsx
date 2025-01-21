import project from '../../assets/18737145_6020155.jpg'
import { Painel } from '../painel'


export const Projects = () => {

    return  <Painel id="projetos">
    <h2 className="flex flex-col gap-4 text-base lg:text-2xl font-bold">Meus Projetos</h2>
    <div>
      <img className="flex justify-center min-h-[30dvh] max-w-[20rem] gap-x-12 gap-y-12 px-8" src={project} alt="mulher com computador com tela de carregamento"/>
    </div>
  </Painel>
}