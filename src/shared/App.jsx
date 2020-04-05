import React from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';

import routes from './routes';

import Footer from './components/Footer';

export default () => {
	return (
		<div className='App'>
			<Switch>
				{routes.map((route, i) => (
					<Route key={i} {...route}></Route>
				))}
			</Switch>
			<Footer />
		</div>
	);
};
