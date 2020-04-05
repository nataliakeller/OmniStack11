import React from 'react';


//Perceber as propriedades inseridas na função
//Propriedades vem como parâmetro da minha função
//props.title, pega o atributo title da função e injeta no texto
//props.children, injeta o que está dentro (children) da função
// function Header({ children }) <= Para obter só a propriedade children
export default function Header(props) {
    return (
        <header>
            <h1>{props.children}</h1>
        </header>
    );
}

// Também é possível exportar com o 'export default Header;'