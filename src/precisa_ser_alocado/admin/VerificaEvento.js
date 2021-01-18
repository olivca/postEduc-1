import React from 'react'

import Averificar from './Averificar'

import {Container} from 'react-bootstrap'

export default class VerificaEvento extends React.Component{
  constructor(props){
    super(props)

    this.state = {

      eventos:[],

    }

  }

  componentDidMount(){
    fetch('http://localhost/testes/verifica.php')
    .then(resposta => resposta.json())
    .then(resposta => this.setState({'eventos':resposta}))
  }

  render(){
    return(
      <Container>
        {this.state.eventos && this.state.eventos.map(item => (
          <Averificar
            key={item.id_evento}
            id={item.id_evento}
            nome_evento = {item.nome_evento}
            data_postagem = {item.data_postagem}
          /> 
        ))}
      </Container>
    )
  }
}