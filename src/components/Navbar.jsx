import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand"to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item">
                                <NavLink className="nav-link"to="/About">About</NavLink>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle"to="/Menu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item"to="/Menu">Menu</NavLink></li>
                                    
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"to="/Contacto">Reservacion</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"to="/Reservaciones">Reservaciones</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar