export default theme => {

    return ({

        card: {
            marginTop: theme.spacing.unit * 2,
            marginBottom: theme.spacing.unit * 3,
            padding: theme.spacing.unit * 2,
            [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
                marginTop: theme.spacing.unit * 6,
                marginBottom: theme.spacing.unit * 2,
                padding: theme.spacing.unit * 3,
            },
        },

        avatar: {
            backgroundColor: '#DFDFDE',
        },

        line: {
            height: '1px',
            backgroundColor: "#DFDFDE",
            marginTop: theme.spacing.unit * 3,
            marginLeft: theme.spacing.unit * -3,
            marginRight: theme.spacing.unit * -3,
        },

        cardActions: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },

        actionButton: {
            fontSize: 'default'
        },

        buttons: {
            display: 'flex',
            justifyContent: 'flex-end',
        },

        shoppingCartIcon: {
            marginLeft: theme.spacing.unit
        },

        button: {
            marginLeft: theme.spacing.unit,
        },


    });
}
