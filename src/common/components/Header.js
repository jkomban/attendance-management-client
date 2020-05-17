import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import MenuOpen from '@material-ui/icons/MenuOpen'


const Header = ({ title, toggleNavbar, open }) => {
    return (
        <AppBar position="fixed" >
            <Toolbar>
                <IconButton aria-label="Menu" onClick={toggleNavbar}>
                    {open ? <MenuOpen /> : <MenuIcon />}
                </IconButton>
                <Typography variant="h5" color="inherit" >
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
