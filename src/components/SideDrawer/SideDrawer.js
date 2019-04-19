import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import classes from './SideDrawer.css';
import BackDrop from '../UI/Backdrop/Backdrop'
import Auxiliary from '../../hoc/Auxilary'
const sideDrawer = (props) => {
    //... 
    let attachedClass = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClass = [classes.SideDrawer, classes.Open]
    }
    return(
        <Auxiliary>
        <BackDrop show = {props.open} clicked = {props.closed} />
        <div className = {attachedClass.join(' ')}>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Auxiliary>
    );
}

export default sideDrawer;