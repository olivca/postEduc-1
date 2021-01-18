import React from 'react'

import {Card} from 'react-bootstrap'

import foto from '../../fotos/ideia.jpg'

export default class Minievento extends React.Component{
  render(){
    return(
      <Card className="card h">
        <Card.Img variant="top" src={foto} width="250" height="160" />
        <Card.Body className="flex bet ">
          <Card.Title>Titulo do Evento</Card.Title>
          <Card.Link href="#" className="ini">+ Info</Card.Link>
        </Card.Body>
      </Card>
    )
  }
}