import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './layouts/RouteWithLayout';
import MainLayout from './layouts/Main';

import Home from './routes/Home';
import Board from './routes/Board';
import NotFoundPage from './routes/NotFoundPage';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect
          exact
          from="/"
          to="/home"
        />
        <RouteWithLayout
          path="/home"
          layout={ MainLayout }
          component={ Home }
        />
        <RouteWithLayout
          path="/board"
          layout={ MainLayout }
          component={ Board }
        />
        <RouteWithLayout
          path="/not-found"
          layout={ MainLayout }
          component={ NotFoundPage }
        />
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
}

export default App;