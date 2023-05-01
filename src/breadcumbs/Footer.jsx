// CSS

import FooterStyle from './css/footer.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Logo from './../img/logo.png'
import { AiOutlineMail } from 'react-icons/ai';
const Footer = () => {

    const form = useRef();

    const emailNotifaction =()=>{
        let form = document.getElementById('contact-mail');
        let input = document.querySelectorAll('#contact-mail .input-value');
      
        let span = document.createElement('span');
        span.classList.add('message-sended');
        span.textContent = `Tu mensaje ha sido enviado con exito`;

        form.append(span);
       
    
        setTimeout(()=>{
            span.classList.add('hide');
        },2000)
        setTimeout(()=>{
            span.remove();
            input.forEach( input =>{
                input.value= "";
            });
            
        },3000)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ogq8ndd', 'template_5nqxx31', form.current, 'u9cW9vw43bAysSCD4')
            .then((result) => {
                emailNotifaction();
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="footer-wrapper">

            <div className="footer-content">
                <div className="form-wrapper">
                    <div className="logo-mail">
                        <AiOutlineMail /> 
                        <span> Contactate con nosotros por e-mail</span>
                    </div>
                  
                    <form id="contact-mail" ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Nombre completo" name='user_name' className="input-value" required />
                        <input type="text" placeholder="Mail" name='user_email' className="input-value" required />
                        <input type="text" placeholder="mensaje" name='message' className="input-value" required />
                        <input type="submit" id="btnEnviar" value='Enviar'/>

                    </form>
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

        </div>
    )
}


export default Footer;