import React from 'react';
import {Switch, Route} from 'react-router-dom';

import PaginaDeEvento from './Componentes/eventos/PaginaDeEventos'
import EventoEspecifico from './Componentes/eventos/EventoEspecifico'
import Categorias from './Componentes/eventos/categorias'

export class Rotas extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={PaginaDeEvento} />
    
                {/* Crie as Rotas Aqui */}
                <Route exact path="/EventoEspecifico" component={EventoEspecifico}/>
                <Route exact path="/categorias" component={Categorias}/>
            
            </Switch>
        )    
    }
}

export default Rotas;