import { Divider, List, Paper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import React from 'react'
import MenuItem from './MenuItem'
import { Dashboard, Assignment, Person, School, Grain, ExitToApp } from '@material-ui/icons'

const style = theme => ({
    root: {
        height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`
    }
})

const useStyle = makeStyles(style)

const SideDrawer = () => {
    const classes = useStyle()
    console.log(`Inside sidedrawer`)
    console.log(classes)


    return (
        <Paper elevation={3} className={classes.root}>
            <List >
                <MenuItem
                    listIcon={<Dashboard />}
                    listText='Dashboard'
                    routePath={'/dashboard'}
                    appTitle='Dashboard'>
                </MenuItem>
                <Divider />

                <MenuItem
                    listIcon={<Assignment />}
                    listText='Class'
                    routePath={'/classes'}
                    appTitle='Class Management'
                >
                </MenuItem>

                <Divider />

                <MenuItem
                    listIcon={<School />}
                    listText='Student'
                    routePath={'/students'}
                    appTitle='Student Management'
                >
                </MenuItem>
                <Divider />

                <MenuItem
                    listIcon={<Person />}
                    listText='Staff'
                    routePath={'/staffs'}
                    appTitle='Staff Management'
                >
                </MenuItem>
                <Divider />

                <MenuItem
                    listIcon={<Grain />}
                    listText='Administration'
                    routePath={'/administration'}
                    appTitle='Administration'
                >
                </MenuItem>
                <Divider />

                <Divider />
                <MenuItem
                    listIcon={<ExitToApp />}
                    listText='Exit'
                    routePath={'/logout'}
                >
                </MenuItem>
            </List>
        </Paper>
    )
}

export default SideDrawer