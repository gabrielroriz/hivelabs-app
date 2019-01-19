import React, { Component } from 'react';
import PropTypes from 'prop-types';

//material components
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

//styles
import styles from '../styles/ProdutoItem.js'

class ProdutoItem extends Component {

    render() {
        return (
            <div>
                <Card className={this.props.classes.card}>
                    <CardHeader
                        avatar={<Avatar aria-label="Recipe" className={this.props.classes.avatar}></Avatar>}
                        action={<Typography component="h1" variant="h5" align="right"> {"R$ " + (parseFloat(this.props.preco).toFixed(2)).replace(".", ",")}</Typography>}
                        title={this.props.estoque + " produtos em estoque"}
                        titleTypographyProps={{ variant: "subtitle1" }}
                    />
                    <CardContent>
                        <Typography component="h1" variant="h6"> {this.props.nome}</Typography>
                        <Typography variant="subtitle2"> {this.props.descricao}</Typography>
                        <div className={this.props.classes.line} />
                    </CardContent>

                    <CardActions className={this.props.classes.cardActions}>
                        <Typography variant="subtitle1">Quantidade</Typography>
                        <Button onClick={() => { this.props.add() }}> <Icon className={this.props.classes.actionButton}>add</Icon></Button>
                        <Typography variant="h6">{this.props.quantidade === undefined ? '0' : this.props.quantidade}</Typography>
                        <Button onClick={() => { this.props.remove() }}> <Icon className={this.props.classes.actionButton}>remove</Icon></Button>
                    </CardActions>
                </Card>

                <div className={this.props.classes.buttons}>
                    <Button variant="contained" color="secondary" onClick={() => { this.props.addItemOnCarrinho() }} className={this.props.classes.button}> Inserir no Carrinho
                        <Icon className={this.props.classes.shoppingCartIcon}>shopping_cart</Icon>
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => { }} className={this.props.classes.button}> Continuar </Button>
                </div>
            </div>);
    }
}

ProdutoItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProdutoItem);