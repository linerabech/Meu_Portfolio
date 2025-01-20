import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Welcome } from "../../components/welcome";
import { Projects } from "../../components/projects";
import { Tech } from "../../components/tech";
import { About } from "../../components/about";
import { AsideMenu } from "../../components/aside";

import { useState } from "react";

export const Home = () => {

    const [isVisible, setIsVisible] = useState(false)

    return <>
        <Header setIsVisible={setIsVisible} isVisible={isVisible}/>
    
        <main>
            <Welcome />
            <About />
            <Tech />
            <Projects />
        </main>
        <Footer />
    </>
}