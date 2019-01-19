import React from 'react';

import Typography from '@material-ui/core/Typography';

import styles from '../styles/Message';

import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(styles)((props) => (
    <div className={props.classes.wrapper}>
        <div className={props.classes.title}>
            <Typography variant="h2" color="textSecondary" align="center">{props.text}</Typography>
        </div>
    </div >
));