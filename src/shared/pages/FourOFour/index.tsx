import React from 'react';
import './styles.scss';

import FourOFourContent from './404.md';

const FourOFour: React.FC = () => {
	return (
		<div
			className='wrapper'
			dangerouslySetInnerHTML={{ __html: FourOFourContent.html }}
		></div>
	);
};

export default FourOFour;
