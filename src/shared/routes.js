import React from 'react';

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import FourOFour from './pages/FourOFour';

const routes = [
	{
		path: '/',
		component: HomePage,
		exact: true,
	},
	{
		path: '/blog',
		component: BlogPage,
		exact: true,
	},
	{
		path: '/articles/:year/:month/:day/:slug',
		component: BlogPost,
		exact: true,
	},
	{
		component: FourOFour,
		exact: false,
	},
];

export default routes;
