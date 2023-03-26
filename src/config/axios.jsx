import axiosOrigin from "axios";

const axios = axiosOrigin.create({
    baseURL: "http://localhost:4500",
})

// axios.interceptors.response(()=> {


// })

export default axios