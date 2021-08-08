import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Topbar from './components/Topbar';
import Carousel from './components/Carousel';
import Buttons from './components/Buttons';
import Clothing from './components/Clothing';
import Accessories from './components/Accessories';
import Footer from './components/Footer';
import Product from './components/Product';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Carousel />
            <Buttons />
            <Clothing />
            <Accessories />
          </Route>
          <Route path='/product/:id'>
            <Product />
          </Route>
          <Route path='/cart'>
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
