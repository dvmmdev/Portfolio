import React from 'react';
import './styles.scss';

import Header from '../../components/Header';

import { Posts } from '../../posts';
import ProjectCard from '../../components/PostCard';

export default () => {
	return (
		<>
			<Header />
			{/* <div className='wrapper'>
				<div
					className='markdown'
					dangerouslySetInnerHTML={{ __html: BlogPost.html }}
				/>
			</div> */}
			<div className='wrapper posts-container'>
				{Posts.map((post, i) => (
					<ProjectCard key={i} project={post.attributes} />
				))}
			</div>
		</>
	);
};
