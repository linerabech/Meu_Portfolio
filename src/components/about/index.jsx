import { Painel } from "../painel"
import eu from '../../assets/eu.png'


export const About = () => {

    return <Painel id="sobre">
    <h2 className="flex text-base lg:text-2xl">Sobre Mim</h2>
    <p className="flex flex-row text-balance text-base lg:text-2xl lg:max-w-[50%]">
     Oii, sou formada em Nutrição mas, sempre fui apaixonada por design e tecnologia. Comecei minha transição de carrerira na pandemia quando vi que podia transformar vidas com o design UI/UX. Mesmo assim sentia que falta algo ainda para me deixar feliz e decidir seguir ir para programação. Como desenvolvedora front-end eu espero criar interfaces que sejam funcionais e que tenham a cara dos cliente,um lugar onde eles possam se expressarem.
    </p>
    <div className="flex flex-row justify-end"> 
    <img className="relative max-h-[70dvh] lg:max-w-[50%]"
      src= {eu} alt="minha foto com cabelo cacheado e óculos de grau"/>
    </div>
  </Painel>
}