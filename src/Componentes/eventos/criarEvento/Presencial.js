import React from 'react' 

import {Form,Container,Col} from 'react-bootstrap'

export default class Presencial extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      cep:'',
    }

    this.enviarEvento = this.enviarEvento.bind(this)
    this.buscaCep = this.buscaCep.bind(this)
  }

  async enviarEvento(event){
    event.preventDefault()
    const url = "http://localhost/testes/cadaseven.php"
    const dados = new FormData(event.target)
    const cabecalho = {
      method:"POST",
      body:dados,
    }
    const resposta = await fetch(url,cabecalho)
    await resposta
  }

  async buscaCep(event){
    event.preventDefault()
    let ceps = event.target.value

    if(ceps.length === 8){
      await fetch(`https://viacep.com.br/ws/${ceps}/json/`)
      .then(resposta => resposta.json())
      .then(resposta => this.setState({'cep':resposta}))
    }
  }

  render(){
    let now     = new Date()
    let ano     = now.getFullYear() 
    let mes     = now.getMonth()+1
    let dia     = now.getDate()
    let hora    = now.getHours()
    let minuto  = now.getMinutes()
    let segundo = now.getSeconds()

    return(
      <Container >
        <Form onSubmit={this.enviarEvento}>
          <Form.Control type="hidden" name="criador_evento" defaultValue="2" />
          <Form.Control type="hidden" name="data_postagem" defaultValue={`${ano}-${mes}-${dia}`}/>
          <Form.Control type="hidden" name="hora_postagem" defaultValue={`${hora}:${minuto}:${segundo}`}/>
          <Form.Control type="hidden" name="modalidade" defaultValue={this.props.modalidade}/>

          <Form.Row>
            <Col sm={12} md={6} lg={4}>
              <Form.Group>
                <Form.Label > Digite o nome do evento: </Form.Label>
                  <Form.Control type="text" name="nome_evento" />
              </Form.Group>
            </Col>	

            <Col sm={12} md={6} lg={4}>
              <Form.Group>
                <Form.Label>Categoria do evento: </Form.Label>
                  <Form.Control as="select" name="categoria" custom>
                    <option value="vazio"> </option>
                    <option value="exatas">Exatas</option>
                    <option value="musica">Musica</option>
                    <option value="idiomas">Idiomas</option>
                    <option value="jogos">Jogos</option>
                    <option value="desenho">Desenho</option>
                    <option value="palestra">Palestra</option>
                    <option value="esporte">Esporte</option>
                    <option value="outros">Outros</option>
                  </Form.Control>
              </Form.Group>
            </Col>

            <Col sm={12} md={12} lg={4}>
              <Form.Group>
                <Form.Label>Coloque uma imagem para o curso:</Form.Label>
                  <Form.File 
                    name="imagem"
                    id="custom-file-tranlate-html"
                    label="imagem"
                    custom
                  />
              </Form.Group>
            </Col>
          </Form.Row>	

          <Form.Row>
            <Col sm={12} md={6} lg={4}>
              <Form.Group>
                <Form.Label  >Qual a carga horaria do curso: </Form.Label>
                  <Form.Control  type="number" name="carga_horaria"/>
              </Form.Group>
            </Col>

            <Col sm={12} md={6} lg={4}>
              <Form.Group>
                <Form.Label>Telefone: </Form.Label>
                <Form.Control type="number" name="telefone"/>
              </Form.Group>
              
            </Col>

            <Col sm={12} md={12} lg={4}>
              <Form.Group>
                <Form.Label >Quem são os organizadores: </Form.Label>
                  <Form.Control  type="text" name="organizadores" />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col sm={12} md={6} lg={4}>
              <Form.Group>
                <Form.Label  >Data: </Form.Label>
                  <Form.Control type="date" name="data_evento" />
              </Form.Group>
            </Col>

            <Col sm={12} md={6} lg={4}>
              <Form.Group>
                <Form.Label >Horario: </Form.Label>
                  <Form.Control type="time" name="hora_evento"/>
              </Form.Group>
            </Col>

            <Col sm={12} md={12} lg={4}>
              <Form.Group>
                <Form.Label >CEP: </Form.Label>
                  <Form.Control type="text" name="cep" onChange={this.buscaCep}/>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col >
              <Form.Group>
                <Form.Label >Estado(UF): </Form.Label>
                  <Form.Control type="text" name="estado" defaultValue={this.state.cep.uf}/>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label >Endereço: </Form.Label>
                  <Form.Control  type="text" name="logradouro" defaultValue={this.state.cep.logradouro}/>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label >Cidade: </Form.Label>
                  <Form.Control type="text" name="cidade" defaultValue={this.state.cep.localidade}/>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label >Numero: </Form.Label>
                  <Form.Control  type="text" name="num" />
              </Form.Group>  
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label >Bairro: </Form.Label>
                  <Form.Control type="text" name="bairro" defaultValue={this.state.cep.bairro}/>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label  >Comple: </Form.Label>
                  <Form.Control  type="text" name="comple"/>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label  > Descreva sua atividade: </Form.Label>
                  <textarea className=" form-control" name="descricao" cols="5" rows="10"></textarea>
              </Form.Group>
            </Col>
          </Form.Row>

          <div className="form-row col-6 mx-auto mt-5 mb-5 ">
            <button className="btn btn-primary btn-block btn-lg" type="submit"> Enviar </button>
          </div>
          
        </Form>
      </Container>
    )
  }
}