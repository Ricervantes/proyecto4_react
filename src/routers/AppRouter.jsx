import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Homepage from '../pages/Homepage';
import About from '../components/About';
import Menu from '../components/Menu';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';


const AppRouter = () => {
    return (
        <> 
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Menu" element={<Menu/>}/>
                <Route path="/Contacto" element={<Contacto/>}/>
            </Routes>
        </Router>
        <Footer/>
        </>
       
    )
}

export default AppRouter