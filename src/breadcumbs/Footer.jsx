// CSS

import FooterStyle from './css/footer.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Logo from './../img/logo.png'
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
    const [emailNotifaction, setEmailNotifaction] = useState(false);

    const form = useRef();
    const message= useRef();
    const username = useRef();
    const email = useRef();


    const handleNotification =()=>{
        setEmailNotifaction(true);
        setTimeout(() => {
            setEmailNotifaction(false);
        }, 3000);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ogq8ndd', 'template_5nqxx31', form.current, 'u9cW9vw43bAysSCD4')
            .then((response) => {
                if(response.status === 200) {
                    handleNotification();
                    form.current.reset();
                }
                else {
                    throw new Error("Hubo un error en enviar el mail");
                }
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <footer className="footer-wrapper">
            <div className="footer-content">
                <div className="form-wrapper">
                    <div className="logo-mail">
                        <AiOutlineMail /> 
                        <span> Contactate con nosotros por e-mail</span>
                    </div>
                  
                    <form id="contact-mail" ref={form} onSubmit={sendEmail}>
                        <input type="text" ref={username} placeholder="Nombre completo" name='user_name' className="input-value" required />
                        <input type="text" ref={email} placeholder="Mail" name='user_email' className="input-value" required />
                        <input type="text" ref={message} placeholder="Mensaje" name='message' className="input-value" required />
                        <input type="submit" id="btnEnviar" value='Enviar'/>
                    </form>
                    {
                         <span className={emailNotifaction ? 'message-sended' : 'message-sended hide' }>Gracias por tu mail ya nos contactaremos contigo!</span>
                    }
                  
                </div>

                <div className="footer-brands">
                    <div className="page-owner">
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <b>© Copyright 2023 / De Hierro y Madera</b>
                    </div>
                </div>

            </div>

        </footer>
    )
}


export default Footer;