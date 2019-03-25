import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            ingredients:{
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            }
        }
    }
    render(){
        return(
            <Auxilary>
                <Burger ingredients = {this.state.ingredients}></Burger>
            </Auxilary>

        )
                    
    }
}

export default BurgerBuilder;