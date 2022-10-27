import './App.css';
import Home from './views/Home/Home';
import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Connect from './views/Connect/Connect';
import Projects from './views/Projects/Projects';
import About from './views/About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/connect" component={Connect} />
        <Route path="/projects" component={Projects} />
        <Route exact path="/" component={Home}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
