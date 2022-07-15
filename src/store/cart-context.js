import React from "react";

const CartContext = React.createContext({
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
    onAddItem: (item) => {},
    onRemoveItem: (id) => {},
    onRemoveWholeItem: (id) => {},
});

export default CartContext;
