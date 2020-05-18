const style = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    offset: theme.mixins.toolbar,
    contentContainer: {
        display: 'flex',
        minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    }
})

export default style;