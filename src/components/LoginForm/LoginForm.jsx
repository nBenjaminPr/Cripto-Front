import { useState } from "react";
import { Button, Form } from "react-bootstrap";


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


    return ( <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handleChange} name="email" type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> );
}
 
export default LoginForm;