const addToCart = (id) => {
  const localData = localStorage.getItem(id);

  if (localData) {
    console.log("Already Add");
    const Newqunatity = parseInt(localData) + 1;
    localStorage.setItem(id, Newqunatity);
  } else {
    localStorage.setItem(id, 1);
  }
};
export { addToCart };
