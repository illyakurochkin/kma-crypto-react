import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Recipes from './Recipes';
import Add from './Add';
import Edit from './Edit';
import DetailRecipes from './DetailRecipes';
import Nav from './Nav';
import Auth from './Auth';
import users from './users';

function App() {
  const loginedRoutes = () => (
    <Switch>
      <Route path="/crypto/:recipeId" exact component={DetailRecipes}/>
      <Route path="/add" exact component={Add}/>
      <Route path="/edit/:recipeId" component={Edit}/>
      <Route path="*" exact component={Recipes}/>
    </Switch>
  );

  const notLoginedRoutes = () => (
    <Switch>
      <Route path="/auth" exact component={Auth} />
      <Route path="*" exact component={Auth} />
    </Switch>
  );

  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');

  const routes = (users.find(u => u.email === email && u.password === password)) ? loginedRoutes() : notLoginedRoutes();

  return (
    <Router>
      <div className="App">
        <Nav/>
        {routes}
      </div>
    </Router>
  );
}

export default App;
