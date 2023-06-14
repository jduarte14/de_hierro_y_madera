import { useRef } from 'react';
import './../../breadcumbs/css/login.css';
const Login = () => {
    const nameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();

    const createUser = async (e) => {
        e.preventDefault();
        const userData = new URLSearchParams();
        userData.append("name", nameRef.current.value);
        userData.append("password", passwordRef.current.value);
        userData.append("email", emailRef.current.value);

        try {
            const response = await fetch("https://dehierroymaderabackend-production.up.railway.app/auth/user", {
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
            }
            throw new Error("No se pudo crear el usuario");

        }
        catch (error) {
            throw new Error(error.message);
        }
    }



    return (
        <div className="login-container">
            <form onSubmit={createUser}>
                <label>Login</label>
                <input type="text" placeholder="Name" name="name" required ref={nameRef} />
                <input type="email" placeholder="Email" name="Email" required ref={emailRef} />
                <input type="password" placeholder="password" name="password" required ref={passwordRef} />
                <input type="submit" className="btnEnviar" />
            </form>
        </div>
    )
}


export default Login;