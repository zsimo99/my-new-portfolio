import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import mongo from "../assets/mongodb.png"
import next from "../assets/nextjs.png"
import node from "../assets/node-js.png"
import react from "../assets/react.png"
import wordpress from "../assets/wordpress.png"
import { useEffect } from "react"



const Tech = () => {

    useEffect(() => {
        const slider = document.querySelector(".slider")
        const handleScroll = () => {
            const rect = slider.getBoundingClientRect();
            const offsetTop = rect.top + scrollY
            const offsetHeight = rect.height
            const offsetWidth = slider.offsetWidth
            const children = slider.children
            const computedStyles = window.getComputedStyle(children[0]);
            const marginLeft = parseInt(computedStyles.marginLeft, 10);
            let totalWidth = 0
            for (let i = 0; i < children.length; i++) {
                totalWidth += children[i].offsetWidth + (marginLeft * 2);
            }
            const theWidth = totalWidth - offsetWidth
            if (window.scrollY >= (offsetTop + offsetHeight - window.innerHeight) && offsetTop >= window.scrollY) {
                const scroll = scrollY + innerHeight - (offsetTop + offsetHeight)
                const perc = (scroll * 100) / innerHeight
                const pex = (perc * theWidth) / 100
                slider.style.transform = `translateX(-${pex}px)`
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <div className=" bg-[#032324]   tech-shadow ">
            <div className="container mx-auto bg-[#276f70] py-2 md:py-4 xl:py-6 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#032324] to-transparent z-10" />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#032324] to-transparent z-10" />
                <div className='slider whitespace-nowrap '>
                    <img className="image-tech" src={html} alt="" />
                    <img className="image-tech" src={css} alt="" />
                    <img className="image-tech" src={js} alt="" />
                    <img className="image-tech" src={mongo} alt="" />
                    <img className="image-tech" src={wordpress} alt="" />
                    <img className="image-tech" src={next} alt="" />
                    <img className="image-tech" src={react} alt="" />
                    <img className="image-tech" src={node} alt="" />
                    <img className="image-tech" src={html} alt="" />
                    <img className="image-tech" src={css} alt="" />
                    <img className="image-tech" src={js} alt="" />
                    <img className="image-tech" src={mongo} alt="" />
                    <img className="image-tech" src={wordpress} alt="" />
                    <img className="image-tech" src={next} alt="" />
                    <img className="image-tech" src={react} alt="" />
                    <img className="image-tech" src={node} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Tech