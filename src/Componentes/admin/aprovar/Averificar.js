import React from 'react'
import { Form, Button,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Averificar extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      redirect:false
    }

    this.darCertificacao = this.darCertificacao.bind(this)
    
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
    window.location.reload();
  }

  render(){
    return(
      <div >
        <Row>
          <h3>Evento: {this.props.nome_evento} <br/>postado em: {this.props.data_postagem}</h3>
        </Row>
        <Row>
        
          <Form onSubmit={this.darCertificacao} className="mr-3">
          
            <Form.Control type="hidden" name="id" defaultValue={this.props.id}/>
            <Button variant="success" type="submit">Aprovar</Button>
          </Form>
          <Form >
            <Form.Control type="hidden" name="id" defaultValue={this.props.id}/>

            <Button variant="warning" type="submit" as={Link} to={`EventoEspecifico${this.props.id}`}>Ver detalhes</Button>

          </Form>
        </Row>
      </div>
    )
  } 
}
