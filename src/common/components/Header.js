import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12
    },
};

const Header = (props) => {
    console.log(`Header-> ${props.title}`)
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton className={props.classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon onClick={() => { props.toggleDrawer(true) }} />
                </IconButton>
                <Typography variant="h6" color="inherit" className={props.classes.flex}>
                    {props.title}
                </Typography>
            </Toolbar>
        </AppBar>
    );

};

export default withStyles(styles)(Header);
