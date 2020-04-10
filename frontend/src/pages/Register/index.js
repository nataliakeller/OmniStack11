import React, { useState } from 'react';
import api from '../../services/api';


import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
// Link from react-router-dom serve para, finalmente, por em prática principal utilidade de uma SPA
// Com isso, a página não recarrega inteira e só muda a rota. 
// FiLogIn é o ícone. Feather é o pacote utilizado. 


//e = recebendo o evento de submit do formulario
//e.preventDefault = prevenindo o comportamento padrão do formulário
export default function Register() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ city, setCity ] = useState('');
    const [ uf, setUf ] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();


        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try { 
            const response = await api.post('ongs', data);
            
            alert(`Seu ID de acesso: ${response.data.id}`);
            
            history.push('/');
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

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
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                    <div className="input-group">
                        <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
                        <input placeholder="UF" style={{ width: 80 }} value={uf} onChange={e => setUf(e.target.value)}/>

                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

// Propriedade style do react te permite a adicionar propriedades do css, por meio de um objeto em js