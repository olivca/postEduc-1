import React from 'react'

export default class Denunciar extends React.Component{
  constructor(props){
    super(props)

    this.enviarDenuncia = this.enviarDenuncia.bind(this)
  }

  async enviarDenuncia(event){
    event.preventDefault()
    const url = "http://52.67.245.155/php/enviadenuncia.php"
    const dados = new FormData(event.target)
    const cabecalho = {
      method:"POST",
      body:dados,
    }
    console.log(cabecalho)
    const resposta = await fetch(url,cabecalho)
    await resposta

    console.log('denuncia enviada')
  }

  render(){

    let now = new Date()
    let ano = now.getFullYear() 
    let mes = now.getMonth()+1
    let dia = now.getDate()

    return(
      <div>
        <br/><br/><br/>
        <p>Denunciar evento:</p>
      

        <form onSubmit={this.enviarDenuncia}>
          <input type="radio" id="sexual" name="tipo_denuncia" defaultValue="Conteúdo Sexual/Impróprio"/>
          <label htmlFor="sexual">Conteúdo Sexual/Impróprio</label><br/>

          <input type="radio" id="violento" name="tipo_denuncia" defaultValue="Conteúdo Violento/Repulsivo"/>
          <label htmlFor="violento">Conteúdo Violento/Repulsivo</label><br/>
          
          <input type="radio" id="abusivo" name="tipo_denuncia" defaultValue="Conteúdo abusivo"/>
          <label htmlFor="abusivo">Conteúdo abusivo</label><br/>
          
          <input type="radio" id="perigoso" name="tipo_denuncia" defaultValue="Conteúdo Perigoso"/>
          <label htmlFor="perigoso">Conteúdo Perigoso</label><br/>
          
          <input type="radio" id="enganoso" name="tipo_denuncia" defaultValue="Spam ou Enganoso"/>
          <label htmlFor="enganoso">Spam ou Enganoso</label><br/>


          <input type="hidden" name="id_usuario" defaultValue="1"/>
          <input type="hidden" name="id_evento" defaultValue="5"/>
          <input type="hidden" name="data_denuncia" defaultValue={`${ano}-${mes}-${dia}`}/>
          
          <br/><br/>
          Informações Adicionais:<br/>

          <textarea name="denuncia" rows="5" cols="30"></textarea><br/><br/>
          <button>cancelar</button>
          <button type="submit">denunciar</button>
          
        </form>
      </div>
    )
  }
}