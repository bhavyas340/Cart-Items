import React  from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    // in jsx we define like using constructor
    render(){
        return (
            <div className="cart">
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
        )
    }

}
export default Cart;