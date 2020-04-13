import React, {useEffect, useState} from 'react';
import './App.scss';
import {Link, useParams} from 'react-router-dom';
import {useHistory} from 'react-router';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function Edit() {
  const [recipe, setRecipe] = useState({title: '', decription: '', amount: '', total: ''});
  let {recipeId} = useParams();
  const handleChange = e => {setRecipe({...recipe, [e.target.name]: e.target.value})};

  let history = useHistory();

  const onBuy = () => {
    const total = +recipe.total + +recipe.amount;

    if(isNaN(total) || total < 0) {
      return;
    }

    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...recipe, total, amount: 0}),
    };
    fetch('http://localhost:3001/recipes/' + recipeId, requestOptions)
      .then(response => response.json())
      .then(history.goBack())
  };

  const onSell = () => {
    const total = +recipe.total - +recipe.amount;

    if(isNaN(total) || total < 0) {
      return;
    }

    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...recipe, total, amount: 0}),
    };
    fetch('http://localhost:3001/recipes/' + recipeId, requestOptions)
      .then(response => response.json())
      .then(history.goBack())
  };

  useEffect(() => {
    fretchItems();
  }, []);

  const fretchItems = async () => {
    const data = await fetch('http://localhost:3001/recipes/' + recipeId);

    const recipe = await data.json();
    console.log(recipe);
    setRecipe({...recipe});
  };

  return (
    <div>
      <Container style={{paddingTop: 50, width: 900}}>
        <Form>
          <Form.Group controlId="formBasicTitle">
            <h1 align={'center'}>{recipe.title}</h1>
          </Form.Group>
          <Form.Label className="text-left">Amount:</Form.Label>
          <FormControl
            className="add-form mb-3"
            placeholder="amount"
            type="number"
            onChange={handleChange}
            name="amount"
            value={recipe.amount}
          />
          <div className="butt-ed">
            <Button onClick={onBuy} className="add-button d" variant="info">Buy</Button>
            <Button onClick={onSell} className="add-button d" variant="info">Sell</Button>
            <Button as={Link} to={'/'} className="edit-butt d" variant="dark">Back</Button>{' '}
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default Edit;
