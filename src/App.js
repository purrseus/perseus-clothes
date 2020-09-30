import React, { Suspense, useRef } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import { ReactComponent as Loading } from 'assets/icons/loading-page.svg';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';

import Header from 'common/Header';

// Lazy load
const Categories = React.lazy(() => import('pages/Categories'));
const Shop = React.lazy(() => import('pages/Shop'));
const Products = React.lazy(() => import('pages/Products'));

function App() {
	const topElement = useRef(null);

	return (
		<div className="App">
			<Suspense fallback={<Loading />}>
				<Router>
					<div className="top" ref={topElement}></div>
					<Header />

					<Switch>
						<Redirect exact path="/" to="/categories" />
						<Route exact path="/categories" component={Categories} />
						<Route exact path="/shop" component={Shop} />
						<Route exact path="/shop/:category" component={Products} />
					</Switch>

					<div
						className="scroll-to-top"
						onClick={() => {
							topElement.current.scrollIntoView({ behavior: 'smooth' });
						}}
					>
						<Arrow className="arrow-icon" />
					</div>
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
