import React from 'react';
import Auxilary from '../../hoc/Auxilary'
import Button from '../UI/Button/Button';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (<li key={igKey}>
                    <span style = { { textTransform: "capitalize" } }>{igKey}</span>: { props.ingredients[igKey] }
                </li>
                )
    });
    return(
        <Auxilary>
            <p><strong>Price: </strong>{props.price.toFixed(2)}</p>
            <h3>Your Order</h3>
            <p>Here's your order:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue Checkout?</p>
            <Button btnType = "Danger" clicked = { props.purchaseCancel }>Cancel</Button>
            <Button btnType = "Success" clicked = { props.purchaseContinue }>Continue</Button>
        </Auxilary>
    )
};

export default orderSummary;