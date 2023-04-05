import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

// if cart date is in database, you have to use async await

const storedCart = getShoppingCart();

const saveCart = [];

  console.log(storedCart);
  
  for(const id in storedCart){
    const addedProduct = products.find(pd => pd.id === id);
    if(addedProduct){
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      saveCart.push(addedProduct)

    }
  }
  // if you need to send two things
  // return [products, saveCart]
  // another option
  // return{products, cart: saveCart}

  return saveCart;
};

export default cartProductsLoader;
