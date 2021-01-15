import React from 'react';
import {useState} from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

  
export default function CadastroUsuario(props) {

    const [ form, setForm ] = useState({
        nome: "",
        sobrenome: "",
        nascimento: "",
        genero: "",
        email: "",
        telefone: "",
        bairro: "",
        cidade: "",
        uf: "",
        escola: "",
        ano_letivo: "",
        tipo_escola: "",
        nome_usuario: "",
        senha: ""

    });


    const Envio = async (evento) => {
        evento.preventDefault();
        // eslint-disable-next-line no-unused-vars
        const resultado = fetch("http://localhost/postEducTeste/testes/src/php/cadastrousuario.php", { method: "POST", body: new FormData(evento.target) });
        alert("Cadastro realizado com sucesso!")
    };   
    
    return(
    <div>       
        
            <h2>Seja Bem-vindo, Faça Aqui seu Cadastro</h2>
            

            <Form onSubmit={Envio}>                

                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control  type="text" id="nome" name="nome" placeholder="Insira seu nome" />
                </Form.Group>    

                <Form.Group>    
                    <Form.Label>Sobrenome </Form.Label>
                    <Form.Control type="text" id="sobrenome" name="sobrenome" placeholder="Insira seu sobrenome" />                    
                </Form.Group>

                <Form.Group>    
                    <Form.Label>Gênero </Form.Label>
                    <Form.Control as="select" id="genero" name="genero">
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro / não desejo informar</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Data de Nascimento </Form.Label>
                    <Form.Control type="text" id="nascimento" name="nascimento" placeholder="DD/MM/AAAA" />
                </Form.Group>

                <Form.Group>  
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" id="email" name="email" placeholder="Insira seu Email" />  
                </Form.Group>

                <Form.Group>
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="text" id="telefone" name="telefone" placeholder="(XX) XXXXX-XXXX" />
                </Form.Group>

                <Form.Group>                    
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control type="text" id="bairro" name="bairro" placeholder="Insira o nome do seu bairro" /> 
                </Form.Group>    

                <Form.Group>    
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="text" id="cidade" name="cidade" placeholder="Cidade" /> 
                </Form.Group>    

                <Form.Group>    
                    <Form.Label>Estado</Form.Label>
                    <Form.Control as="select" id="uf" name="uf">
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                    </Form.Control>                    
                </Form.Group>    

                <Form.Group>
                    <Form.Label>Estuda em qual escola?</Form.Label>
                    <Form.Control type="text" id="escola" name="escola" placeholder="Nome completo da escola" />             
                </Form.Group>

                <Form.Group>    
                    <Form.Label>Está em qual ano/série?</Form.Label>
                    <Form.Control type="text" id="ano_letivo" name="ano_letivo" placeholder="série/ano/ciclo" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Sua escola é</Form.Label>
                    <Form.Control as="select" id="tipo_escola" name="tipo_escola">
                    <option value="Municipal">Municipal</option>
                    <option value="Estadual">Estadual</option>
                    <option value="Federal">Federal</option>
                    <option value="Privada">Privada</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Escolha um nome de usuário</Form.Label>
                    <Form.Control type="text" id="nome_usuario" name="nome_usuario" placeholder="Um apelido para fazer login" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Escolha uma senha</Form.Label>
                    <Form.Control type="password" id="senha" name="senha" placeholder="Sua senha de acesso" />
                </Form.Group>

                <Button variant="primary" type="submit">Cadastrar</Button>          
                

            </Form>
        
        

    </div>
    )
}

