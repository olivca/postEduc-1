import React from 'react';
import {Switch, Route} from 'react-router-dom';

import PaginaDeEvento from './Componentes/eventos/PaginaDeEventos'
import EventoEspecifico from './Componentes/eventos/EventoEspecifico'
import CadastroEvento from './Componentes/eventos/criarEvento/CadastroEvento'
import CadastroUsuario from './Componentes/CadastroUsuario/CadastroUsuario'
import Login from './Componentes/Login/Login'

export class Rotas extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={PaginaDeEvento} />
    
                {/* Crie as Rotas Aqui */}
                <Route exact path="/EventoEspecifico" component={EventoEspecifico}/>
                <Route exact path="/CadastroEvento" component={CadastroEvento}/>
                <Route exact path="/CadastroUsuario" component={CadastroUsuario}/>
                <Route exact path="/Login" component={Login}/>
            
            </Switch>
        )    
    }
}

export default Rotas;