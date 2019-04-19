import React from 'react'
import classes from './DrawerToggle.css'
const drawertoggle = (props) => (
    <div className = {classes.DrawerToggle} onClick = {props.drawerClicked}>
            <div></div>
            <div></div>
            <div></div>
    </div>
)

export default drawertoggle;