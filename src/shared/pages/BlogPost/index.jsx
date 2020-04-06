import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import FourOFour from '../FourOFour';

import { findPost } from '../../posts';

export default ({ location: { pathname } }) => {
	const [permalink, setPermalink] = useState(pathname);
	const [post, setPost] = useState(undefined);

	useEffect(() => {
		setPost(findPost(permalink));
	}, [permalink]);

	return post ? (
		<div className='wrapper'>
			<div
				className='markdown'
				dangerouslySetInnerHTML={{ __html: post.html }}
			/>
		</div>
	) : (
		<FourOFour />
	);
};
