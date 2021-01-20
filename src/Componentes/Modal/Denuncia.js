import React from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

import Checkbox from '../../Componentes/Checkbox/Checkbox';


const itens = [
	' conteúdo sexual / impróprio',
	' conteúdo violento / repulsivo',
	' conteúdo abusivo',
	' conteúdo perigoso',
	' spam ou enganoso',
];

class Denuncia extends React.Component {
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

	//Componente Checkbox

	componentWillMount = () => {
		this.selecionadoCheckbox = new Set();
	}

	mudarCheckbox = label => {
		if(this.selecionadoCheckbox.has(label)){
			this.selecionadoCheckbox.delete(label);
		} else {
			this.selecionadoCheckbox.add(label);
		}
	}

	handleFormSubmit = formSubmitEvent => {
		formSubmitEvent.preventDefault();

		for(const checkbox of this.selecionadoCheckbox){
			console.log(checkbox, 'selecionado');
		}
	}

	criarCheckbox = label => (
		<Checkbox
			label={label}
			handleCheckboxChange={this.mudarCheckbox}
			key={label}
		/>
	)

	criandoCheckboxes = () => (
		itens.map(this.criarCheckbox)
	)



	render() {
		return (
			<>
				<Button variant="danger" onClick={this.handleShow}>
					Denunciar
        		</Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Denunciar Evento</Modal.Title>
					</Modal.Header>
					<Modal.Body>
					<Form onSubmit={this.handleFormSubmit}>
                        {this.criandoCheckboxes()}
                        <br/>
						<Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Informações adicionais:</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Relate aqui informações adicionais sobre a denuncia." />
						</Form.Group>
					</Form>
					</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={this.handleClose}>
								Cancelar
							</Button>
							<Button variant="danger" onClick={this.handleClose}>
								Denunciar
							</Button>
						</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default Denuncia