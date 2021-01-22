import React from 'react'
import Minievento from './Minievento'

import {Container,Col,Row} from 'react-bootstrap'

export default class TodosEventos extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      eventos:[]
    }
  }

  componentDidMount(){
    fetch(`http://52.67.245.155/php/selevento.php?`)
    .then( response => response.json())
    .then(responseJson => this.setState({'eventos': responseJson}));
  }

  render(){
    return(
      <Container fluid>
        <Row>
          {this.state.eventos && this.state.eventos.map(even => (
            <Col className="mb-5 mt-5"  md={3}>
              <Minievento key={even.id_evento}
                            id={even.id_evento}  
                            imagem={even.imagem} 
                            nome={even.nome_evento}
                />
            </Col>
            
            
          ))}
        </Row>
      </Container>
    )
  }
}