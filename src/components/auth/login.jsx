import { useRef } from 'react';
import './../../breadcumbs/css/login.css';
const Login = () => {
    const passwordRef = useRef();
    const emailRef = useRef();

    const LogUser = async (e) => {
        e.preventDefault();
        const userData = new URLSearchParams();
        userData.append("password", passwordRef.current.value);
        userData.append("email", emailRef.current.value);

        try {
            const response = await fetch("https://dehierroymaderabackend-production.up.railway.app/auth/user/login", {
                method: "POST",
                body: userData,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });

            if (response.ok) {
                alert("User logged");
                const data = await response.json();
                let id = data.name;
                sessionStorage.setItem("auth_id", id);
                window.location.href = "/";
            } else {
                alert("No se han ingresado las credenciales correctamente o no existe el usuario");
                throw new Error("No se pudo loguear el usuario");
            }


        }
        catch (error) {
            throw new Error(error.message);

        }
    }



    return (
        <div className="login-container">
            <form onSubmit={LogUser}>
                <label>Login</label>
                
                <input type="email" placeholder="Email" name="Email" required ref={emailRef} />
                <input type="password" placeholder="password" name="password" required ref={passwordRef} />
                <input type="submit" className="btnEnviar" />
            </form>
        </div>
    )
}


export default Login;