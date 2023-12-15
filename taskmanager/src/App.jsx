// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './TaskList';
import TaskCreate from './TaskCreate';
import TaskEdit from './TaskEdit';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TaskList} />
        <Route path="/create" component={TaskCreate} />
        <Route path="/edit/:id" component={TaskEdit} />
      </Switch>
    </Router>
  );
};

export default App;
