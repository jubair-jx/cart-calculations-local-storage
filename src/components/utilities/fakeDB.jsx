const addToCart = (id) => {
  let ShoopingCart;
  let storeCart = localStorage.getItem("shopping-cart");
  if (storeCart) {
    ShoopingCart = JSON.parse(storeCart);
  } else {
    ShoopingCart = {};
  }
  const localData = ShoopingCart[id];
  if (localData) {
    const Newqunatity = localData + 1;
    ShoopingCart[id] = Newqunatity;
    // localStorage.setItem(id, Newqunatity);
  } else {
    ShoopingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(ShoopingCart));
};
export { addToCart };
