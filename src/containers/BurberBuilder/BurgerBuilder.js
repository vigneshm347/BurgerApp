import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'

const INGRIDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            ingredients:{
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchasable: false,
            checkOutModal: false
        }
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        //update ingredient
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        //update price
        const priceAddition = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchase(updatedIngredients);


    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount-1;
        //update ingredient
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        //update price
        const priceDeduction = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchase(updatedIngredients);

    }

    updatePurchase = (ingredients) => {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum,el) => {
            return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0})
    }
    purchaseCancelhandler = () => {
        this.setState({checkOutModal: false})
    }

    purchaseContinuehandler = () => {
        alert("Continue");
    }


    checkOutHandler = () => {
        this.setState({checkOutModal: true});
    }
    
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
       
        return(
            <Auxilary>
                <Modal show = {this.state.checkOutModal} modalClosed = { this.purchaseCancelhandler }>
                    <OrderSummary price = {this.state.totalPrice} ingredients = {this.state.ingredients} purchaseCancel = {this.purchaseCancelhandler} purchaseContinue = {this.purchaseContinuehandler}/>
                </Modal>
                <Burger ingredients = {this.state.ingredients}></Burger>
                <BuildControls 
                price = {this.state.totalPrice} 
                ingredientAdded = {this.addIngredientHandler} 
                ingredientRemoved = {this.removeIngredientHandler} 
                disabled = {disabledInfo} 
                activateCheckout = {this.state.purchasable}
                openModal = {this.checkOutHandler}/>
            </Auxilary>

        )
                    
    }
}

export default BurgerBuilder;