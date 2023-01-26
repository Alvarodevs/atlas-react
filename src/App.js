import "./App.css";
//PAGES
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

//COMPONENTS
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
         <NavBar />
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/about_us" element={<AboutUs/>}/>
            <Route path="/contact" element={<Contact/>}/>
         </Routes>
         <Footer/>
      </BrowserRouter>
      
   );
}

export default App;
