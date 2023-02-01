import React from 'react';
import Cart  from './cart';
import Navbar from './Navbar'

class App extends React.Component {
  constructor (){
    // boz itis a java script thing we have to call the "super()" as a constructor of parent class that is "React.Component"
    super();
    this.state = { // this.state is a object
        products:[
            {
            price: 39999,
            title: 'Watch',
            Qty: 3,
            img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQEE3_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-ocean-ultra_VW_34FR_WF_CO_GEO_IN?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1661191675613%2C1660927566964%2C1661372043826',
            id: 1
        },
        {
            price: 79999,
            title: 'iPhone',
            Qty: 1,
            img: 'https://www.sunrise.ch/en/residential/geraete/handys/apple-iphone-14-plus.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIzMDc4.format-hardware-configurator-l.png',
            id: 2
        },
        {
            price: 119990,
            title: 'Mac',
            Qty: 1,
            img: 'https://images.macrumors.com/t/k2uQkkz6aPOLMDkWVTn-8tXXg2g=/1600x1200/smart/article-new/2022/02/13-inch-macbook-pro-m2-mock-feature-2.jpg',
            id: 3
        }

        ]
        
    }
    // this.testing();
    // other was to use it by using .bind(this);
    // this.increaseQuantity = this.increaseQuantity.bind(this)
}
handleIncreaseQuantity = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].Qty += 1;
    this.setState({
        products
    })
}
handleDecreaseQuantity = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].Qty === 0){
        return;
    }

    products[index].Qty -= 1;
    this.setState({
        products
    })
}
handleDeleteProduct = (id) => {
  const { products } = this.state;

  const items = products.filter((item) => item.id !== id); // [{}]

  this.setState({
    products: items
  })
}


getCartCount = () =>{
  const { products} = this.state;
  let count =0 ;
   products.forEach((product)=>{
    count += product.Qty;
   })
   return count;
}
getCartTotal = () =>{
  const {products} = this.state;
   let cartTotal = 0;
   products.map((product) =>{
    cartTotal = cartTotal+ product.Qty*product.price
   })
   return cartTotal;
}
render () {
  const { products } = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onhandleDeleteProduct={this.handleDeleteProduct}
      />
      <div style={styles.div}><strong>TOTAL: { this.getCartTotal()}</strong></div>
    </div>
  );
}
}
const styles ={
  div:{
    padding:10,
    fontSize:20,
    
    fontFamily: 'sans-serif',
    color:'white',
    backgroundColor: '#e9a982',
    height: 50,
    display:'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
}

export default App;
