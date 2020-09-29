import React, { Suspense } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import { ReactComponent as Loading } from 'assets/icons/loading-page.svg';
import Header from 'common/Header';

// Lazy load
const Categories = React.lazy(() => import('pages/Categories'));

function App() {
	return (
		<div className="App">
			<Suspense fallback={<Loading />}>
				<Router>
					<Header />

					<Switch>
						<Redirect exact path="/" to="/categories" />
						<Route exact path="/categories" component={Categories} />
					</Switch>
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
