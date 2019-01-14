import React, { Component } from 'react';


export default class ProdutoItem extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.nome}</h1>
                <h2>{this.props.descricao}</h2>
                <h3>{this.props.preco}</h3>
            </div>
        );
    }
}