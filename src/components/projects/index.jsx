import project from '../../assets/18737145_6020155.jpg'
import { Painel } from '../painel'


export const Projects = () => {

    return  <Painel id="projetos">
    <h2>Meus Projetos</h2>
    <div>
      <img className="projects" src={project} alt="mulher com computador com tela de carregamento"/>
    </div>
  </Painel>
}