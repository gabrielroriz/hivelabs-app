export default theme => ({

    card: {
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 3,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 2,
            padding: theme.spacing.unit * 3,
        },
    },
    content: {
        flex: '1 0 auto',
    },
});