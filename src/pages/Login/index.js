import React from "react";
import logo from '../../assets/logo.svg';
import padlock from '../../assets/padlock.png';
import './styles.css';

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Celso" />
                <form>
                    <h1>Acess your Account</h1>
                    <input placeholder="Username" />
                    <input type="password" placeholder="Password" />

                    <button className="button" type="submit">Login</button>
                </form>
            </section>

            <img src={padlock} alt="Login" />
        </div>
    );
}