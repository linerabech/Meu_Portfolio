import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export const Footer = () => {

    return <footer>
    <div className="flex justify-center gap-4 py-4">
      <a href="https://github.com/linerabech" target="blank">
        <IoLogoGithub className="flex h-8 w-8 items-center justify-center rounded-full" />
      </a>
      <a href="https://www.linkedin.com/in/alinerabech/" target="blank">
       <IoLogoLinkedin className="flex h-8 w-8 items-center justify-center rounded-full" />
      </a>
    </div>
    <p className="text-center text-sm lg:text-base">
     &copy; Desenvolvido com 🩷 por Aline Rabech
    </p>
  </footer>
}