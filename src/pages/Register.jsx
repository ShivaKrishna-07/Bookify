import { Button, Form} from "react-bootstrap";
import { useFirebase } from "../context/Firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    if(firebase.isLoggedin){
        navigate("/")
    }
  }, [firebase, navigate])

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await firebase.signupUserWithEmailAndPassword(email, password);
  }

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={e=> setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={e=> setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create account
      </Button>
    </Form>
    </div>
  );
}

export default Register;
