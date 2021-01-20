import React from 'react';

import {Container, Row, Col, Button,Tabs,Tab} from 'react-bootstrap'

import foto from '../../fotos/ideia.jpg'




export default class EventoEspecifico extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      db: []
    };
    //this.InfosEvento = this.InfosEvento.bind(this);
  }

  // InfosEvento(){
  //   fetch("http://52.67.245.155/php/infoevento.php")
  //   .then( response => response.json())
  //   .then(responseJson => this.setState({db: responseJson}));
  //       console.log(this.state.db); 
  // }

  componentDidMount(){
    fetch("http://52.67.245.155/php/infoevento.php")
    .then( response => response.json())
    .then(responseJson => this.setState({'db': responseJson}));
  }



  render(){

    console.log(this.state.db)

    return(
      <Container fluid>
        <Container fluid>
          <Row>
            <Col className="center column">
              <p>verificado</p>
              <img src={foto} alt="foto"/>
              <p>Compartilhar</p>
            </Col>
            <Col className="p-5">
              <h2>Aqui vai o nome do evento</h2>
              <p className="pt-5">Local: </p>
              <p>Quando: </p>
              <p>Duração: </p>

              <Button> Participar </Button>
            </Col>
          </Row>
        </Container>

        <Container >
          <Tabs defaultActiveKey="home" >
            <Tab eventKey="home" title="Descrição">
              Descrição
            </Tab>
            <Tab eventKey="profile" title="Organizadores">
              Organizadores
            </Tab>
            <Tab eventKey="contact" title="Contato" >
              Informações de contato
            </Tab>
          </Tabs>
        </Container>
      </Container>
    )
  }
}