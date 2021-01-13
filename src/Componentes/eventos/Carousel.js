import React from 'react'

import {Carousel, Container} from 'react-bootstrap'

import foto from '../../fotos/ideia.jpg'

export default class Caroussel extends React.Component{
  render(){
    return(
      <Container fluid className="mb-3">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={foto}
                alt="First slide"
                height="500px"
              />
              <Carousel.Caption>
                <h3>Primeiro Slide</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={foto}
                alt="Third slide"
                height="500px"
              />

              <Carousel.Caption>
                <h3>Segundo Slide</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={foto}
                alt="Third slide"
                height="500px"
              />

              <Carousel.Caption>
                <h3>Terceiro slide</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
    )
  }
}