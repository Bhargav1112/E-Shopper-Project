import api from "./api"

export const postCartItem = data => api("POST", "cart.json", data)

export const getCartItems = () => api("GET", "cart.json")

export const putCartItem = data => api("PUT", `cart.json/${data.id}`, data)

export const deleteCartItem = id => api("DELETE", `cart.json/${id}`)