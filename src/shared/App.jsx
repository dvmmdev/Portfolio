import React from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';

import routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

export default () => {
	console.log(routes);
	return (
		<div className='App'>
			<Header />
			<Switch>
				{routes.map((route, i) => (
					<Route key={i} {...route}></Route>
				))}
			</Switch>
			<Footer />
		</div>
	);
};
