import axiosOrigin from "axios";

const axios = axiosOrigin.create({
    baseURL: "http://localhost:4500",
})

// axios.interceptors.request((config)=> {
//     const token = localStorage.getItem("token");

//     if(token) config.headers.authorization = tokenM
//     return config
// },  
//     (error) => {
//         return Promise.reject(error)
//     }

// )

// axios.interceptors.response(null, (error) => {
//     const{status} = error.response
//     switch(status){
//         case "404": navigate("/404"); break;
//         case "401": navigate("/login"); break;
//         case "403": navigate("/home");
//     }
// })


export default axios