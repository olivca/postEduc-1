import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ErroEfetuarLogin() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Link onClick={handleShow}>
          Todos Eventos
        </Link>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Efetuar o login</Modal.Title>
          </Modal.Header>
          <Modal.Body>É necessário efetuar o Login para Visualizar os Eventos</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }