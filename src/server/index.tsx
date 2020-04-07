import * as functions from 'firebase-functions';
import firebase from 'firebase-admin';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { readFileSync } from 'fs';
import path from 'path';

import App from '../shared/App';

firebase.initializeApp(functions.config().firebase);

const index = readFileSync(path.join(__dirname, '../index.html')).toString();

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('**', (req, res) => {
	const html = renderToString(
		<StaticRouter location={req.url}>
			<App />
		</StaticRouter>
	);
	res.send(index.replace('<!-- ::APP:: -->', html));
});

export let ssrapp = functions.https.onRequest(app);
