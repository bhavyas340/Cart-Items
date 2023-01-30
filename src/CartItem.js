import React  from "react";

class CartItem extends React.Component {
    // in jsx we define like using constructor
    constructor (){
        // boz itis a java script thing we have to call the "super()" as a constructor of parent class that is "React.Component"
        super();
        this.state = { // this.state is a object
            price: 999,
            title: 'Mobile Phone',
            Qty: 0,
            img: ''
        }
        // other was to use it by using .bind(this);
        // this.increaseQuantity = this.increaseQuantity.bind(this)
    }
    increaseQuantity= () =>{  //aerro function bind it by self
        // this.state.Qty += 1;
        // console.log(this ,this.state);
        // form 1 setState
        // this.setState({
        //     Qty: this.state.Qty + 1  // this is calles "Shellow mearging"
        // })
        // form 2 setState
        this.setState((prevState) =>{
            return {
                Qty :prevState.Qty +1
            }
        })
    }
    decreaseQuantity=() =>{
        this.setState({
            Qty: this.state.Qty - 1 || this.state.Qty > -1
        })
    }
    render (){
        const {price, title, Qty} = this.state;
        return (
                <div className="cart-item">
                   <div className="left-block">
                        <img style={styles.image} />
                   </div>
                   <div className="right-block">
                        <div style={{fontSize:25}}>{title}</div>
                        <div style={{color:'#777'}}>Rs {price}</div>
                        <div style={{color:'#777'}}>Qty: {Qty}</div>
                        <div className="cart-item-actions">
                            {/* {buttons} */}
                            <img alt="increase" className="action-icons" onClick={this.increaseQuantity} src="https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png"/>
                            <img alt="decrease" className="action-icons" onClick={this.decreaseQuantity} src="https://static-00.iconduck.com/assets.00/circle-minus-icon-256x256-qxhfmezf.png"/>
                            <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/211/211753.png"/>
                        </div>
                   </div>

                </div>
            
        )
    }
}
const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 14,
        backgroundColor: '#777'
    }
}
export default CartItem;