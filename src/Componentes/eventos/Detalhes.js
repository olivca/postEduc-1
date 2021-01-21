import React from 'react'

export default class Detalhes extends React.Component{

render(){
    return(
        <div>                
        <h2>{this.props.nome}</h2>
        <p className="pt-5">Local: {this.props.logradouro},{this.props.numero},{this.props.bairro}</p>
        <p className="pt-5">{this.props.complemento},{this.props.cidade},{this.props.estado}</p>

        <p>Quando: {this.props.data} - {this.props.hora_evento}</p>
        <p>Duração: {this.props.carga_horaria}</p>
        </div>
    )
}

}    
