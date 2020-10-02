import React from 'react';
import './Home.scss';
import Category from 'components/Home/Category';

const Home = () => {
	return (
		<div>
			<div className="home">
				<Category />
			</div>
		</div>
	);
};

export default Home;
