import { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
;

import axios from "../../config/axios";


const LoginForm = () => {

    const [values, setValues] = useState({
        email:"",
        password: "",
    });

    const [BackErrors, setBackErrors] = useState ([]);


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]:e.target.name
        })
    }

    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        const { data } = await axios.post("/users/login", values);
        localStorage.setItem("token", data.token);
        navigate("/home");
      } catch (error) {
        toast.error("Ups! Hubo un error, intenta más tarde por favor");
        setBackErrors(true);
      }
    };


    useEffect (() => {
      if (BackErrors) {
        setTimeout(() => {
          setBackErrors(false);
          
        }, 3000);
      }
    }, [BackErrors]);


    return ( <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handleChange} name="email" type="email" placeholder="Enter email"  />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button  variant="primary" type="submit">
          Submit
        </Button>
        {BackErrors && ( 
        <Alert variant="danger" className="mt-3"> {" "}
            Los datos no son correctos
        </Alert>
        )}
      </Form> 
  );
}

export default LoginForm;