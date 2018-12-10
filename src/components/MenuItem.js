import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'

const MenuItem = ({ routePath, listIcon, listText, toggleDrawer, appTitle }) => {
    return (
        <Link to={routePath} style={{ textDecoration: 'none' }}>
            <ListItem button onClick={() => { toggleDrawer(false, appTitle) }}>
                <ListItemIcon>{listIcon}</ListItemIcon>
                <ListItemText>{listText}</ListItemText>
            </ListItem>
        </Link>
    )
}

export default MenuItem