import { Divider, List, Paper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import React from 'react'
import MenuItem from './MenuItem'
import { Dashboard, Assignment, Person, School, Grain, ExitToApp, SupervisedUserCircle, BarChart, AccountBalance, Business } from '@material-ui/icons'
import AddCircle from '@material-ui/icons/AddCircle'
import ViewList from '@material-ui/icons/ViewList'

const style = theme => ({
    root: {
        height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
        width: '100%',
        maxWidth: 250,
        background: theme.palette.primary.light
    }
})

const useStyle = makeStyles(style)

const SideDrawer = () => {
    const classes = useStyle()
    console.log(`Inside sidedrawer`)
    console.log(classes)

    const ClassSubMenu = [
        {
            listIcon: <ViewList />,
            text: "All Class",
            routePath: '/classes'
        }, {
            listIcon: <AddCircle />,
            text: "Add Class",
            routePath: '/classes/add'
        }];
    const StudentSubMenu = [
        {
            listIcon: <ViewList />,
            text: "All Students",
            routePath: '/students'
        }, {
            listIcon: <AddCircle />,
            text: "Add Student",
            routePath: '/students/add'
        }];
    const StaffSubMenu = [
        {
            listIcon: <ViewList />,
            text: "All Staffs",
            routePath: '/students'
        }, {
            listIcon: <AddCircle />,
            text: "Add Staff",
            routePath: '/students/add'
        }];
    const ParentSubMenu = [
        {
            listIcon: <ViewList />,
            text: "All Parents",
            routePath: '/parents'
        }, {
            listIcon: <BarChart />,
            text: "Report",
            routePath: '/parents/report'
        }];

    const AdministrationSubMenu = [
        {
            listIcon: < AccountBalance />,
            text: "School",
            routePath: "/school"
        },
        {
            listIcon: < Business />,
            text: "Facilities",
            routePath: "/facilities"
        }
    ]


    return (
        <Paper elevation={3} className={classes.root} >
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
                    subMenus={ClassSubMenu}
                    appTitle='Class Management'
                >
                </MenuItem>

                <Divider />

                <MenuItem
                    listIcon={<School />}
                    listText='Student'
                    routePath={'/students'}
                    subMenus={StudentSubMenu}
                    appTitle='Student Management'
                >
                </MenuItem>
                <Divider />

                <MenuItem
                    listIcon={<Person />}
                    listText='Staff'
                    routePath={'/staffs'}
                    subMenus={StaffSubMenu}
                    appTitle='Staff Management'
                >
                </MenuItem>
                <Divider />

                <MenuItem
                    listIcon={<SupervisedUserCircle />}
                    listText='Parents'
                    routePath={'/parents'}
                    subMenus={ParentSubMenu}
                    appTitle='Staff Management'
                >
                </MenuItem>
                <Divider />

                <MenuItem
                    listIcon={<Grain />}
                    listText='Administration'
                    routePath={'/administration'}
                    subMenus={AdministrationSubMenu}
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
        </Paper >
    )
}

export default SideDrawer