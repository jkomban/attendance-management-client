import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Header from '../common/components/Header';
import SideDrawer from '../common/components/SideDrawer';

import AppRouter from '../routes/Routes'

import styles from './main.jss'

const useStyles = makeStyles(styles);

const MainLayout = props => {

    const [open, setOpen] = useState(true);
    const classes = useStyles();

    const toggleNavbar = () => {
        setOpen(!open);
    };

    /**
     * empty div below is to occupy same space as appbar height... 
     */
    return (
        <div className={classes.root}>
            <Header title={"School Management System"} toggleNavbar={toggleNavbar} open={open} />
            <div>
                <div id="emptyidv" className={classes.offset} >Hello</div>
                <div id="content-container" className={classes.contentContainer}>
                    {open && <SideDrawer />}
                    <AppRouter style={{ backgroundColor: 'red' }}></AppRouter>
                </div>

            </div>
        </div>
    )
}

export default MainLayout;