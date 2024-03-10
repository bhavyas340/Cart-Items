import React from "react";

const Navbar = (props) => {
  // this is the way you can write functional Componant

  return (
    <div style={styles.nav}>
      <h3 style={styles.h3}>Cart Site</h3>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://www.seekpng.com/png/detail/134-1344280_add-items-to-cart-minimalist-shopping-cart.png"
          alt="cart-icon"
        />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
};

const styles = {
  h3: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "10px",
    flot: "left",
    rotateDirection: "30deg",
  },
  cartIcon: {
    height: 32,
    marginRight: 20,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "flex-start",
  },
  nav: {
    height: 60,
    background: "#c5edb3",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    backgroundColor: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};
export default Navbar;
