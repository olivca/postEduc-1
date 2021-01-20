import React  from 'react';

import '../../css/index.css'

import Minievento from './Minievento'
import Minicategoria from './Minicategoria'
import Caroussel from './Carousel'



export default class PaginaDeEvento extends React.Component{
  render(){
    return(
      <div>

        <Caroussel/>

        <div className="flex bet altura">
          <p>Populares</p>
          <a href="http://localhost:3000/">+ Ver Todos</a>
        </div>

        <div className="flex bet margin fwrap">

          <Minievento/>
          <Minievento/>
          <Minievento/>
          <Minievento/>
          <Minievento/>
        
        </div>

        <div className="borda margin center informacoes">

          <h2 className="borda margin  info"> + Crie um Grupo de estudos</h2>
          <h3 className="cor">Area em fase de desenvolvimento</h3>

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


        <div className="borda margin center informacoes">

          <h2 className="borda margin  info">Não encontrou um Curso ou Evento de seu interesse? Nos ajude a melhorar o postEduc</h2>
          <h3 className="cor">Preencha o formulario de interesse / sugestões</h3>

        </div>

      </div>
    )
  }
}