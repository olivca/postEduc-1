import React from 'react'

import {Link} from 'react-router-dom'



export default class Admin extends React.Component{
  render(){
    return(
      <>
        <Link to="/Denuncias">Denuncias</Link><br/>
        <Link to="/VerificaEvento">Verificar Eventos</Link>
      </>
    )
  }
}