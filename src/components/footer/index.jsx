import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export const Footer = () => {

    return <footer>
    <nav className="flex justify-center gap-4 py-4">
      <IoLogoGithub className="flex h-8 w-8 items-center justify-center rounded-full" href="https://github.com/linerabech" target="blank" />
      <IoLogoLinkedin className="flex h-8 w-8 items-center justify-center rounded-full" href="https://www.linkedin.com/in/aline-rabech-1b1b5b1b1/" target="blank" />
    </nav>
    <p className="text-center text-sm lg:text-base">
     &copy; Desenvolvido com 🩷 por Aline Rabech
    </p>
  </footer>
}