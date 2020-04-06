import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './scrollBehaviour';

import App from '../shared/App';

render(
	<BrowserRouter>
		<Route component={App} />
	</BrowserRouter>,
	document.getElementById('root')
);
