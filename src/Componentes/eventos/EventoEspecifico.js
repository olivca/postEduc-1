import React from 'react';

import {Container, Row, Col, Button,Tabs,Tab} from 'react-bootstrap'

import foto from '../../fotos/ideia.jpg'
import '../../css/index.css'
import PopoverEventoEspecifico from '../Popover/PopoverEventoEspecifico';


export default class EventoEspecifico extends React.Component{
  render(){
    return(
      <Container fluid>
        <Container fluid>
          <Row>
            <Col className="center column">
              <PopoverEventoEspecifico />
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