import api from "./api"

export const getCartItems = () => api("GET", "cart.json")

export const putCartItem = data => api("PUT", `cart.json`, data)