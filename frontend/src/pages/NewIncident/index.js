import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';



export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastre um novo caso</h1>
                    <p>Descreva seu caso</p>

                    <Link className="back-link" to="/profile"> 
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o início
                    </Link>
                </section>
                <form>
                    <input placeholder="Título do caso"/>
                    <textarea placeholder="Descrição"></textarea>
                    <input placeholder="Valor em R$"/>
                    

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
