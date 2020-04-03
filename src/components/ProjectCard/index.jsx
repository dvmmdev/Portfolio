import React, { useState } from 'react';
import './styles.scss';

export default ({ project: { title, desc, tags, imgs, links } }) => {
	const [currentThumb, setCurrentThumb] = useState(0);

	const currentImg =
		imgs.length > 0 && imgs.length > currentThumb && imgs[currentThumb];

	return (
		<div className='project-card'>
			<div className='thumb'>
				<a href={currentImg.link}>
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
						<a
							href={link.href}
							className={`button ${link.buttonClass}`}
							target={link.target}
							key={i}
						>
							{link.title}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};
