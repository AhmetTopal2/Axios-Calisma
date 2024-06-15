import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Products from './pages/Products';
import Basket from './pages/Basket';
import { useState } from 'react';

function App() {
  const [basket, setBasket] = useState([]);
  const [products, setProduct] = useState([])
  return (
    <>
      <Header basket={basket} products={products} />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/products'>
          <Products basket={basket} setBasket={setBasket} products={products} setProduct={setProduct} />
        </Route>
        <Route path='/basket'>
          <Basket items={basket} setBasket={setBasket} />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
