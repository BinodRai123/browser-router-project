import { Route, Routes } from "react-router-dom"
import Home from "../Pages/home"
import About from "../Pages/about"
import Contact from "../Pages/contact"

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Mainroutes