import './css/header.css';

import Carrito from './../img/categorias/carrito.svg';
import logo from './../img/logo.svg'
import { Link } from 'react-router-dom';
import { FcMenu } from 'react-icons/fc';
import React, { useEffect, useRef, useState } from 'react';

const Header = ({ logged }) => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const refHeader = useRef();
    const isFixed = () => {
        let header = refHeader.current;
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

    const handleMobileMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
     }

    useEffect(() => {
        window.addEventListener("scroll", isFixed);
    });

    return (
        <header className="header" ref={refHeader}>
            <div className="header-wrapper">
                <div className="menu-mobile" onClick={handleMobileMenu}>
                    <FcMenu />
                </div>
                <div className="menu-mobile-wrapper">{}
                    <div className={mobileMenu ? 'menu-mobile side-bar active' : 'menu-mobile side-bar'} id="menuMobile">
                        {
                            mobileMenu ?  <div className="overlay" onClick={()=>{setMobileMenu(false)}} /> :null
                        }
                      
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
                                        <Link to="/catalogo?category=mesas">Mesas </Link>
                                    </li>
                                    <li>
                                        <Link to="/catalogo?category=escritorios">Escritorios </Link>
                                    </li>
                                    <li>
                                        <Link to="/catalogo?category=sillas">Sillas </Link>
                                    </li>
                                    <li>
                                        <Link to="/catalogo?category=taburetes">Taburetes </Link>
                                    </li>
                                    <li>
                                        <Link to="/catalogo?category=toalleros">Toalleros </Link>
                                    </li>
                                    <li>
                                        <Link to="/catalogo?category=luminaria">Luminaria</Link>
                                    </li>
                                    {
                                        logged ? <li> <Link to="/admin"> Administrar sitio</Link></li> : null
                                    }
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
                                        <Link to="/catalogo?category=escritorios">Escritorios</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalogo?category=sillas">Sillas</Link>
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
                            {
                                logged ? <li> <Link to="/admin"> Administrar sitio</Link></li> : null
                            }
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