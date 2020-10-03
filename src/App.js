import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import { ReactComponent as Loading } from 'assets/icons/loading-page.svg';

import NavBar from 'common/NavBar';
import ScrollToTopBtn from 'common/ScrollToTopBtn';

const Home = React.lazy(() => import('pages/Home'));
const Products = React.lazy(() => import('pages/Products'));
const ProductsDetail = React.lazy(() => import('pages/ProductsDetail'));

function App() {
	return (
		<div className="App">
			<Suspense fallback={<Loading className="loading-page" />}>
				<Router>
					<NavBar />

					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/products" component={Products} />
						<Route
							exact
							path="/products/:category"
							component={ProductsDetail}
						/>
					</Switch>

					<ScrollToTopBtn />
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
