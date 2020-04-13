import React, {useEffect, useState} from 'react';
import './App.scss';
import {Link} from 'react-router-dom';
import bbq from './img/bbq.jpg';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const currencyImage = 'data:image/png;base64,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';
function Recipes() {
  const [items, setItems] = useState([]);

  const [searchInput, setSearchInput] = useState(localStorage.getItem('searchInput') || '');
  const handleChange = function (e) {
    setSearchInput(e.target.value);
    localStorage.setItem('searchInput', e.target.value);
  };

  const refresh = function () {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    };
    fetch('http://localhost:3001/recipes', requestOptions)
      .then(response => response.json())
      .then(response => setItems(response))

  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="recipes-body">
      <Container>
        <h1 className="q">Recipes Page</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Find your crypto"
            aria-label="Recipient's "
            aria-describedby="basic-addon2"
            onChange={
              handleChange
            }
            value={searchInput}
          />

        </InputGroup>
      </Container>

      <div style={{margin: 'auto auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {items.filter(el => (el.title.toLowerCase().includes(searchInput.toLowerCase()))).map(item => (
          <div style={{display: 'flex', 'flexDirection': 'row', alignItems: 'center'}}>

            <div key={item.id}>
              <div className="items-and-photo">

                <Image fluid src={currencyImage} alt="Smiley face" className="photo-bbq"/>

                <div className="items">
                  <h1> {item.title}</h1>
                  <p className="short-desc">{item.total.toFixed(10)} </p>
                </div>
              </div>
            </div>

            <div className="main-buttons">
              <div className="buttons-e-d">
                <Button as={Link} to={'/edit/' + item.id} className="f n edit-butt" variant="info">Buy/Sell</Button>{' '}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
