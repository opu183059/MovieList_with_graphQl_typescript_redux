const getShoppingCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
};

const removeFromDb = (id: string | number) => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem("cart", JSON.stringify(shoppingCart));
    }
};

const addToDb = (id: string | number) => {
    const shoppingCart = getShoppingCart();
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    } else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem("cart", JSON.stringify(shoppingCart));
};

export { addToDb, getShoppingCart, removeFromDb };
