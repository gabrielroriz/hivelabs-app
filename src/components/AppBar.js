import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

//TO-DO: put AppBarButton in another file
const AppBarButton = withStyles({
    root: {
        color: 'white',
        marginLeft: '24px',
        marginRight: '24px'
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export default withRouter(({ history }) => (
    <AppBar position="static">
        <Toolbar>
            <AppBarButton onClick={() => { history.push('/'); }}>Produtos</AppBarButton>
            <AppBarButton onClick={() => { history.push('/carrinho'); }}>Carrinho</AppBarButton>
        </Toolbar>
    </AppBar>

));