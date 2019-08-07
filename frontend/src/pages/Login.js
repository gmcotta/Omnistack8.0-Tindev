import React from 'react';
import {useState} from 'react';

import api from '../services/api';

import logo from '../assets/logo.svg';
import './Login.css';

export default function Login({history}) {
    const [username, setUsername] = useState('');
    
    async function handleSubmit(evt) {
        evt.preventDefault();
        const response = await api.post('/devs',{
            username,
        });

        const {_id} = response.data;

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
            <img src={logo} alt="Tindev" />
            <input
                placeholder="Digite seu usuário no GitHub"
                value={username}
                onChange={evt => {
                    setUsername(evt.target.value);
                }}
            />
            <button type="submit">Enviar</button>
            </form>
            
        </div>
    );
}
