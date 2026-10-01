import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import {Route, Routes} from 'react-router-dom'
import Product from "./pages/Product"
import NotFound from "./pages/NotFound"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Kids from "./pages/Kids"
import Contact from "./pages/Contact"
import ContactDetails from "./pages/ContactDetails"
import Navbar2 from "./components/Navbar2"

const App =()=>{
  return(
    <div className="h-screen bg-black text-white">
      <Navbar/>
      <Navbar2/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

        //Dynamic Routing
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/contact/:id" element={<ContactDetails/>}/>


        <Route path="/product" element={<Product/>}>
          //Nested Routing
          <Route path="men" element={<Men/>} />
          <Route path="women" element={<Women/>} />
          <Route path="kids" element={<Kids/>} />
        </Route>
        

        //404 Not Found
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}
export default App