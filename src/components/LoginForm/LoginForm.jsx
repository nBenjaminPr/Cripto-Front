import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
;

import axios from "../../config/axios";


const LoginForm = () => {

    const [values, setVaules] = useState({
        email:"",
        password: ""
    })

    const handleChange = (e) => {
        setVaules({
            ...values,
            [e.target.name]:e.target.name
        })
    }

    const handleSumit = async(e) =>{
        try {
            e.prevenDefault();   
        const {data} = await axios.post("/users/login")  
        
        console.log(data);
        } catch (error) {
            toast.error ("Hubo un error");
        }
    }


    return ( <Form  onSubmit={handleSumit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={values.email} onChange={handleChange} name="email" type="email" placeholder="Enter email"  />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={values.password} name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button  variant="primary" type="submit">
          Submit
        </Button>
      </Form> );
}
 
export default LoginForm;