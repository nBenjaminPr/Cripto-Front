import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "../config/axios";

const PrivateRoute = (children) => {
    const [user, setUser] = useState(false)
    const getAuth = async () =>{
        try {
            const token = localStorage.getItem("token");
            if (token) return setUser (false);
            const {data} = await axios.get("/authStatus")
            setUser(data.user)
        } catch (error) {
            toast.error("ingrese nuevamente")
        }
    }

    useEffect (() => {
        getAuth();
    }, []);


    return (  
        !!user? children: <Navigate to="/login" />
    );
}

export default PrivateRoute ;