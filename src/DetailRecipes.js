import React, { useEffect, useState } from 'react';
import './App.scss';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
// import graf from "./img/1g.jpg";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router';

function DetailRecipes() {
  let { recipeId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },

    };
    fetch('http://localhost:3001/recipes/' + recipeId, requestOptions)
      .then(response => response.json())
      .then(response =>setItems(response))

  }, []);

  let history = useHistory();
  const handleSubmit = function (e) {

    e.preventDefault();
    console.log(recipeId)


    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },

    };
    fetch('http://localhost:3001/recipes/' + recipeId, requestOptions)
      .then(history.push("/"))

  }
  return (

    <div>

      <div className="detail-page">

        <Image fluid alt="Smiley face" className="photo-bbq" />

        <div className="items-long">
          <h1> {items.title}</h1>
          <p className="short-desc">{items.decription} </p>
        </div>
      </div>

      <div className="buttons-e-d">
        <Button as={Link} to={"/edit/" + recipeId} className="edit-butt" variant="info">Buy/Sell</Button>{' '}
        <form onSubmit={handleSubmit}>

        </form>
      </div>
    </div>
  );
}

export default DetailRecipes;
