import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import FourOFour from '../FourOFour';

import { findPost } from '../../posts';

interface Props {
	location: {
		pathname: string;
	};
}

const BlogPost: React.FC<Props> = ({ location: { pathname } }) => {
	const [permalink, setPermalink] = useState(pathname);
	const [post, setPost] = useState(undefined); //TODO: Post type

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

export default BlogPost;
