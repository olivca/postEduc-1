import React from 'react';

export default class InfosEvento extends React.Component{

    render(){
        return(
            <div>

                {this.props.verificado}
                <img src={`http://52.67.245.155/php/img/${this.props.imagem}`} alt='imagem' title='titulo' width="600px" height="400px"/>

            </div>
        );
    }
}