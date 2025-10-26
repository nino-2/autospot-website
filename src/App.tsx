import { Route, Routes } from "react-router-dom"
import Home from "./pages/HomePage"

import Catalogue from "./pages/Catalogue"
import Contact from "./pages/Contact"
import About from "./pages/About"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  )
}

export default App
