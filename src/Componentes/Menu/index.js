import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';

import Logo from '../../Img/logo.png';

import './menu.css';

export class Menu extends React.Component{
    render(){
        return(
            <Navbar className="menu" expand="lg" variant="dark">
                <Navbar.Brand href="#">
                    <img src={Logo} width="30" height="30" className="d-inline-block align-top" 
                    alt="PostEduc logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            {/*as={Link} href="" to=""*/}
                            <Nav.Link >+ Criar Evento</Nav.Link> 
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>+ Criar Grupo de Estudos</Nav.Link> 
                        </Nav.Item>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Item>
                            {/*as={Link} href="" to=""*/}
                            <Nav.Link >Entrar</Nav.Link> 
                        </Nav.Item>
                        <Nav.Item>
                            {/*as={Link} href="" to=""*/}
                            <Nav.Link>|</Nav.Link> 
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Cadastrar-se</Nav.Link> 
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Menu;