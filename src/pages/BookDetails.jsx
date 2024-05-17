import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

export default function BookDetails() {
  const firebase = useFirebase();
  const params = useParams();

  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    firebase
      .getBookById(params.bookId)
      .then((value) => setData(value.data()))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (data) {
      firebase.getImageURL(data.imageURL).then((url) => setUrl(url));
    }
  }, [data]);

  if (data == null) return <h1>Loading...</h1>;

  return (
    <div className="container mt-15">
      <h1>{data.name}</h1>
      <img src={url} style={{borderRadius: 15}} alt="img" />
      <h1>Details</h1>
      <p>Price: Rs.{data.price}</p>
      <p>ISBN No: {data.isbn}</p>
      <h1>Owner Details</h1>
      <p>Name: {data.displayName}</p>
      <p>Email: {data.userEmail}</p>
    </div>
  );
}
