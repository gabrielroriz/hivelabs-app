export default theme => ({

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

    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },

    button: {
        marginRight: theme.spacing.unit * 2,
    },

    shoppingCartIcon: {
        marginLeft: theme.spacing.unit
    },
});