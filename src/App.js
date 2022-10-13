import './App.css';
import Home from './views/Home/Home';
import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import { Redirect, Route, Switch } from 'react-router-dom';
import Connect from './views/Connect/Connect';
import Projects from './views/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/connect" component={Connect} />
        <Route path="/projects" component={Projects} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
