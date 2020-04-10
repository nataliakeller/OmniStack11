import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
// Link from react-router-dom serve para, finalmente, por em prática principal utilidade de uma SPA
// Com isso, a página não recarrega inteira e só muda a rota. 
// FiLogIn é o ícone. Feather é o pacote utilizado. 



export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Faça seu cadastro</h1>
                    <p>Faça seu cadastro e ajude as pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/"> 
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o Logon
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome da ONG"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="Whatsapp"/>
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80 }}/>

                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

// Propriedade style do react te permite a adicionar propriedades do css, por meio de um objeto em js