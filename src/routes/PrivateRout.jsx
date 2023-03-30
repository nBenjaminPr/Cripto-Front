import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../config/axios";

const PrivateRoute = (children) => {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);
    const getAuth = async () =>{
        try {
            const token = localStorage.getItem("token");
            if (!token)
        {
            setLoading(false)
            return setUser (false);
        }
            axios.defaults.headers.common ["Autorization"] = token //Por defecto en todos los HEADERS DE TODAS LAS PETICIONES DE POST
            const {data} = await axios.get("/users/authStatus") //EL AXION.GET ES PARA LLAMAR A LA CARPETA DEL BACK
            setUser(data.user)
        } catch (error) {
            toast.error("ingrese nuevamente")
        }
        
        setLoading(false);
    }

    useEffect (() => {
        getAuth();
    }, []);


    return ( loading? <Spinner/> :  
        !! user ? children : <Navigate to="/login" />
    );
}

export default PrivateRoute ;