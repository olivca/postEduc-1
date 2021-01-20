import React from 'react';
import {Form,Button,Col}  from 'react-bootstrap';
import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NomeLogin } from '../../store/actions';


class Login extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            redirect: false,
            nome:'',
            id:'',

        }

        this.Envio = this.Envio.bind(this)
    }

    async Envio(evento){
        evento.preventDefault()
    
        const url = "http://52.67.245.155/php/login.php"
        const dados = new FormData(evento.target)
        const cabecalho = {
            method: "POST", 
            body:dados,
        }    
        
        const resp = await fetch(url,cabecalho)
        const dadosbd = await resp.json()
        this.setState({ 
            'id':dadosbd[0].id_usuario,
            'nome':dadosbd[0].nome,
         })

         const {NomeLogin} = this.props
        
         NomeLogin(this.state.nome)
        
    };

    render(){
        if(this.state.redirect){
            return <Redirect to="/" />
        }else{
            //const { novoId } = this.props;
            const { novoNome } = this.props;
            
            return(
                <div className="form-group">   
                        <br /><h2>Login:{novoNome}</h2><br />
                    

                    <Form onSubmit={this.Envio}>

                        <Col sm={12} md={6} lg={4}>
                        <Form.Group>
                            <Form.Label>Nome de usuário</Form.Label>
                            <Form.Control  type="text" id="nome_usuario" name="nome_usuario" placeholder="Entre com o seu nome de usuário" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control  type="password" id="senha" name="senha" placeholder="Entre com sua senha" />
                        </Form.Group>

                        <Button variant="primary" type="submit" >Entrar</Button>
                        
                        </Col>
                    </Form>
                </div>
            )
    
        }
    }
};

const mapStateToProps = store => ({
    novoNome: store.NomeLogin.novoNome
})

const mapDispatchToProps = dispatch => bindActionCreators({NomeLogin}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login);
