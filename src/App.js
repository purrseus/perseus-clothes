import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { ReactComponent as Loading } from 'assets/icons/loading-page.svg';

import Header from 'common/Header';
import ScrollTop from 'common/ScrollTop';

const Home = React.lazy(() => import('pages/Home'));
const Products = React.lazy(() => import('pages/Products'));
const ProductsDetail = React.lazy(() => import('pages/ProductsDetail'));

function App() {
	return (
		<div className="App">
			<Suspense fallback={<Loading className="loading-page" />}>
				<Router>
					<Header />

					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/products" component={Products} />
						<Route
							exact
							path="/products/:category"
							component={ProductsDetail}
						/>
					</Switch>

					<ScrollTop />
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
