import React from 'react';

import HomePage from './pages/HomePage';
import BlogPost from './pages/BlogPost';
import FourOFour from './pages/404';

const routes = [
	{
		path: '/',
		component: HomePage,
		exact: true,
	},
	{
		path: '/blog',
		component: BlogPost,
		exact: true,
	},
	{
		path: '/',
		component: FourOFour,
		exact: false,
	},
];

export default routes;
