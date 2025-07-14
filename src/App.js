import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Preloader
import Preloader from './public/components/layouts/Preloader';
// Pages
import Home from './public/components/pages/Home';
import Hometwo from './public/components/pages/Hometwo';
import Homethree from './public/components/pages/Homethree';
import Homefour from './public/components/pages/Homefour';
import About from './public/components/pages/About';
import Account from './public/components/pages/Account';
import Blogdetail from './public/components/pages/Blogdetail';
import Bloggrid from './public/components/pages/Bloggrid';
import Bloggridsidebar from './public/components/pages/Bloggridsidebar';
import Bloglist from './public/components/pages/Bloglist';
import Cart from './public/components/pages/Cart';
import Checkout from './public/components/pages/Checkout';
import Classification from './public/components/pages/Classification';
import Comingsoon from './public/components/pages/Comingsoon';
import Contact from './public/components/pages/Contact';
import Error from './public/components/pages/Error';
import Faq from './public/components/pages/Faq';
import Gallery from './public/components/pages/Gallery';
import Gallerytwo from './public/components/pages/Gallerytwo';
import Legal from './public/components/pages/Legal';
import Login from './public/components/pages/Login';
import Register from './public/components/pages/Register';
import Shopdetail from './public/components/pages/Shopdetail';
import Shopleft from './public/components/pages/Shopleft';
import Shoplefttwo from './public/components/pages/Shoplefttwo';
import Shopright from './public/components/pages/Shopright';
import Shoprighttwo from './public/components/pages/Shoprighttwo';
import Team from './public/components/pages/Team';
import Typography from './public/components/pages/Typography';
import Wishlist from './public/components/pages/Wishlist';


function App() {
  return (
    <Router basename={'/themes/themeforest/react/laramiss'}>
      <Preloader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home-two" component={Hometwo} />
        <Route exact path="/home-three" component={Homethree} />
        <Route exact path="/home-four" component={Homefour} />
        <Route exact path="/about" component={About} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/blog-detail" component={Blogdetail} />
        <Route exact path="/blog-grid" component={Bloggrid} />
        <Route exact path="/blog-grid-sidebar" component={Bloggridsidebar} />
        <Route exact path="/blog-list" component={Bloglist} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/classification" component={Classification} />
        <Route exact path="/coming-soon" component={Comingsoon} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/gallery-two" component={Gallerytwo} />
        <Route exact path="/legal" component={Legal} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/shop-detail" component={Shopdetail} />
        <Route exact path="/shop-left" component={Shopleft} />
        <Route exact path="/shop-left-two" component={Shoplefttwo} />
        <Route exact path="/shop-right" component={Shopright} />
        <Route exact path="/shop-right-two" component={Shoprighttwo} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/typography" component={Typography} />
        <Route exact path="/wishlist" component={Wishlist} />
        <Route exact path="/error" component={Error} />
        <Route exact component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
