import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}

// BrowserRouter é necessário estar em volta de tudo
// Switch, garante que só uma rota será executada por momento
//Propriedade exact serve para driblar o problema do /