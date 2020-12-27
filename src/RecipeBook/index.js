import React from 'react';
import { NavigationBar } from './Components/NavigationBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, ShortList, Login, AddRecipe, MyAccount } from './Pages';
import './index.css';

export const RecipeBook = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Shortlist" component={ShortList} />
      <Route path="/login" component={Login} />
      <Route path="/addRecipe" component={AddRecipe} />
      <Route path="/myAccount" component={MyAccount} />
    </Switch>
  </Router>
);
