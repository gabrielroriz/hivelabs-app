import React, { Component } from 'react';
import PropTypes from 'prop-types';


//router
import { withRouter } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProdutoCreators } from '../redux/ducks/produto';

//components
import ProdutoItem from './ProdutoItem';

//material components
import withStyles from '@material-ui/core/styles/withStyles';

import styles from '../styles/ProdutoList.js'


class ProdutoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantidades: new Map(this.props.store.carrinho)
        }
    }

    componentWillMount() {
        this.props.actions.getProdutos();
    }

    addQuantidade(id) {

        let quantidades = this.state.quantidades;

        let value = quantidades.get(id);

        if (value === undefined) {
            quantidades.set(id, 1);
        } else {
            quantidades.set(id, value + 1);
        }

        this.setState(prevState => ({ ...prevState, quantidades }));
    }

    removeQuantidade(id) {

        let quantidades = this.state.quantidades;

        let value = quantidades.get(id);

        if (value === undefined || value === 0) {
            return
        } else {
            quantidades.set(id, value - 1);
        }

        this.setState(prevState => ({ ...prevState, quantidades }));

    }

    render() {
        return (
            <main className={this.props.classes.layout}>
                {this.props.store.list.map((produto) => {
                    return (
                        <ProdutoItem
                            key={produto.id}
                            quantidade={this.state.quantidades.get(produto.id)}
                            nome={produto.nome}
                            estoque={produto.estoque}
                            descricao={produto.descricao}
                            preco={produto.preco}

                            add={() => { this.addQuantidade(produto.id) }}
                            remove={() => { this.removeQuantidade(produto.id) }}
                            addItemOnCarrinho={() => {
                                if (this.state.quantidades.get(produto.id) === undefined) { return; }
                                this.props.history.push('/carrinho');
                                this.props.actions.addItemOnCarrinho(produto.id, this.state.quantidades.get(produto.id));
                            }}
                        />)
                })}
            </main>);
    }
}

const mapStateToProps = state => {

    //temporary identifier
    let id = 1;
    const list = state.produto.list.map(produto => {
        return ({ ...produto, id: id++ })
    })

    return ({ store: { list, carrinho: state.produto.carrinho } });
};

const mapDispatchToProps = dispatch => ({
    actions: {
        getProdutos: bindActionCreators(ProdutoCreators.getProdutos, dispatch),
        addItemOnCarrinho: bindActionCreators(ProdutoCreators.addItemOnCarrinho, dispatch)
    }
});

ProdutoList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProdutoList)));


