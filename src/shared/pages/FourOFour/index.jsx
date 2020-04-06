import React from 'react';
import './styles.scss';

import FourOFourContent from './404.md';

export default () => {
	return (
		<div
			className='wrapper'
			dangerouslySetInnerHTML={{ __html: FourOFourContent.html }}
		></div>
	);
};
