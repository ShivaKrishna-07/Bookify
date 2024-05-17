import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import { useFirebase } from "../context/Firebase";

const ListingPage = () => {

    const firebase = useFirebase()

    const [name, setName] = useState('');
    const [isbnNumber, setIsbnNumber] = useState('');
    const [price, setPrice] = useState('');
    const [coverPic, setCoverPic] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.handleCreateNewListing(name, isbnNumber, price, coverPic);
    }

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Book name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>ISBN Number</Form.Label>
          <Form.Control
            value={isbnNumber}
            onChange={(e) => setIsbnNumber(e.target.value)}
            type="text"
            placeholder="ISBN Number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cover Picture</Form.Label>
          <Form.Control
            onChange={(e) => setCoverPic(e.target.files[0])}
            type="file"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create List
        </Button>
      </Form>
    </div>
  );
};


export default ListingPage;