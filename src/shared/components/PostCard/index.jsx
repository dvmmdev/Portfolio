import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles.scss';

export default ({ post: { title, desc, tags, imgs, links, permalink } }) => {
	const [currentThumb, setCurrentThumb] = useState(0);

	const currentImg =
		imgs.length > 0 && imgs.length > currentThumb && imgs[currentThumb];

	return (
		<div className='project-card'>
			<div className='thumb'>
				<a
					href={
						currentImg.link === '[permalink]'
							? permalink
							: currentImg.link
					}
				>
					{currentImg && (
						<img src={currentImg.source} alt={currentImg.alt} />
					)}
				</a>
			</div>
			<div className='info'>
				<p className='tags'>
					{tags.map((tag, i) => (
						<span key={i}>
							{i !== 0 && ', '}
							{tag}
						</span>
					))}
				</p>
				<h3>{title}</h3>
				<p className='desc'>{desc}</p>
				<div className='links'>
					{links.map((link, i) => (
						<Link
							to={
								link.href === '[permalink]'
									? permalink
									: link.href
							}
							className={`button ${link.buttonClass}`}
							target={link.target}
							key={i}
						>
							{link.title}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
