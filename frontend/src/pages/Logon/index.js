// Link from react-router-dom serve para, finalmente, por em prática principal utilidade de uma SPA
// Com isso, a página não recarrega inteira e só muda a rota. 

import React, { useState } from 'react';
import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/sessions', { id });
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt=""/>
                <form onSubmit={handleLogin}>
                    <h1>Faça logon</h1>
                    <input placeholder="Sua Id" value={id} onChange={e => setId(e.target.value)} />
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register"> 
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt=""/>
           
        </div>
    );
}
