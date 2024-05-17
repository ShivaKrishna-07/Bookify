import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

function BookCard(props) {

    const firebase = useFirebase();
    const navigate = useNavigate();
    const [url, setUrl] = useState('');

  useEffect(() => {
    firebase.getImageURL(props.imageURL).then(url=>setUrl(url));
  }, []);

  return (
    <Card style={{ width: '20rem', margin: '25px' }}>
      <Card.Img style={{height: 170}} variant="top" src={url} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          This book has title {props.name} and this book is sold by {props.displayName} and this book cost Rs.{props.price}
        </Card.Text>
        <Button onClick={()=> navigate(`book/view/${props.id}`)} variant="primary">View</Button>
      </Card.Body>
    </Card>
  )
}

export default BookCard