import './App.scss';
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import NoFound from "./pages/NoFound";
import Shop from "./pages/shop/Shop";
import SingleProduct from "./components/single-product/SingleProduct";
import CartPage from "./pages/cart-pages/CartPage";
import Checkout from "./components/checkout/Checkout";
import Success from "./components/checkout/stripe-checkout/Success";
import Canceled from "./components/checkout/stripe-checkout/Canceled";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path='/shop' component={Shop} />
            <Route path='/product/:id' component={SingleProduct} />
            <Route path="/cart" component={CartPage} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/success" component={Success}/>
            <Route path="/canceled" component={Canceled} />
            <Route path='*' component={NoFound} />
        </Switch>
    </div>
  );
}

export default App;
