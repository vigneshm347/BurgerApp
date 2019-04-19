import React, {Component} from 'react'
import Auxilary from '../../hoc/Auxilary'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer'

class Layout extends Component  {
    
        state = {
            showSideDrawer: false
        }
        handleSideDrawer = ()=>{
            this.setState({showSideDrawer: !this.state.showSideDrawer})
        }
        handleSideBarToggle = () => {
            this.setState((prevState) => {
                return {showSideDrawer: !prevState.showSideDrawer}
            })
        }

    render(){
        return (
            <Auxilary>
                <Toolbar clicked = {this.handleSideBarToggle}/>
                <SideDrawer open = {this.state.showSideDrawer} closed = {this.handleSideDrawer}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
            </Auxilary>
            );
    }
    
}

export default Layout;