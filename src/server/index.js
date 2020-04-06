import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import express from 'express';
import { readFileSync } from 'fs';
import path from 'path';

import App from '../shared/App';

const index = readFileSync(path.join(__dirname, 'index.html')).toString();

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
	const html = renderToString(
		<StaticRouter location={req.url}>
			<Route component={App} />
		</StaticRouter>
	);
	res.send(index.replace('<!-- ::APP:: -->', html));
});

app.listen(31199, () => {
	console.log('Server listening on port 31199!');
});
