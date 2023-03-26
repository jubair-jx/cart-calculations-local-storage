const addToCart = (id) => {
  const localData = localStorage.getItem(id);

  if (localData) {
    let ShoopingCart = {};
    localStorage.setItem("shopping-cart", JSON.stringify(ShoopingCart));

    const Newqunatity = parseInt(localData) + 1;
    localStorage.setItem(id, Newqunatity);
  } else {
    localStorage.setItem(id, 1);
  }
};
export { addToCart };
