import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
class BurgerBuilder extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            ingredients:{
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 2
            }
        }
    }
    render(){
        return(
            <Auxilary>
                <Burger ingredients = {this.state.ingredients}></Burger>
                <BuildControls></BuildControls>
            </Auxilary>

        )
                    
    }
}

export default BurgerBuilder;