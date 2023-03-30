import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";

export const UserContext = createContext();

const UserProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [autentico, setAutentico] = useState (false)
    const [loading, setLoading] = useState(true);
    const [tokens,setTokens] = useState(null)

    const navigate = useNavigate();

    const login = async (values) => {
        try {
            const { data } = await axios.post("/users/login", values); //Llama al back
            localStorage.setItem("token", data.token);
            setTokens(data.token);
            navigate("/home");
        } catch (error) {
            toast.error("Ups! Hubo un error, intenta más tarde por favor");
        }
    }

    const getAuth = async () =>{
        try {
            const token = tokens ?? localStorage.getItem("token");
            if (!token)
        {
            setLoading(false)
            return setAutentico (false);
        }
            axios.defaults.headers.common ["Autorization"] = token //Por defecto en todos los HEADERS DE TODAS LAS PETICIONES DE POST
            const {data} = await axios.get("/users/authStatus") //EL AXION.GET ES PARA LLAMAR A LA CARPETA DEL BACK
            setUser(data.user)
            setAutentico(true)
        } catch (error) {
            toast.error("ingrese nuevamente")
        }
        
        setLoading(false);
    }

    return(
        <UserContext.Provider 
        value={{
            user,
            autentico,
            loading,
            login,
            getAuth,
        }}>
            {children}
        </UserContext.Provider>
    )
} 
export default UserProvider