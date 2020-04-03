import React from 'react';
import './styles.scss';

export default () => {
	return (
		<>
			<header>
				<div className='header-content'>
					<span className='logo'>
						D<span className='accent'>V</span>MM
					</span>
					<nav>
						<ul>
							<li>
								<a href='/#'>Home</a>
							</li>
							<li>
								<a href='#projects'>Projects</a>
							</li>
							<li>
								<a href='#about'>About Me</a>
							</li>
							<li>
								<a href='#contact'>Contact</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};
