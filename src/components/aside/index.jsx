import { motion } from "motion/react"
import { NavItem } from "../header"


export const AsideMenu = ({isVisible, setIsVisible}) => {


const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
       staggerChildren: 0.2
      }
    }
  };
  
  

    const navLinks = [
        {link: '#home', title: 'Home'},
        {link: '#sobre', title: 'Sobre'},
        {link: '#tecnologias', title: 'Tecnologias'},
        {link: '#projetos', title: 'Projetos'},
      ]

    return <motion.aside initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
        
        <nav >
            <motion.ul 
            className="flex flex-col  items-center justify-center bg-background-primary gap-2 pb-4"
            variants={container}
            initial="hidden"
            animate="visible"
            >
            {
            isVisible && 
                navLinks.map((item) => {
                   return <NavItem key={item.title} link={item.link} title={item.title} onClick={() => setIsVisible(false)} />
                   })
                
        }
            </motion.ul>
        
        </nav>
    </motion.aside>
}