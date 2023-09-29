import emailjs from 'emailjs-com';
import {useRef, useState} from 'react';
import { GrFormClose } from 'react-icons/gr';

const MailPopUp = ({handlePopUp,mailPopUp,product}) => {
   
    const name = useRef();
    const mail = useRef();
    const message = useRef();
    const phoneNumber = useRef();
    

    const useMailPopUp = (e) => {
        e.preventDefault();
        const { _id, nombre } = product;

        const templateParams = {
            user_name: name.current.value,
            user_email: mail.current.value,
            user_message: message.current.value,
            user_phone: phoneNumber.current.value,
            product_title: nombre,
            product_id: _id,
            product_href: window.location.href
        };

        try {
            emailjs.send('service_ogq8ndd', 'template_5nqxx31', templateParams, 'u9cW9vw43bAysSCD4')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Mensaje enviado correctamente, ya nos pondremos en contacto contigo');
                    handlePopUp();
                })
                .catch(function (error) {
                    console.log('FAILED...', error);
                });
        } catch (error) {
            console.log('Error en el bloque try:', error);
        }
    };


    return (
        <>
            <div className={`pp-overlay ${mailPopUp ? 'fade-in' : 'fade-out'}`} onClick={handlePopUp} />
            <div className="pp-container">
                <div className={`pp-content ${mailPopUp ? 'fade-in' : 'fade-out'}`}>
                    <div className="pp-close" onClick={handlePopUp}>
                        <GrFormClose />
                    </div>
                    <h2>Contactanos por correo</h2>
                    <form id="contact-mail" onSubmit={useMailPopUp}>
                        <input type="text" placeholder="Nombre completo" name="user_name" ref={name} required />
                        <input type="text" placeholder="Mail" name="user_email" ref={mail} required />
                        <input type="number" placeholder="Número" name="user_phone" ref={phoneNumber} required />
                        <textarea rows="8" placeholder="Mensaje" name="user_message" ref={message} required />
                        <input type="submit" id="btnEnviar" value="Enviar" />
                    </form>
                </div>
            </div>
        </>
    )
};

export default MailPopUp;