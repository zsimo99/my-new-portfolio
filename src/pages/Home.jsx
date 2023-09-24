import AboutUs from "../components/AboutUs"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Tech from "../components/Tech"
import Work from "../components/Work"
import Services from "../components/Services"
import Contact from "../components/Contact"
import { useEffect } from "react"



// eslint-disable-next-line react/prop-types
function Home({ load, section, show, setShow, setLoad }) {
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 2000);
    }, [setLoad])

    return (
        <div className="overflow-hidden">
            <Header activeSection={section} show={show} setShow={setShow} />
            <Hero load={load} />
            <AboutUs />
            <Tech />
            <Services />
            <Work setLoad={setLoad} />
            <Contact />

        </div>
    )
}




export default Home
