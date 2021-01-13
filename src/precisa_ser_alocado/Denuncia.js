import React from 'react'

import './index.css'
import {Link} from 'react-router-dom' 



export default class Denuncia extends React.Component{
  
  render(){
    return(
      <div className='cartao'>
        <p>Denuncia n°{this.props.id}</p>
        <p>data denuncia: {this.props.data}</p>
        
        <p>Id denunciante: {this.props.id_pessoa}</p>
        
        <p>Id evento denunciado: {this.props.id_evento}</p>
        
        <p>Nome denunciante: {this.props.nome_pessoa} <Link to={{pathname:`${this.props.id_pessoa}`}}>(clique para informaçoes do usuario)</Link></p>
        
        <p>Nome evento denunciado: {this.props.nome_evento} <Link to={{pathname:`${this.props.id_evento}`}}>(clique para verificar o evento)</Link></p>
        
        <p>Tipo de denuncia: {this.props.tipo_denuncia}</p>
        
        <p>Denuncia: {this.props.denuncia}</p>
      </div>
    )
  }

}

