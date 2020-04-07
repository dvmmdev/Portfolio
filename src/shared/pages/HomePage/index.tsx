import React from 'react';
import './styles.scss';

import AboutMe from './AboutMeSection';
import Skills from './SkillsSection';

import ProjectCard from '../../components/PostCard';
import ContactForm from '../../components/ContactForm';

import { Projects } from '../../posts';

const HomePage: React.FC = () => {
	return (
		<div>
			<div className='landing'>
				<div className='hero'>
					<div className='wrapper'>
						<h1>
							I build apps from back to front.
							<span className='subtitle'>
								Full stack web development.
							</span>
						</h1>
					</div>
				</div>
				<div className='cta'>
					<a href='#projects' className='button hollow'>
						View Projects
					</a>
					<div className='links'></div>
				</div>
			</div>
			<section className='projects' id='projects'>
				<div className='wrapper'>
					<h2>
						<a href='#projects'>Projects</a>
					</h2>
					<div className='projects-container'>
						{Projects.map((project, i) => (
							<ProjectCard
								post={project}
								key={i + Math.random()}
							/>
						))}
					</div>
				</div>
			</section>
			<AboutMe />
			<Skills />
			<section className='contact' id='contact'>
				<div className='wrapper'>
					<h2>
						<a href='#contact'>Contact</a>
					</h2>
					<ContactForm />
				</div>
			</section>
		</div>
	);
};

export default HomePage;
