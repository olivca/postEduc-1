import React from 'react';
import {useState} from 'react';
import {Form,Button,Col}  from 'react-bootstrap';
import { useHistory } from 'react-router-dom';




export default function Login(props) {

    const [ form, setForm ] = useState({
        
        // nome_usuario: "",
        // senha: ""
        dados:[]

    });


    // const recebedados = async () =>{
    //     await fetch("http://localhost/testes/autlucas.php")
    //     .then(resposta => resposta.json())
    //     .then(resposta => console.log(resposta))

        
    // }


    // const alteracao = (evento) => {
    //     setForm({
    //         ...form,
    //         [evento.target.id]: evento.target.value
    //     })        
    // };  

    const history = useHistory();

    const Envio = async (evento) => {
        evento.preventDefault()
    // eslint-disable-next-line no-unused-vars
        const url = "http://localhost/postEduc2Lab/postEduc/php/login.php"
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
        history.push("/");  
        } else if (senhaform === senha) {
            history.push("/");    
        } else {
            alert("Nome de usuário ou senha inválido");
        }
    
    };       
    
        
    return(
        <div className="form-group">

                
                <br /><h2>Login</h2><br />
            

            <Form onSubmit={Envio}>

                <Col sm={12} md={6} lg={4}>
                <Form.Group>
                    <Form.Label>Nome de usuário</Form.Label>
                    <Form.Control  type="text" id="nome_usuario" name="nome_usuario" placeholder="Entre com o seu nome de usuário" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control  type="password" id="senha" name="senha" placeholder="Entre com sua senha" />
                </Form.Group>

                <Button variant="primary" type="submit">Entrar</Button>

                </Col>
            </Form>
        </div>

    )

    
};