import React from 'react';
import './styles.scss';

import SkillIcon from './SkillIcon';

const SkillsSection: React.FC = () => {
	return (
		<section className='skills' id='skills'>
			<div className='wrapper'>
				<h2>
					<a href='#skills'>Skills</a>
				</h2>
				<div className='skills-container'>
					<div className='category'>
						<h3 className='title'>Frontend</h3>
						<div className='icons'>
							<SkillIcon iconName='react' title='React' />
							<SkillIcon iconName='webpack' title='Webpack' />
							<SkillIcon iconName='sass' title='Sass/Scss' />
							<SkillIcon iconName='jquery' title='JQuery' />
							<SkillIcon iconName='svelte' title='Svelte' />
						</div>
					</div>
					<div className='category'>
						<h3 className='title'>Backend</h3>
						<div className='icons'>
							<SkillIcon iconName='node' title='NodeJS' />
							<SkillIcon iconName='express' title='Express' />
							<SkillIcon iconName='mongodb' title='MongoDB' />
							<SkillIcon iconName='firebase' title='Firebase' />
						</div>
					</div>
					<div className='category'>
						<h3 className='title'>Tools</h3>
						<div className='icons'>
							<SkillIcon iconName='git' title='Git' />
							<SkillIcon iconName='github' title='Github' />
							<SkillIcon iconName='photoshop' title='Photoshop' />
							<SkillIcon
								iconName='illustrator'
								title='Illustrator'
							/>
						</div>
					</div>
				</div>
				<div className='icons misc'>
					<SkillIcon iconName='html' title='HTML5' />
					<SkillIcon iconName='css' title='CSS3' />
					<SkillIcon iconName='js' title='Javascript' />
					<SkillIcon iconName='ts' title='Typescript' />
					<SkillIcon iconName='python' title='Python' />
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
