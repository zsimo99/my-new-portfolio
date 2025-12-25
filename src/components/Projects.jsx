import Project from "./Project"
import { projects } from "../constants"
import { useNavigate } from "react-router-dom"
import { P } from "react-html5video"


// eslint-disable-next-line react/prop-types
const Projects = ({ service, showAll, setLoad }) => {
    const navigate = useNavigate()

    const goToWorks = () => {
        setLoad(true)
        navigate(`/work?srv=${service}`)
    }
    return (
        <div className="container mx-auto px-6 projects flex flex-col gap-16 mt-16">
            {!showAll ? (projects.filter(project => project.category === service).length>0?projects.filter(project => project.category === service).slice(0, 3).map((project, id) => <Project key={id} nm={id} project={project} />):<p className="text-center text-gray-400 text-lg md:text-xl"> no projects available in this category. </p>)
                :  (projects.filter(project => project.category === service).map((project, id) => <Project key={id} nm={id} project={project} />))

            }
            {!showAll && projects.filter(project => project.category === service).length > 3 && <>
                <button onClick={goToWorks} className="btn-glow hide duration-700 transition-all px-10 py-3 md:px-14 md:py-4 mx-auto rounded-lg text-lg md:text-xl font-bold text-white bg-gradient-to-r from-[#309092] to-[#40dcdf] shadow-lg shadow-[#30909040]">
                    View All Projects
                </button>
            </>}
        </div>
    )
}

export default Projects