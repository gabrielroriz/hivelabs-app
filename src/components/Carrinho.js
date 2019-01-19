import React, { Component } from 'react';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Types as ProdutoTypes, Creators as ProdutoCreators } from '../redux/ducks/produto'

//components
import ProdutoItem from './ProdutoItem';

//material components
import withStyles from '@material-ui/core/styles/withStyles';

import styles from '../styles/Carrinho.js'


class Carrinho extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantidades: new Map()
        }
    }

    render() {
        console.log(this.props.store.carrinho);
        return (
            <main className={this.props.classes.layout}>
                <h1>Olá</h1>
            </main>
        )

    }
}

const mapStateToProps = state => {

    let id = 1;

    //temporary identifier
    const list = state.produto.list.map(produto => {
        return ({ ...produto, id: id++ })
    });

    return ({ store: { list, carrinho: state.produto.carrinho } });
};

const mapDispatchToProps = dispatch => ({
    actions: {
        getProdutos: bindActionCreators(ProdutoCreators.getProdutos, dispatch)
    }
});

Carrinho.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Carrinho));


