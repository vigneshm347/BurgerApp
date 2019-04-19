import React from 'react';
import classes from './Toolbar.css'
import NavItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../../SideDrawer/DrawerToggle/DrawerToggle'
const toolbar = (props) => {
    return <header className={classes.Toolbar}>
            <DrawerToggle drawerClicked = {props.clicked}/>
                
            <nav className={classes.DesktopOnly}>
                <NavItems />
            </nav>
        </header>
}

export default toolbar;