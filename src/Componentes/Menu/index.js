import React from 'react';
import {Link} from 'react-router-dom'

import {Navbar, Nav} from 'react-bootstrap';

import Logo from '../../Img/logo.png';


import './menu.css';

export class Menu extends React.Component{
    render(){
        return(
            <Navbar  className="menu" expand="lg" variant="dark">
                <Navbar.Brand >
                    <Link to="/"><img src={Logo} width="30" height="30" className="d-inline-block align-top" 
                    alt="PostEduc logo" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            {/*as={Link} href="" to=""*/}
                            <Nav.Link as={Link} to="/CadastroEvento">+ Criar Evento</Nav.Link> 
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>+ Criar Grupo de Estudos</Nav.Link> 
                        </Nav.Item>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Item>
                            {/*as={Link} href="" to=""*/}
                            <Nav.Link as={Link} to="/Login">Entrar</Nav.Link> 
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/CadastroUsuario">Cadastrar-se</Nav.Link> 
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Menu;