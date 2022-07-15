import { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
};

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalPrice =
            state.totalPrice + action.item.quantity * action.item.price;
        const updatedTotalQuantity = state.totalQuantity + action.item.quantity;

        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingItem = state.items[existingItemIndex];
        let updatedItems;

        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            };
            updatedItem.totalAmount = updatedItem.quantity * updatedItem.price;
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat({
                ...action.item,
                totalAmount: action.item.quantity * action.item.price,
            });
        }

        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice,
            totalQuantity: updatedTotalQuantity,
        };
    }

    if (action.type === "REMOVE") {
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingItemIndex];
        const updatedTotalPrice = state.totalPrice - existingItem.price;
        const updatedTotalQuantity = state.totalQuantity - 1;

        let updatedItems;
        if (existingItem.quantity === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1,
            };
            updatedItem.totalAmount =
                updatedItem.totalAmount - updatedItem.price;
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice,
            totalQuantity: updatedTotalQuantity,
        };
    }

    if (action.type === "REMOVE_ITEM") {
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingItemIndex];
        const updatedTotalPrice = state.totalPrice - existingItem.totalAmount;
        const updatedTotalQuantity =
            state.totalQuantity - existingItem.quantity;
        const updatedItems = state.items.filter(
            (item) => item.id !== action.id
        );
        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice,
            totalQuantity: updatedTotalQuantity,
        };
    }

    return initialCartState;
};

const CartContextProvider = (props) => {
    const [cart, dispatch] = useReducer(cartReducer, initialCartState);

    const addToCartHandler = (item) => {
        dispatch({ type: "ADD", item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatch({ type: "REMOVE", id });
    };

    const removeWholeItemFromCartHandler = (id) => {
        dispatch({ type: "REMOVE_ITEM", id });
    };

    const contextValue = {
        items: cart.items,
        totalPrice: cart.totalPrice,
        totalQuantity: cart.totalQuantity,
        onAddItem: addToCartHandler,
        onRemoveItem: removeItemFromCartHandler,
        onRemoveWholeItem: removeWholeItemFromCartHandler,
    };
    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
