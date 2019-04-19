import React, {Component} from 'react';
import classes from './BurgerIngredient.css'
import PropType from 'prop-types';
class BurgerIngredient extends Component {
   
     
     render(){
     switch(this.props.type){
         case('bread-bottom'): {
            this.ingredient = <div className={classes.BreadBottom }></div>;
            break; 
         }

         case('bread-top'):{
            this.ingredient = (
                <div className = {classes.BreadTop}>
                    <div className = {classes.Seeds1}></div>
                    <div className = {classes.Seeds2}></div>
                </div>
            );
            break;
         }

         case('meat'):{
             this.ingredient = <div className = {classes.Meat}></div>
             break;
         }

         case('cheese'):{
            this.ingredient = <div className = {classes.Cheese}></div>
            break;
        }

        case('bacon'):{
            this.ingredient = <div className = {classes.Bacon}></div>
            break;
        }

        case('salad'):{
            this.ingredient = <div className = {classes.Salad}></div>
            break;
        }

        default:
            this.ingredient = null;
     }
     return this.ingredient;
    }    
};

BurgerIngredient.PropType = {
    type: PropType.number
}

export default BurgerIngredient;