import api from "./api"

export const getCartItems = () => api("GET", `cart/${JSON.parse(localStorage.getItem("loggedInUser")).uid}.json`)

export const putCartItem = data => { api("PUT", `cart/${JSON.parse(localStorage.getItem("loggedInUser")).uid}.json`, data); console.log("put", data); }