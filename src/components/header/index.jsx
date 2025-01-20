
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { AsideMenu } from "../aside";

export const NavItem = ({link, title, onClick}) => {

  const onClickHandler = () => {
    if (onClick) {
      onClick()
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.5}
    }
  };
    return <motion.li onClick={onClickHandler} className="item hover:text-primary text-base lg:text-lg" variants={item}><a className="text-" href={link}>{title}</a></motion.li>
}

export const Header = ({setIsVisible, isVisible}) => {

  const handleClick = () => {
    setIsVisible((prev) => {
      if (!prev) {
        return true
      }
      return false
    })
  }

  const navLinks = [
    {link: '#home', title: 'Home'},
    {link: '#sobre', title: 'Sobre'},
    {link: '#tecnologias', title: 'Tecnologias'},
    {link: '#projetos', title: 'Projetos'},
  ]

    return (<header className='h-20 px-4 md:px-12 fixed top-0 left-0 bg-background-primary flex flex-col'>
      <div className="flex w-full  items-center justify-between h-full">
        <div className="navbar-container">
            <a href="#home" className="destaque text-base lg:text-lg text-transform: capitalize;">
            {'<'}AlineRabech ✨{'/>'}
            </a>
        </div>
    
      {/* <!----- MENU HAMBURGUER -----> */}
        <div className='block md:hidden'>
        <button onClick={handleClick} className='h-8 w-8 flex justify-center items-center '>
         {
          isVisible ? <IoClose className='text-2xl text-primary'/> : <IoMenu className='text-2xl text-primary'/>
         }
         
        </button>
        </div>
      
      {/* <!-----NAV-----> */}
        <nav className="navbar hidden md:flex">
          <ul className="flex gap-8 ">
            {
              navLinks.map((item) => {
                return <NavItem key={item.title} link={item.link} title={item.title} />
              })
            }
          </ul>
        </nav>
      </div>
       
      <div className="absolute top-full w-full">
            {
            isVisible && <AsideMenu isVisible={isVisible} setIsVisible={setIsVisible}/>
            }
      </div>
        
      </header>)
}

