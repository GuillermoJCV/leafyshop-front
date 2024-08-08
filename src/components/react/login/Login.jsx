import { useRef, useEffect, useState } from "react";
import {
    FaGooglePlus,
    FaFacebook,
    FaTwitter,  
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";



export default function LoginComponent() {
    const containerRef = useRef(null);
    const formRef = useRef(null);
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        const form = formRef.current;
        if (form) {
            form.addEventListener("submit", submitHandler);
            return () => {
                form.removeEventListener("submit", submitHandler);
            };
        }
    }, []);

    const handleRegisterClick = (event) => {
        event.preventDefault();
        setIsSignUpActive(true);
        containerRef.current.classList.add("active");
        containerRef.current.classList.remove("show-sign-in");
    };

    const handleLoginClick = (event) => {
        event.preventDefault();
        setIsSignUpActive(false);
        containerRef.current.classList.remove("active");
        containerRef.current.classList.add("show-sign-in");
    };

    return (
        <main   className="log-container show-sign-in" 
                ref={containerRef}>
            <section className="form-container sign-in">
                <form ref={formRef}>
                    <h1>Iniciar Sesión</h1>
                    <div className="social-icons">
                        <a href="#" className="icon">
                            <FaGooglePlus />
                        </a>
                        <a href="#" className="icon">
                            <FaFacebook />
                        </a>
                        <a href="#" className="icon">
                            <FaTwitter />
                        </a>
                        <a href="#" className="icon">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="icon">
                            <FaGithub />
                        </a>
                    </div>
                    <span>Puede usar su correo electrónico</span>
                    <input type="email" placeholder="Ingresar el correo" required />
                    <input type="password" placeholder="Ingresar la contraseña" required />
                    <a className="a" href="#">
                        ¿Olvidaste tu contraseña?
                    </a>
                    <button className="login-btn" type="submit">
                        Iniciar Sesión
                    </button>
                    {!isSignUpActive && (
                        /* Siempre estará escondido hasta que el tamaño de la pantalla sea medio (mayor a 768)*/
                        <a className="a registrarse hidden md:block" href="#" onClick={handleRegisterClick}>
                            Registrarse
                        </a>
                    )}
                </form>
            </section>
            <section className={`form-container sign-up ${isSignUpActive ? "show" : ""}`}>
                <form>
                    <h1>Crear cuenta</h1>
                    <div className="social-icons">
                        <a href="#" className="icon">
                            <FaGooglePlus />
                        </a>
                        <a href="#" className="icon">
                            <FaFacebook />
                        </a>
                        <a href="#" className="icon">
                            <FaTwitter />
                        </a>
                        <a href="#" className="icon">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="icon">
                            <FaGithub />
                        </a>
                    </div>
                    <span>Puede usar su correo electrónico</span>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button className="login-btn" type="submit">Registrarse</button>
                    {isSignUpActive && (
                        /* Siempre estará escondido hasta que el tamaño de la pantalla sea medio (mayor a 768)*/
                        <a className="a iniciar-sesion hidden md:block" href="#" onClick={handleLoginClick}>
                            Iniciar sesión
                        </a>
                    )}
                </form>
            </section>
            <section className="toggle-container">
                <section className="toggle">
                    <article className="toggle-panel toggle-left">
                        <h1>Bienvenido de nuevo</h1>
                        <p>
                            Ingrese sus datos personales para utilizar todas las funciones del
                            sitio
                        </p>
                        <button className="login-btn toggle-btn" onClick={handleLoginClick}>
                            Iniciar Sesión
                        </button>
                    </article>
                    <article className="toggle-panel toggle-right">
                        <h1>Bienvenido</h1>
                        <p>
                            Registre sus datos personales para utilizar todas las funciones
                            del sitio
                        </p>
                        <button className="login-btn toggle-btn" onClick={handleRegisterClick}>
                            Registrarse
                        </button>
                    </article>
                </section>
            </section>
        </main>
    );
};