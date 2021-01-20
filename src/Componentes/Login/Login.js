import React from 'react';
import {useState} from 'react';
//import {useState} from 'react';
import {Form,Button,Col, Jumbotron}  from 'react-bootstrap';
import { useHistory } from 'react-router-dom';




export default function Login(props) {

    const [ form, setForm ] = useState({
        
         nome_usuario: "",
         senha: ""
    });

    const alteracao = (evento) => {
         setForm({
             ...form,
             [evento.target.id]: evento.target.value
        })        
    };  

    const history = useHistory();

    const Envio = async (evento) => {
        evento.preventDefault()
    // eslint-disable-next-line no-unused-vars
        const url = "http://52.67.245.155/php/login.php"
        const dados = new FormData(evento.target)
        const cabecalho = {
            method: "POST", 
            body:dados,
        }    
        
        const resp = await fetch(url,cabecalho)
        const dadosbd = await resp.json()
        await dadosbd;
        setForm(dadosbd)
        
       
        const senhaform = evento.target.senha.value;
       
        const senha = dadosbd[0].senha;
       

        if (senhaform === 'admin') {
            alert("Acesso como administrador")
            history.push("/CadastroEvento");  
        } else if (senhaform === senha) {
            alert("Conectado.")
            history.push("/");    
        }    
    };       
    
        
    return(
        <Jumbotron className="m-0">
            <div >
                <h2 className="text-center">Login</h2><br />
                <Form onSubmit={Envio}>

                    <Col sm={12} md={{span: 6, offset: 3}} lg={{offset:4, span:4}}>
                    <Form.Group>
                        <Form.Label>Nome de usuário</Form.Label>
                        <Form.Control onChange={alteracao} type="text" id="nome_usuario" name="nome_usuario" placeholder="Entre com o seu nome de usuário" />
                        <Form.Control  type="text" id="nome_usuario" name="nome_usuario" placeholder="Entre com o seu nome de usuário" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Senha</Form.Label>
                        <Form.Control onChange={alteracao} type="password" id="senha" name="senha" placeholder="Entre com sua senha" />
                        <Form.Control  type="password" id="senha" name="senha" placeholder="Entre com sua senha" />
                    </Form.Group>

                    <Button variant="primary" type="submit">Entrar</Button>

                    </Col>
                </Form>
                
            </div>
        </Jumbotron>
    )

    
};