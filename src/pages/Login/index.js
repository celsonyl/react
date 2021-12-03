import React, { useState } from "react";
import { useHistory } from "react-router";
import logo from '../../assets/logo.svg';
import padlock from '../../assets/padlock.png';

import api from "../../services/api";
import './styles.css';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function login(e) {
        e.preventDefault();

        const data = {
            username,
            password,

        };

        try {
            const response = await api.post('auth/signing', data);
            localStorage.setItem('username', username);
            localStorage.setItem('acessToken', response.data.token);

            history.push('/books');
        } catch (err) {
            alert('Login failed! Try again!');
        }
    };

    return (
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Celso" />
                <form onSubmit={login}>
                    <h1>Acess your Account</h1>
                    <input
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Login</button>
                </form>
            </section>

            <img src={padlock} alt="Login" />
        </div>
    );
}