import React from 'react';

import { IconName, icons } from '../../../../icons';

interface Props {
	title: string;
	iconName: IconName;
}

const SkillIcon: React.FC<Props> = ({ title, iconName }) => {
	const icon = icons[iconName];
	return (
		<div className='icon'>
			<svg viewBox='0 0 128 128'>{icon}</svg>
			<h4>{title}</h4>
		</div>
	);
};

export default SkillIcon;
