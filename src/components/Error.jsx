import React from 'react';

import errorStyle from '../breadcumbs/css/error.css';
import { BsFillEmojiDizzyFill, BsFillHouseDoorFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const error = () => {
    return (
        <div className="error-component">
            <div className="error-info">
                <div className="ico">
                <BsFillEmojiDizzyFill/>
                </div>
                <h2>Pagina no encontrada error (404) </h2>
                <Link  className="go-back" to="/"> Vuelve a la pagina de inicio <BsFillHouseDoorFill/> </Link> 
            </div>

        </div>
    );

}


export default error;