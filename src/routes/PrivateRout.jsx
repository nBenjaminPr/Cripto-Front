import { useContext, useEffect  } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const PrivateRoute = (children) => {
    const {getAuth, autenticidad, loading} = useContext(UserContext)

    useEffect (() => {
        getAuth();
    }, []);


    return ( loading? <Spinner/> :  
        !! autenticidad ? children : <Navigate to="/login" />
    );
}

export default PrivateRoute ;