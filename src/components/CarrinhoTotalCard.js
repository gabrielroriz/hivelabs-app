import React from 'react';
import PropTypes from 'prop-types';

//material components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

//styles

import styles from '../styles/CarrinhoTotalCard';

function CarrinhoTotalCard(props) {
    return (
        <Card className={props.classes.card}>
            <CardContent className={props.classes.content}>
                <Typography component="h5" variant="h5" color="textSecondary"> Total </Typography>
            </CardContent>
            <Typography variant="subtitle1" color="primary">{"R$ " + (parseFloat(props.valor).toFixed(2)).replace(".", ",")}</Typography>
        </Card>
    );
}

CarrinhoTotalCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CarrinhoTotalCard);