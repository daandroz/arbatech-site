import './App.css';
import Main from './Main';

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
