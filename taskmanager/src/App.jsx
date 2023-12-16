
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskCreate from './components/TaskCreate';
import TaskEdit from './components/TaskEdit';

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
