import React from 'react';
import './App.scss';

import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
	const location = useLocation();
	return (
		<div className='App'>
			<Header />
			<TransitionGroup className='page-transition-group'>
				<CSSTransition
					key={location.pathname}
					timeout={500}
					classNames='fade'
				>
					<Switch location={location}>
						{routes.map((route, i) => (
							<Route key={i} {...route}></Route>
						))}
					</Switch>
				</CSSTransition>
			</TransitionGroup>
			<Footer />
		</div>
	);
};

export default App;
