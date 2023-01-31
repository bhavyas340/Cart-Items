import React  from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    // in jsx we define like using constructor
    constructor (){
        // boz itis a java script thing we have to call the "super()" as a constructor of parent class that is "React.Component"
        super();
        this.state = { // this.state is a object
            products:[
                {
                price: 9999,
                title: 'Watch',
                Qty: 3,
                img: '',
                id: 1
            },
            {
                price: 79999,
                title: 'iPhone',
                Qty: 1,
                img: '',
                id: 2
            },
            {
                price: 119990,
                title: 'Mac',
                Qty: 1,
                img: '',
                id: 3
            }

            ]
            
        }
        // this.testing();
        // other was to use it by using .bind(this);
        // this.increaseQuantity = this.increaseQuantity.bind(this)
    }
    render(){
        const {products} = this.state
        return (
            <div className="cart">
                
                {products.map((products) =>{
                    return <CartItem products = {products} key={products.id}/>
                })}
                {/* <CartItem/>
                <CartItem/> */}
            </div>
        )
    }

}
export default Cart;