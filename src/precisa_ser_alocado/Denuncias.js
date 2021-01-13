import React from 'react'
import {Link} from 'react-router-dom' 

import Denuncia from './Denuncia'


export default class Denuncias extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      denuncias: [],
    }
  }

  componentDidMount(){
    fetch("http://localhost/testes/infodenuncia.php")
    .then( resposta => resposta.json() )
    .then( resposta => this.setState({ 'denuncias': resposta }) )
  }

  render(){
    return(
      <div>
        <Link to="/"> Principal </Link>
        <div className="flex">
          
          {this.state.denuncias && this.state.denuncias.map(denuncia => (
              <Denuncia 
                key = {denuncia.id_denuncia}
                data = {denuncia.data_denuncia}
                id = {denuncia.id_denuncia}
                id_pessoa = {denuncia.id_usuario}
                id_evento = {denuncia.id_evento}
                nome_pessoa = {denuncia.nome}
                nome_evento = {denuncia.nome_evento}
                denuncia = {denuncia.denuncia}
                tipo_denuncia = {denuncia.tipo_denuncia}
              />        
          ))}
        </div>
      </div>
    )
  }
}