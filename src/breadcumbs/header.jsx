import './css/header.css';

import Carrito from './../img/categorias/carrito.svg';
import logo from './../img/logo.svg'
import { Link } from 'react-router-dom';
import { FcMenu } from 'react-icons/fc';
import React, { useEffect } from 'react';
import { ToggleClass } from './../js/ToggleClass';

const Header = () => {
    useEffect(() => {
        window.addEventListener("scroll", isFixed);
    });

    const isFixed = () => {
        let header = document.querySelector('.header');
        const scrollTop = window.scrollY;

        if (scrollTop >= 100) {
            header.classList.add('fixed')
        }
        else {
            if (header.classList.contains('fixed')) {
                header.classList.remove('fixed');
            }
        }
    }

    return (
        <header className="header">

            <div className="header-wrapper">
                <div className="menu-mobile" onClick={ToggleClass}>
                    <FcMenu />

                </div>
                <div className="menu-mobile-wrapper">
                    <div className="menu-mobile side-bar" id="menuMobile">
                        <div className="mobile-wrapper">
                            <div className='mobile-links'>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalogo">Catalogo </Link>
                                    </li>
                                    <li>
                                        <Link to="/catalogo?category=muebles">Muebles </Link>
                                    </li>
                                    <li>
                                        <Link to="/catalogo?category=lamparas">Luminaria</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/" className="logo">
                    <img src={logo} alt="" />
                </Link>
                <div className="content">

                    <div className="links">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/catalogo">Catalogo</Link>
                            </li>
                            <li id="drop-down" className="dropdown-catalogo">
                                <Link to="/catalogo">Muebles</Link>
                                <ul>
                                    <li>
                                        <Link to="/catalogo?category=mesas">Mesas</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalogo?category=sillas">Sillas</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalogo?category=escritorios">Escritorios</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalogo?category=taburetes">Taburetes</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalogo?category=toalleros">Toalleros</Link>
                                    </li>
                                </ul>
                            </li>
                            <li id="drop-down" className="dropdown-catalogo">
                                <Link to="/catalogo">Luminaria</Link>
                                <ul>    
                                    <li>
                                        <Link to="/catalogo?category=lamparas">Lamparas</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="carrito">
                    <img src={Carrito} alt="" />
                </div>
            </div>

        </header>
    )
}


export default Header;