import React from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

class Sugestoes extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		return (
			<>
				<Button variant="outline-light" onClick={this.handleShow}>
					Deixe aqui seu interesse e/ou sugestão
        		</Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Formulário de Interesses / Sugestões</Modal.Title>
					</Modal.Header>
					<Modal.Body>
					<Form>
						<Form.Group controlId="formBasicEmail">
						<Form.Label>Nome completo</Form.Label>
						<Form.Control type="text" placeholder="Digite seu nome completo" />
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Seu melhor e-mail aqui" />
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Interesses / Sugestões</Form.Label>
						<Form.Control as="textarea" rows={3} placeholder="Escreva aqui seus interesses ou sugestões" />
						</Form.Group>
					</Form>
					</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={this.handleClose}>
								Fechar
							</Button>
							<Button variant="primary" onClick={this.handleClose}>
								Enviar
							</Button>
						</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default Sugestoes