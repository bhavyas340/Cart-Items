import React  from "react";

class CartItem extends React.Component {
    // in jsx we define like using constructor
   
    // testing (){
    //     const promise = new Promise((resolve, reject) =>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         }, 3000)
    //     })
    //     promise.then(()=>{
    //         //setStaes act like synchronous call
    //         this.setState({Qty : this.state.Qty +10})
    //     })
    // }
    increaseQuantity= () =>{  //aerro function bind it by self
        // this.state.Qty += 1;
        // console.log(this ,this.state);
        // form 1 setState
        // this.setState({
        //     Qty: this.state.Qty + 1  // this is calles "Shellow mearging"
        // })
        // form 2 setState if previus state require the this use is best
        this.setState((prevState) =>{
            return {
                Qty :prevState.Qty +1
            }
        })
    }
    decreaseQuantity=() =>{
        const {Qty} = this.state;

        if(Qty == 0 ){
            return;
        } 
        this.setState({
            Qty: this.state.Qty - 1
        })
    }
    render (){
        const {price, title, Qty} = this.props.products;
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