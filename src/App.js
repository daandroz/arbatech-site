import './App.css';
import Main from './Main';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
<HashRouter>
  <App />
</HashRouter>

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={<Main />} />
      </Switch>
    </Router>
  );
}

export default App;
