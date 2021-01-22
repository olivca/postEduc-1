import React from 'react';

export default class Descricao extends React.Component{

render(){
        return(
            <div>
                <p>{this.props.descricao}</p>
                <h5>Organizadores:</h5>
                <p>{this.props.organizadores} - {this.props.telefone}</p>
            </div>
        );
    }
}


