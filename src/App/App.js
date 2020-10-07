import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import { ReactComponent as Loading } from 'assets/icons/loading-page.svg';

import TopBar from 'common/TopBar';
import NavBar from 'common/NavBar';
import Footer from 'common/Footer';
import ScrollToTopBtn from 'common/ScrollToTopBtn';

const Categories = React.lazy(() => import('pages/Categories'));
const Home = React.lazy(() => import('pages/Home'));
const ProductsDetail = React.lazy(() => import('pages/ProductsDetail'));
const CheckOut = React.lazy(() => import('pages/CheckOut'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading className="loading-page" />}>
        <Router>
          <TopBar />
          <NavBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories" component={Categories} />
            <Route
              exact
              path="/products/:category"
              component={ProductsDetail}
            />
            <Route exact path="/check-out" component={CheckOut} />
          </Switch>

          <Footer />
          <ScrollToTopBtn />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
