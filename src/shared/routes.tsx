import React, { ComponentClass, FunctionComponent } from 'react';

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import FourOFour from './pages/FourOFour';

interface IRoute {
	path?: string;
	component: ComponentClass<any, any> | FunctionComponent<any>;
	exact: boolean;
}

const routes: IRoute[] = [
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
