import * as ActionType from "../actionTypes"

const initialState = {
  items: [],
  totalQty: 0,
  totalPrice: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_CART_ITEM:
      return {
        ...state,
        items: state.items.find(item => item.id === action.payload.id) ? state.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              qty: +item.qty + 1,
              subTotal: +item.subTotal + +item.price
            }
          } else {
            return item
          }
        }) : state.items.concat(action.payload),
        totalQty: state.totalQty + +action.payload.qty,
        totalPrice: state.totalPrice + +action.payload.price
      }
    case ActionType.REMOVE_CART_ITEM:
      return {
        ...state,
        items: state.items.find(item => item.id === action.payload.id).qty !== 1 ? state.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              qty: item.qty - 1,
              subTotal: item.subTotal - item.price
            }
          } else {
            return item
          }
        }) : state.items.filter(item => item.id !== action.payload.id),
        totalPrice: state.totalPrice - action.payload.price,
        totalQty: state.totalQty - 1
      }
    case ActionType.DELETE_CART_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        totalQty: state.totalQty - action.payload.qty,
        totalPrice: state.totalPrice - action.payload.subTotal
      }
    default:
      return state
  }
}

export default cartReducer;