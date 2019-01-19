import React, { Component } from 'react';
import PropTypes, { element } from 'prop-types';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Types as ProdutoTypes, Creators as ProdutoCreators } from '../redux/ducks/produto';

//components
import CarrinhoItem from './CarrinhoItem';
import CarrinhoTotalCard from './CarrinhoTotalCard';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Message from './Message';


//material components
import withStyles from '@material-ui/core/styles/withStyles';

import styles from '../styles/Carrinho.js'

let items = null;

class Carrinho extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantidades: new Map()
        }
    }


    createCarrinhoItems = () => {

        let items = [];

        let total = 0;

        this.props.store.carrinho.forEach((value, id) => {

            let produto = this.props.store.list.find((element) => {
                if (element.id == id) {
                    return true;
                }
            });

            total += produto.preco * value;

            items.push(
                <CarrinhoItem
                    key={produto.id}
                    valor={produto.preco * value}
                    nome={produto.nome}
                    quantidade={value}
                />
            );
        });

        if (items.length === 0 || total === 0) {
            return null;
        } else {
            items.push(<CarrinhoTotalCard valor={total} />);
            items.push(
                <div className={this.props.classes.buttons}>
                    <Button variant="contained" color="secondary" onClick={() => { this.props.addItemOnCarrinho() }} className={this.props.classes.button}> Inserir mais produtos
                            <Icon className={this.props.classes.shoppingCartIcon}>shopping_cart</Icon>
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => { }}> Continuar </Button>
                </div>
            );
        }

        return items;
    }


    componentWillMount = () => {
        items = this.createCarrinhoItems();
    }

    render() {
        return (items != null ? <main className={this.props.classes.layout}> {items}</main> : <Message text="Não há itens no carrinho." />)

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


