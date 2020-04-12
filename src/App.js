import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Detail from './containers/Detail';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/:currency"><Detail /></Route>
    </Switch>
  </Router>
);

function App() {
  return (
    <main>
      <AppRouter />
    </main>
  );
}

export default App;
