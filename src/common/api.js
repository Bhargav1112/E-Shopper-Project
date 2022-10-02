import axios from "axios"

const api = (method = "GET", url, data = {}) => {
  const instance = axios.create({
    baseURL: "https://e-commerse-caba6-default-rtdb.firebaseio.com/"
  })

  return instance.request({
    method,
    url,
    data
  })
}

export default api;