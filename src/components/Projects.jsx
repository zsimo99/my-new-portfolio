import Project from "./Project"
import { projects } from "../constants"
import { useNavigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const Projects = ({ service, showAll, setLoad }) => {
    const navigate = useNavigate()

    const goToWorks = () => {
        setLoad(true)
        navigate(`/work?srv=${service}`)
    }
    return (
        <div className="container mx-auto px-4 projects flex flex-col gap-10 mt-14" >
            {!showAll ? projects.filter(project => project.category === service).slice(0, 3).map((project, id) => <Project key={id} nm={id} project={project} />)
                : projects.filter(project => project.category === service).map((project, id) => <Project key={id} nm={id} project={project} />)
            }
            {!showAll && projects.filter(project => project.category === service).length > 3 && <>
                <button onClick={goToWorks} to={`/work?srv=${service}`} className="hide duration-700 transition-[opacity,transform] px-10 py-2 md:px-14 md:py-4 xl:px-16 xl:py-5 bg-slate-500 mt-4 block mx-auto rounded-md text-2xl font-bold text-white bg-gradient-to-r to-[#309092] from-[#6CC6C8] relative z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md  opacity-0 hover:opacity-100 transition-opacity duration-200 w-full h-full bg-[#ffffff30] z-10" />
                    View All</button>
            </>}
        </div>
    )
}

export default Projects