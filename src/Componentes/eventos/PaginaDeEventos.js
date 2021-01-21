import React  from 'react';

import '../../css/index.css'

import Minievento from './Minievento'
import Minicategoria from './Minicategoria'
import Caroussel from './Carousel'
import Sugestoes from '../Modal/Sugestoes'

export default class PaginaDeEvento extends React.Component{

constructor(props){
  super(props);
  this.state = {
    db: []
  };
}

componentDidMount(){
  fetch("http://52.67.245.155/php/infoevento.php")
  .then( response => response.json())
  .then(responseJson => this.setState({'db': responseJson}));
}

[{
  "id_evento":"3",
  "modalidade":"online",
  "nome_evento":"teste1",
  "categoria":"exatas",
  "data_postagem":"2021-01-18",
  "hora_postagem":"11:44:15",
  "data_evento":"2021-01-21",
  "hora_evento":"15:15:00",
  "criador_evento":"1",
  "organizadores":"teste",
  "descricao":"teste",
  "link":"http://localhost:3000/CadastroEvento",
  "estado":"",
  "cidade":"",
  "bairro":"",
  "logradouro":"",
  "numero":"",
  "complemento":"",
  "cep":"",
  "carga_horaria":"123",
  "imagem":"../img/comporta3.png",
  "verificado":"0",
  "telefone":"123",
  "editado":null,
  "data_edicao":null,
  "hora_edicao":null
  }]

  render(){
    return(
      <div>

        <Caroussel/>

        <div className="flex bet altura">
          <p>Populares</p>
          <a href="http://localhost:3000/">+ Ver Todos</a>
        </div>

        <div className="flex bet margin fwrap">
            
            {this.state.db && this.state.db.map(arrayevento => (
                <Minievento key={arrayevento.id_evento}
                            id={arrayevento.id_evento}  
                            imagem={arrayevento.imagem} 
                            nome={arrayevento.nome_evento}
                />
            ))}
          <Minievento/>
        </div>

        <div className="borda margin center informacoes">

          {/* <h2 className="borda margin  info"> + Crie um Grupo de estudos</h2>
          <h3 className="cor">Area em fase de desenvolvimento</h3> */}

        </div>

        <div className="flex bet altura">
          <p>Categorias</p>
          <a href="http://localhost:3000/">+ Ver Mais</a>
        </div>

        <div className="flex bet margin fwrap">
        
          <Minicategoria/>
          <Minicategoria/>
          <Minicategoria/>
          <Minicategoria/>
          
        </div>


        <div className="margin center informacoes">

          <h2 className="margin  info">Não encontrou um Curso ou Evento de seu interesse? Nos ajude a melhorar o postEduc</h2>
          <Sugestoes />

        </div>

      </div>
    )
  }
}