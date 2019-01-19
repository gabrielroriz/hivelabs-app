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

        tagIcon: {
            color: theme.palette.primary.main
        },
    });
}
