import axiosOrigin from "axios";

const axios = axiosOrigin.create({
    baseURL: "http://localhost:4500",
})

export default axios