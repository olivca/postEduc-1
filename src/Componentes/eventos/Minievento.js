import React from 'react'
import {Link} from 'react-router-dom'

import {Card} from 'react-bootstrap'

import foto from '../../fotos/ideia.jpg'

export default class Minievento extends React.Component{
  render(){
    return(
      <Card className="card h">
        <Card.Img variant="top" src={foto} width="250" height="160" />
        <Card.Body className="flex bet ">
          <Card.Title>{this.props.nome}</Card.Title>
          <Card.Link as={Link} to={{pathname:`/EventoEspecifico${this.props.id}`}} className="ini">+ Info</Card.Link>
        </Card.Body>
      </Card>
    )
  }
}