import React from 'react';
import Cart  from './cart';
import Navbar from './Navbar';
// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { doc, Firestore } from 'firebase/firestore';

class App extends React.Component {
  constructor (){
    // boz itis a java script thing we have to call the "super()" as a constructor of parent class that is "React.Component"
    super();
    this.state = { // this.state is a object
        products:[
        //     {
        //     price: 39999,
        //     title: 'Watch',
        //     Qty: 3,
        //     img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQEE3_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-ocean-ultra_VW_34FR_WF_CO_GEO_IN?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1661191675613%2C1660927566964%2C1661372043826',
        //     id: 1
        // },
        // {
        //     price: 79999,
        //     title: 'iPhone',
        //     Qty: 1,
        //     img: 'https://www.sunrise.ch/en/residential/geraete/handys/apple-iphone-14-plus.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIzMDc4.format-hardware-configurator-l.png',
        //     id: 2
        // },
        // {
        //     price: 119990,
        //     title: 'Mac',
        //     Qty: 1,
        //     img: 'https://images.macrumors.com/t/k2uQkkz6aPOLMDkWVTn-8tXXg2g=/1600x1200/smart/article-new/2022/02/13-inch-macbook-pro-m2-mock-feature-2.jpg',
        //     id: 3
        // }

        ],
        loading: true,
        user:[]   
    }
    this.db= firebase.firestore();
    // this.testing();
    // other was to use it by using .bind(this);
    // this.increaseQuantity = this.increaseQuantity.bind(this)
}

//
componentDidMount (){
  // firebase
  // .firestore()
  // .collection('products')
  // .get()
  // .then((snapshot) => {
  //   console.log(snapshot);

  //   snapshot.docs.map((doc) =>{
  //     console.log(doc.data())
  //   })
  //   const products =snapshot.docs.map((doc)=>{
  //     const data = doc.data();

  //     data['id'] = doc.id;
  //     return data;    //give object
  //   })

  //   this.setState({
  //     products,
  //     loading:false
  //   })
  // })
  // to make update while firebase database update(Same time)
  this.db
  .collection('products')
  .onSnapshot((snapshot) => {           // using this onSnapshot function this is possible real time update on sever while firebase update
    console.log(snapshot);

    snapshot.docs.map((doc) =>{
      console.log(doc.data())
    })
    const products =snapshot.docs.map((doc)=>{
      const data = doc.data();

      data['id'] = doc.id;
      return data;    //give object
    })

    this.setState({
      products,
      loading:false
    })
  })
}
handleIncreaseQuantity = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);

    // products[index].Qty += 1;
    // this.setState({
    //     products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        Qty:products[index].Qty+1
      })
      .then(() =>{
        console.log('Updated Successfully')
      })
      .catch((error) =>{
        console.log("Error: ", error)
      })

}
handleDecreaseQuantity = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].Qty === 0){
        return;
    }

    // products[index].Qty -= 1;
    // this.setState({
    //     products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
       .update({
        Qty:products[index].Qty-1
       })
       .then(()=>{
        console.log("Successfully decrease Qty");
      }).catch((error)=>{
        console.log("Error: ", error);
      })
}
handleDeleteProduct = (id) => {
  const { products } = this.state;

  // const items = products.filter((item) => item.id !== id); // [{}]

  // this.setState({
  //   products: items
  // })
  const docRef = this.db.collection('products').doc(id);

  docRef
  .delete()
  .then(()=>{
    console.log("delete Successfully");
  }).catch((error)=>{
    console.log("Error: ", error);
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
    if(product.Qty >0){
    cartTotal = cartTotal+ product.Qty*product.price
    }
    return '';
   })
   return cartTotal;
}
addProduct=()=>{
  this.db
  .collection('products')
  .add({
    img:'',
    price: 900,
    Qty: 2,
    title: "Washing machine",
  })
  .then((docRef)=>{     //docRef is a objects of add(ing,price,Qty etc.)
    console.log('product have been added',docRef);
  })
  .catch((error)=>{
    console.log("Error" ,error);
  })
}
render () {
  const { products, loading } = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <button onClick={this.addProduct} style={{padding:10 ,fontSize:20}}>Add a product</button>
      <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onhandleDeleteProduct={this.handleDeleteProduct}
      />
      {loading && <><img src='https://boldist.co/wp-content/uploads/2021/04/Loading-Spinners-are-UX-Killers.gif' style={styles.img}></img><h1>Loading products ...</h1></>}
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
  },
  img:{
    width:1700,
    height:800
  }
}

export default App;
