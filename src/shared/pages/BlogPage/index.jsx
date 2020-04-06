import React from 'react';
import './styles.scss';

import { Posts } from '../../posts';
import ProjectCard from '../../components/PostCard';

export default () => {
	return (
		<div className='wrapper posts-container'>
			{Posts.map((post, i) => (
				<ProjectCard key={i} post={post} />
			))}
		</div>
	);
};
