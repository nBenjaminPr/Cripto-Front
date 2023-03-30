import { useContext, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";




const LoginForm = () => {
  const {login} = useContext(UserContext)

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
        e.preventDefault();
        login(values);
    };


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
        {false && ( 
        <Alert variant="danger" className="mt-3"> {" "}
            Los datos no son correctos
        </Alert>
        )}
      </Form> 
  );
}

export default LoginForm;