import React, { useState, useEffect } from 'react';
import { ImClock } from 'react-icons/im';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './../../breadcumbs/css/dashboard.css'
const Dashboard = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
      
    }, []);
    const date = new Date().toDateString();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return (
        <div>
            <div className="dashboard-container">
                <div className="dashboard-box">
                    <h1>Bienvenido al administrador del sitio</h1>
                    <span>{date}</span>
                    <br />
                    <ImClock /> <span>{hour}:{minutes}:{seconds}</span>
                </div>
                <div className="dashboard-box">
                    <Link>
                        <AiOutlineUser />
                        Gestionar usuarios
                    </Link>
                    <p>
                        Gestiona los usuarios con permisos en el sitio.
                    </p>
                </div>
                <div className="dashboard-box">
                    <Link to="/admin/catalog" >
                        <AiOutlineShoppingCart />
                        Gestionar productos
                    </Link>
                    <p>
                        Crea, edita o elimina productos del catalogo.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
