import React from 'react'
import {Container, Form, Button,Row} from 'react-bootstrap'

export default class Averificar extends React.Component{
  constructor(props){
    super(props)

    this.darCertificacao = this.darCertificacao.bind(this)
    this.olhar = this.olhar.bind(this)
  }
  
  async darCertificacao(event){
    event.preventDefault()
    const url = "http://52.67.245.155/php/verificado.php"
    const dados = new FormData(event.target)
    const cabecalho = {
      method:"POST",
      body:dados
    }
    const resposta = await fetch(url,cabecalho)
    await resposta
  }

  render(){
    return(
      <Container>
        <h3>Evento: {this.props.nome_evento} <br/>postado em: {this.props.data_postagem}</h3>
        <Row>
          <Form onSubmit={this.darCertificacao} className="mr-3">
            <Form.Control type="hidden" name="id" defaultValue={this.props.id}/>
            <Button variant="success" type="submit">Dar Certificação</Button>
          </Form>
          <Form >
            <Form.Control type="hidden" name="id" defaultValue={this.props.id}/>
            <Button variant="warning" type="submit">Olhar evento</Button>
          </Form>
        </Row>
      </Container>
    )
  }
}