import { Painel } from "../painel"
import eu from '../../assets/eu.png'


export const About = () => {

    return <Painel id="sobre">
    <div className="flex w-full h-full">
      <div className="flex h-full flex-1 ">
       <h2 className="flex-column">Sobre Mim</h2>
       <p>
       Oii, sou formada em Nutrição mas, sempre fui apaixonada por design e tecnologia. Comecei minha transição de carrerira na pandemia quando vi que podia transformar vidas com o design UI/UX. Mesmo assim sentia que falta algo ainda para me deixar feliz e decidir seguir ir para programação. Como desenvolvedora front-end eu espero criar interfaces que sejam funcionais e que tenham a cara dos cliente,um lugar onde eles possam se expressarem.
       </p>
      </div>
      <div className="flex h-full flex-1"> 
      <img className="justify-center align-center"src= {eu} alt="minha foto com cabelo cacheado e óculos de grau"/>
      </div>
    </div>
  </Painel>
}