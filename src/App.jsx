
import { useEffect, useRef, useState } from "react"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Loader from "./components/Loader"
import logo from "./assets/logo.png"
import Home from "./pages/Home"
import Works from "./pages/Works"



function App() {
  const loader = useRef(null)
  // const [showHero, setShowHero] = useState(false)
  const [load, setLoad] = useState(true)
  const [section, setSection] = useState("home")
  const [show, setShow] = useState(false)




  useEffect(() => {

    const divs = document.querySelectorAll("section")

    let prevPos = 0
    const handleScroll = () => {
      document.querySelectorAll(".hide").forEach((elm) => {
        const rect = elm.getBoundingClientRect();
        const offsetTop = rect.top + scrollY
        if ((offsetTop - ((innerHeight * 2) / 3)) < scrollY) {
          elm.classList.remove("hide")
        }
      })

      const newPos = scrollY
      if (newPos > prevPos && scrollY > 0) {
        setShow(false)
        document.querySelector("header").style.top = "-100px"
        prevPos = newPos
      } else if (window.scrollY <= 0 || newPos < prevPos) {
        setShow(false)
        document.querySelector("header").style.top = "0"
        prevPos = newPos
      }
      divs.forEach(div => {
        if (window.scrollY >= div.offsetTop && window.scrollY < (div.offsetTop + div.offsetHeight)) {
          setSection(div.id)
        }
      })
    }


    window.addEventListener("scroll", handleScroll)





    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])
  useEffect(() => {
    if (load)
      setTimeout(() => {
        setLoad(false)
      }, 2000);
  }, [load])

  return (
    <>
      <Loader load={load} loader={loader} logo={logo} />
      <Router>
        <Routes>
          <Route path="/" element={<Home section={section} show={show} setShow={setShow} load={load} setLoad={setLoad} />} />
          <Route path="/work" element={<Works load={load} setLoad={setLoad} />} />
        </Routes>
      </Router>
    </>
  )
}




export default App
