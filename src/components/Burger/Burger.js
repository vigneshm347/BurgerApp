import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    
    let transformIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
           return <BurgerIngredient key={igKey + i} type = {igKey} />;
        })
    }).reduce((accumulator, element) => {
        return accumulator.concat(element);
    }, []);
    if(transformIngredients.length === 0){
        transformIngredients = <p>Add ingredients</p>
    }
    return( 
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
                {transformIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default burger;