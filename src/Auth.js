import React, {useState} from 'react';
import {Container, Form} from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import users from './users';

const Auth = () => {
  const [user, setUser] = useState({email: '', password: ''});

  const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('hell');
    if (users.find(u => u.email === user.email && u.password === user.password)) {
      localStorage.setItem('email', user.email);
      localStorage.setItem('password', user.password);
      window.location.reload();
    }
  };

  return (
    <Container style={{paddingTop: 50}}>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicTitle">
          <h1 align={'center'}>Authorize</h1>
        </Form.Group>
        <Form.Label className="text-left">Email</Form.Label>
        <FormControl
          className="add-form mb-3"
          placeholder="email"
          type="email"
          onChange={handleChange}
          name="email"
          value={user.email}
        />
        <Form.Label className="text-left">Password</Form.Label>
        <FormControl
          className="add-form mb-3"
          placeholder="password"
          type="password"
          onChange={handleChange}
          name="password"
          value={user.password}
        />
        <div className="butt-ed">
          <Button type="submit" className="add-button d" variant="info">Submit</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Auth;
