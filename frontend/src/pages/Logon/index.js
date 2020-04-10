// Link from react-router-dom serve para, finalmente, por em prática principal utilidade de uma SPA
// Com isso, a página não recarrega inteira e só muda a rota. 

import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return(
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt=""/>
                <form>
                    <h1>Faça logon</h1>
                    <input placeholder="Sua Id" />
                    <button type="submit">Entrar</button>

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
