import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Header: React.FC = () => {
	return (
		<header>
			<div className='header-content'>
				<span className='logo'>
					<Link to='/'>
						D<span className='accent'>V</span>MM
					</Link>
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
	);
};

export default Header;
