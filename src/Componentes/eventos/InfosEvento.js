import React from 'react';

export default class InfosEvento extends React.Component{

    render(){
        return(
            <div>

                {this.props.verificado}
                <img src={require(`../../fotos/${this.props.imagem}`).default} alt='imagem' title='titulo'/>

            </div>
        );
    }
}