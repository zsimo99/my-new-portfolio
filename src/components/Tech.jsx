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
        <div className="bg-[#032324] py-8 relative">
            {/* Glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-4xl h-32 bg-[#309092] rounded-full filter blur-[100px] opacity-20" />
            </div>
            
            <div className="container mx-auto relative">
                <div className="bg-gradient-to-r from-[#0d3d3f] via-[#1a5f61] to-[#0d3d3f] py-6 md:py-8 xl:py-10 rounded-2xl overflow-hidden relative border border-[#30909230]">
                    {/* Fade edges */}
                    <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-[#0d3d3f] to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-[#0d3d3f] to-transparent z-10 pointer-events-none" />
                    
                    <div className="slider whitespace-nowrap flex items-center">
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701612/portfolio/html_ku5cos.png" alt="HTML" />
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701603/portfolio/css_p2dpxm.png" alt="CSS" />
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701611/portfolio/js_b68i7b.png" alt="JavaScript" />
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701617/portfolio/mongodb_xmcvjy.png" alt="MongoDB" />
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701657/portfolio/wordpress_gfsdgw.png" alt="WordPress" />
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701618/portfolio/nextjs_qzgif2.png" alt="Next.js" />
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701622/portfolio/react_duvt7i.png" alt="React" />
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701619/portfolio/node-js_j4ludm.png" alt="Node.js" />
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701612/portfolio/html_ku5cos.png" alt="HTML" />
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701603/portfolio/css_p2dpxm.png" alt="CSS" />
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701611/portfolio/js_b68i7b.png" alt="JavaScript" />
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701617/portfolio/mongodb_xmcvjy.png" alt="MongoDB" />
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701657/portfolio/wordpress_gfsdgw.png" alt="WordPress" />
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701618/portfolio/nextjs_qzgif2.png" alt="Next.js" />
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701622/portfolio/react_duvt7i.png" alt="React" />
                        <img className="image-tech" src="https://res.cloudinary.com/zscloud/image/upload/v1767701619/portfolio/node-js_j4ludm.png" alt="Node.js" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tech