const style = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    offset: theme.mixins.toolbar,
    contentContainer: {
        display: 'flex',
        height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    }
})

export default style;