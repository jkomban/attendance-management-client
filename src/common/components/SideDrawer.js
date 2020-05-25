import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider, List, Paper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import React from 'react'
import MenuItem from './MenuItem'
import AppMenu from './Menu'

const style = theme => ({
    root: {

        width: '100%',
        maxWidth: 250,
        background: theme.palette.primary.light
    }
})

const useStyle = makeStyles(style)

const SideDrawer = ({ auth }) => {
    const classes = useStyle()
    const isAuthenticated = false;

    return (
        <Paper elevation={3} className={classes.root} square >
            <List >
                {
                    <div>
                        {
                            AppMenu.map((item, index) => {
                                const result = (item.needAuth && auth.authenticated) ?
                                    <div key={index}>
                                        <MenuItem
                                            listText={item.listText} routePath={item.routePath}
                                            listIcon={<item.listIcon />}
                                            subMenus={item.subMenus}
                                        />
                                        <Divider />
                                    </div>
                                    : (!item.needAuth && !item.exclAuth) ?
                                        <div key={index}>
                                            <MenuItem
                                                listText={item.listText} routePath={item.routePath}
                                                listIcon={<item.listIcon />}
                                                subMenus={item.subMenus}
                                            />
                                            <Divider />
                                        </div>
                                        : (!item.needAuth && item.exclAuth && !auth.authenticated) ?
                                            <div key={index}>
                                                <MenuItem
                                                    listText={item.listText} routePath={item.routePath}
                                                    listIcon={<item.listIcon />}
                                                    subMenus={item.subMenus}
                                                />
                                                <Divider />
                                            </div>
                                            : <div key={index} />;
                                return result;
                            })
                        }

                    </div>
                }
            </List>
        </Paper >
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.auth
    }
}

const mapDispatachToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatachToProps)(SideDrawer);
