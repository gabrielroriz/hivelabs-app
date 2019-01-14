import React, { Component } from 'react';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Types as ProdutoTypes, Creators as ProdutoCreators } from '../redux/ducks/produto'

//components
import ProdutoItem from './ProdutoItem';


class ProdutoList extends Component {

    componentWillMount() {
        this.props.actions.getProdutos();
    }

    render() {
        return (
            <div>
                {this.props.store.list.map((produto) => {
                    return (
                        <ProdutoItem
                            key={produto.nome}
                            nome={produto.nome}
                            estoque={produto.estoque}
                            descricao={produto.descricao}
                            preco={produto.preco} />)
                })}
            </div>
        )

    }
}

const mapStateToProps = state => ({
    store: {
        list: state.produto.list
    }
});

const mapDispatchToProps = dispatch => ({
    actions: {
        getProdutos: bindActionCreators(ProdutoCreators.getProdutos, dispatch)
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(ProdutoList);


