import { ListItem, ListItemText, ListItemIcon, Collapse, List } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'

const style = theme => {
    console.log(theme)
    return {
        extraPadding: {
            paddingLeft: theme.spacing(1)
        }
    }
}

const useStyles = makeStyles(style)

const MenuItem = ({ routePath, listIcon, listText, subMenus }) => {
    const [open, setOpen] = useState()
    const classes = useStyles()

    const toggleSubMenu = () => {
        setOpen(!open)
    }

    const withSubMenu = subMenus && (
        <div>
            <ListItem button onClick={toggleSubMenu} >
                <ListItemIcon>
                    {listIcon}
                </ListItemIcon>
                <ListItemText primary={listText} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem >
            <Collapse in={open} timeout="auto" unmountOnExit className={classes.extraPadding}>
                <List component="div" >
                    {
                        subMenus.map((subMenu, index) => {
                            return (
                                <Link key={index} to={subMenu.routePath} style={{ textDecoration: 'none' }}>
                                    <ListItem button >
                                        <ListItemIcon>{subMenu.listIcon}</ListItemIcon>
                                        <ListItemText>{subMenu.text}</ListItemText>
                                    </ListItem>
                                </Link>
                            )
                        })
                    }
                </List>
            </Collapse>
        </div>
    )

    console.log(withSubMenu)

    const noSubMenu = (
        <Link to={routePath} style={{ textDecoration: 'none' }}>
            <ListItem button >
                <ListItemIcon>{listIcon}</ListItemIcon>
                <ListItemText>{listText}</ListItemText>
            </ListItem>
        </Link>)

    return (subMenus ? withSubMenu : noSubMenu);

}

export default MenuItem