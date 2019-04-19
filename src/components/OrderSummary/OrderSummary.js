import React, {Component} from 'react';
import Auxilary from '../../hoc/Auxilary'
import Button from '../UI/Button/Button';
class OrderSummary extends Component {
    render(){
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
        return (<li key={igKey}>
                    <span style = { { textTransform: "capitalize" } }>{igKey}</span>: { this.props.ingredients[igKey] }
                </li>
                )
    });
        return(
            <Auxilary>
                <p><strong>Price: </strong>{this.props.price.toFixed(2)}</p>
                <h3>Your Order</h3>
                <p>Here's your order:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue Checkout?</p>
                <Button btnType = "Danger" clicked = { this.props.purchaseCancel }>Cancel</Button>
                <Button btnType = "Success" clicked = { this.props.purchaseContinue }>Continue</Button>
            </Auxilary>
        )
    }
}

export default OrderSummary;