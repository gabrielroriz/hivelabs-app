import React, { Component } from 'react';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Types as ProdutoTypes, Creators as ProdutoCreators } from '../redux/ducks/produto'

//components
import ProdutoItem from './ProdutoItem';

import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';


const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
});


class ProdutoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantidades: new Map()
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
            <React.Fragment>
                <CssBaseline />
                <main className={this.props.classes.layout}>
                    {this.props.store.list.map((produto) => {
                        return (
                            <ProdutoItem
                                quantidade={this.state.quantidades.get(produto.id)}
                                add={() => { this.addQuantidade(produto.id) }}
                                remove={() => { this.removeQuantidade(produto.id) }}
                                key={produto.id}
                                nome={produto.nome}
                                estoque={produto.estoque}
                                descricao={produto.descricao}
                                preco={produto.preco} />)
                    })}
                </main>
            </React.Fragment>
        )

    }
}

const mapStateToProps = state => {

    let id = 1;

    //temporary identifier
    const list = state.produto.list.map(produto => {
        return ({ ...produto, id: id++ })
    })

    return ({ store: { list, carrinho: state.produto.carrinho } });
};

const mapDispatchToProps = dispatch => ({
    actions: {
        getProdutos: bindActionCreators(ProdutoCreators.getProdutos, dispatch)
    }
});

ProdutoList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProdutoList));


