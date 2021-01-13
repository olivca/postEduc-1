import React from 'react'

import {Card} from 'react-bootstrap'

import foto from '../../fotos/ideia.jpg'

import '../../css/index.css'

export default class Minicategoria extends React.Component{
  render(){
    return(
      <Card className="card h ">
        <Card.Img variant="top" src={foto} width="250" height="160" />
        <Card.Body className="flex bet ">
          <Card.Title>Categoria</Card.Title>
          <Card.Link href="http://localhost:3000/" className="ini">+ Info</Card.Link>
        </Card.Body>
      </Card>
    )
  }
}