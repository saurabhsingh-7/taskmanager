import CreationPage from "./Components/CreationPage"
import TaskListing from "./Components/TaskListing"
import {Switch,Route,Redirect} from 'react-router-dom'
import './styles.css'

function App() {
  
  return (
    <>
      <h1>Task Manager</h1>
      <Switch>
        <Route exact path="/">
          <TaskListing/>
        </Route>
        <Route path='/create'>
          <CreationPage />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  )
}

export default App
