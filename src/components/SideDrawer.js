import { Drawer, Divider } from '@material-ui/core'
import React from 'react'
import MenuItem from './MenuItem'
import { Dashboard, Assignment, Person, School, Grain, ExitToApp } from '@material-ui/icons'

export const SideDrawer = ({ open, toggleDrawer }) => {
    console.log(`Inside sidedrawer ${JSON.stringify(open)}`)
    return (
        <Drawer open={open} onClose={() => { toggleDrawer(false) }} >
            <MenuItem
                listIcon={<Dashboard />}
                listText='Dashboard'
                routePath={'/dashboard'}
                appTitle='Dashboard'
                toggleDrawer={toggleDrawer}>
            </MenuItem>
            <Divider />
            <MenuItem
                listIcon={<Assignment />}
                listText='Class'
                routePath={'/classes'}
                appTitle='Class Management'
                toggleDrawer={toggleDrawer}>
            </MenuItem>
            <Divider />

            <MenuItem
                listIcon={<School />}
                listText='Student'
                routePath={'/student'}
                appTitle='Student Management'
                toggleDrawer={toggleDrawer}>
            </MenuItem>
            <Divider />

            <MenuItem
                listIcon={<Person />}
                listText='Staff'
                routePath={'/staffs'}
                appTitle='Staff Management'
                toggleDrawer={toggleDrawer}>
            </MenuItem>
            <Divider />

            <MenuItem
                listIcon={<Grain />}
                listText='Administration'
                routePath={'/administration'}
                appTitle='Administration'
                toggleDrawer={toggleDrawer}>
            </MenuItem>
            <Divider />

            <Divider />
            <MenuItem
                listIcon={<ExitToApp />}
                listText='Exit'
                routePath={'/logout'}
                toggleDrawer={toggleDrawer}>
            </MenuItem>
        </Drawer>
    )
}
