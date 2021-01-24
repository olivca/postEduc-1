import React from 'react'

import {Form,Container,Col} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux';

class Online extends React.Component{
  constructor(props){
    super(props)

    this.state={
      redirect: false,
      valor:'imagem'
    }

    this.enviarEvento = this.enviarEvento.bind(this)
    this.mudaimagem = this.mudaimagem.bind(this)
  }

  mudaimagem(event){
    event.preventDefault()
    this.setState({
      'valor': 'Imagem carregada'
    })
  }

  async enviarEvento(event){
    event.preventDefault()
    const url = "http://52.67.245.155/php/cadaseven.php"
    const dados = new FormData(event.target)
    const cabecalho = {
      method:"POST",
      body:dados,
    }
    const resposta = await fetch(url,cabecalho)
    await resposta

    this.setState({
      redirect: true
    })
  }

  render(){
    if(this.state.redirect){
      return <Redirect to="/"/>
    }else {
      const { novoId } = this.props

      let now = new Date()
      let ano = now.getFullYear() 
      let mes = now.getMonth()+1
      let dia = now.getDate()
      let hora    = now.getHours()
      let minuto  = now.getMinutes()
      let segundo = now.getSeconds()

      return(
        <Container >
          <Form onSubmit={this.enviarEvento}>
            <Form.Control type="hidden" name="criador_evento" defaultValue={novoId} />
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
                  <Form.Label>Categoria do evento:  </Form.Label>
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
                      onChange={this.mudaimagem}
                      name="imagem"
                      id="custom-file-tranlate-html"
                      label={this.state.valor}
                      accept=".jpg,.png,.jpeg"
                      custom
                    />
                </Form.Group>
              </Col>
            </Form.Row>	

            <Form.Row>
              <Col sm={12} md={6} lg={4}>
                <Form.Group>
                  <Form.Label  >Qual a carga horaria do curso: </Form.Label>
                    <Form.Control  type="text" name="carga_horaria"/>
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
                  <Form.Label >Link do evento : </Form.Label>
                    <Form.Control type="url" name="lin" placeholder="https://"/>
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
}
const mapState = store =>({
  novoId: store.IdLogin.novoId
})


export default connect(mapState)(Online)