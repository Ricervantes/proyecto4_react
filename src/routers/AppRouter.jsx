import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Homepage from '../pages/Homepage';
import About from '../components/About';
import Menu from '../components/Menu';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import Reservaciones from '../components/Reservaciones';


const AppRouter = () => {
    return (
        <> 
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Reservaciones" element={<Reservaciones/>} />
                <Route path="/Menu" element={<Menu/>}/>
                <Route path="/Contacto" element={<Contacto />}>
                    <Route path=":id" element={<Contacto />} />
                </Route>
            </Routes>
        </Router>
        <Footer/>
        </>
       
    )
}

export default AppRouter