import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

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
    card: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 2,
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

    addToShoppingCartButtons: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '24px'
    },
    button: {
        marginLeft: theme.spacing.unit,
    },

    shoppingCartIcon: {
        marginLeft: theme.spacing.unit
    },
    avatar: {
        backgroundColor: '#DFDFDE',
    },

    line: {
        height: '1px',
        backgroundColor: "#DFDFDE",
        marginTop: '24px',
        marginLeft: '-24px',
        marginRight: '-24px',
    },

    quantityButton: {
        fontSize: 'default'
    }
});




class ProdutoItem extends Component {

    render() {
        return (
            <React.Fragment>
                <Card className={this.props.classes.card}>

                    <CardHeader
                        avatar={<Avatar aria-label="Recipe" className={this.props.classes.avatar}></Avatar>}
                        action={<Typography component="h1" variant="h5" align="right"> {"R$ " + (parseFloat(this.props.preco).toFixed(2)).replace(".", ",")}</Typography>}
                        title={this.props.estoque + " produtos em estoque"}
                        titleTypographyProps={{
                            variant: "subtitle1"
                        }}
                    />

                    <Typography component="h1" variant="h6"> {this.props.nome}</Typography>
                    <Typography variant="subtitle2"> {this.props.descricao}</Typography>

                    <div className={this.props.classes.line} />
                    <div className={this.props.classes.addToShoppingCartButtons}>
                        <Typography variant="subtitle1">Quantidade</Typography>
                        <Button onClick={() => { this.props.add() }}> <Icon className={this.props.classes.quantityButton}>add</Icon></Button>
                        <Typography variant="h6">{this.props.quantidade === undefined ? '0' : this.props.quantidade}</Typography>
                        <Button onClick={() => { this.props.remove() }}> <Icon className={this.props.classes.quantityButton}>remove</Icon></Button>
                    </div>

                </Card>
                <div className={this.props.classes.buttons}>
                    <Button
                        variant="contained"
                        color="secondary"
                        // onClick={this.handleNext}
                        className={this.props.classes.button}
                    >
                        Inserir no Carrinho
                        <Icon className={this.props.classes.shoppingCartIcon}>shopping_cart</Icon>
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        // onClick={this.handleNext}
                        className={this.props.classes.button}
                    >
                        Continuar
                </Button>
                </div>
            </React.Fragment>
        );
    }
}

ProdutoItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProdutoItem);