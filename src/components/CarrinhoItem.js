import React, { Component } from 'react';
import PropTypes from 'prop-types';

//material components
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

//styles
import styles from '../styles/CarrinhoItem.js'

class CarrinhoItem extends Component {

    render() {
        return (
            <div>
                <Card className={this.props.classes.card}>
                    <CardHeader
                        avatar={<Icon className={this.props.classes.tagIcon}>local_offer</Icon>}
                        action={<Typography variant="subtitle1" color="primary" align="right"> {"R$ " + (parseFloat(this.props.valor).toFixed(2)).replace(".", ",")}</Typography>}
                        title={this.props.nome}
                        subheader={this.props.quantidade + " unidades"}
                        titleTypographyProps={{ variant: "subtitle1", color: "textSecondary" }}
                    />
                </Card>
            </div>);
    }
}

CarrinhoItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CarrinhoItem);