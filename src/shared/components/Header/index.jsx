import React from 'react';
import { Link } from 'react-router-dom';

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
								<Link to='/#'>Home</Link>
							</li>
							<li>
								<Link to='/#projects'>Projects</Link>
							</li>
							<li>
								<Link to='/#about'>About Me</Link>
							</li>
							<li>
								<Link to='/#contact'>Contact</Link>
							</li>
							<li>
								<Link to='/blog'>Blog</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};
