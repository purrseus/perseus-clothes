import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { googleAuth } from 'redux/reducers/authSlice';
import { config } from 'services/firebase.config';

import './App.scss';
import { ReactComponent as Loading } from 'assets/icons/loading-page.svg';

import TopBar from 'common/TopBar';
import NavBar from 'common/NavBar';
import Footer from 'common/Footer';
import ScrollToTopBtn from 'common/ScrollToTopBtn';
import NotFound from 'pages/NotFound';

const Home = React.lazy(() => import('pages/Home'));
const Categories = React.lazy(() => import('pages/Categories'));
const ProductsDetails = React.lazy(() => import('pages/ProductsDetails'));
const CheckOut = React.lazy(() => import('pages/CheckOut'));
const Search = React.lazy(() => import('pages/Search'));
const Auth = React.lazy(() => import('pages/Auth'));

firebase.initializeApp(config);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => {
        if (!!user) dispatch(googleAuth({ user: user.displayName }))
      });

    return () => unregisterAuthObserver();
  }, [dispatch]);

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
              component={ProductsDetails}
            />
            <Route exact path="/check-out" component={CheckOut} />
            <Route exact path="/search/:name" component={Search} />
            <Route exact path="/sign-in" component={Auth} />
            <Route component={NotFound} />
          </Switch>

          <Footer />
          <ScrollToTopBtn />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
