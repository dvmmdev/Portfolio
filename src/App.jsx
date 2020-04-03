import React, { useEffect } from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';

import projects from './projects';

export default () => {
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	function handleScroll(e) {
		const body = document.querySelector('body');
		body.style.setProperty('--scrollY', window.scrollY);
		body.style.setProperty(
			'--scrollY-percent',
			window.scrollY / window.innerHeight
		);
	}

	return (
		<div className='App'>
			<div className='landing'>
				<Header />
				<div className='hero'>
					<div className='wrapper'>
						<h2>
							I build apps from back to front.
							<span className='subtitle'>
								Full stack web development.
							</span>
						</h2>
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
					<div className='content projects-container'>
						{projects.map((project, i) => (
							<ProjectCard
								project={project}
								key={i + Math.random()}
							/>
						))}
					</div>
				</div>
			</section>
			<section className='about' id='about'>
				<div className='wrapper'>
					<h2>
						<a href='#about'>About Me</a>
					</h2>
					<div className='content about-container'>
						<div>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Vivamus sed scelerisque dolor,
								in maximus tellus. In ex orci, sagittis ut
								imperdiet fringilla, tincidunt a dolor. Aliquam
								erat volutpat. Aenean in tincidunt leo, at
								commodo sem. Etiam suscipit fringilla nibh eu
								tempor.
							</p>
							<p>
								Maecenas eros nisi, rhoncus ut hendrerit vitae,
								vestibulum viverra massa. Pellentesque hendrerit
								luctus diam vitae facilisis. Cras tempor velit
								non odio finibus lacinia. Nulla malesuada magna
								sodales porta venenatis. Proin quis varius
								lacus. Suspendisse eget ultrices odio. Ut nec
								laoreet sapien.
							</p>
							<p>
								Aenean varius sagittis tellus sed sollicitudin.
								In nec lectus vitae est imperdiet interdum non
								quis lectus.
							</p>
						</div>
						<div className='illustration'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='500.29'
								height='504.886'
								viewBox='0 0 500.29 504.886'
							>
								<g
									id='Group_32'
									data-name='Group 32'
									transform='translate(-109.9 -43)'
								>
									<g
										id='Background'
										transform='translate(109.9 43)'
									>
										<rect
											id='Rectangle_32'
											data-name='Rectangle 32'
											width='460.38'
											height='453.8'
											fill='#f3f3f3'
										/>
										<rect
											id='Rectangle_33'
											data-name='Rectangle 33'
											width='460.38'
											height='34.543'
											fill='#e1e1e1'
										/>
										<circle
											id='Ellipse_2'
											data-name='Ellipse 2'
											cx='5.441'
											cy='5.441'
											r='5.441'
											transform='translate(18.853 12.273)'
											fill='#009f93'
										/>
										<circle
											id='Ellipse_3'
											data-name='Ellipse 3'
											cx='5.441'
											cy='5.441'
											r='5.441'
											transform='translate(36.377 12.273)'
											fill='#009f93'
										/>
										<circle
											id='Ellipse_4'
											data-name='Ellipse 4'
											cx='5.441'
											cy='5.441'
											r='5.441'
											transform='translate(53.902 12.273)'
											fill='#009f93'
										/>
										<rect
											id='Rectangle_34'
											data-name='Rectangle 34'
											width='184.038'
											height='99.706'
											transform='translate(22.522 59.722)'
											fill='#fff'
										/>
										<rect
											id='Rectangle_35'
											data-name='Rectangle 35'
											width='184.038'
											height='99.706'
											transform='translate(22.522 183.089)'
											fill='#fff'
										/>
										<rect
											id='Rectangle_36'
											data-name='Rectangle 36'
											width='184.038'
											height='215.038'
											transform='translate(251.352 183.089)'
											fill='#fff'
										/>
										<rect
											id='Rectangle_37'
											data-name='Rectangle 37'
											width='252.681'
											height='9.616'
											transform='translate(238.509 66.934)'
											fill='#e1e1e1'
										/>
										<rect
											id='Rectangle_38'
											data-name='Rectangle 38'
											width='252.681'
											height='9.616'
											transform='translate(238.509 94.075)'
											fill='#e1e1e1'
										/>
										<rect
											id='Rectangle_39'
											data-name='Rectangle 39'
											width='252.681'
											height='9.616'
											transform='translate(238.509 121.216)'
											fill='#e1e1e1'
										/>
										<rect
											id='Rectangle_40'
											data-name='Rectangle 40'
											width='252.681'
											height='9.616'
											transform='translate(238.509 148.356)'
											fill='#e1e1e1'
										/>
									</g>
									<g
										id='Foreground'
										transform='translate(472 334.367)'
									>
										<path
											id='Path_6'
											data-name='Path 6'
											d='M757.643,807.163l-45.036-.513L696.848,748.8h75.529Z'
											transform='translate(-687.615 -593.643)'
											fill='#202020'
										/>
										<path
											id='Path_7'
											data-name='Path 7'
											d='M735.689,636.859c-13-87.061-44.844-132.737-48.879-131.007-5.7,2.5-7.367,51.378,2.818,101.859.256,0,.449-.065.7-.065a5.3,5.3,0,0,1,5.317,5.317,5.058,5.058,0,0,1-.576,2.434,5.329,5.329,0,0,1-1.345,9.993A250.158,250.158,0,0,0,705,659.281h28.188A43.366,43.366,0,0,0,735.689,636.859Z'
											transform='translate(-682.254 -504.378)'
											fill='#009f93'
										/>
										<path
											id='Path_8'
											data-name='Path 8'
											d='M831.054,543.717c-7.88,0-16.336,22.678-25.689,22.678-2.05,0-3.395-2.242-3.395-4.356,0-2.05,6.47-24.6,6.47-35.555a24.467,24.467,0,0,0-.192-3.011,6.884,6.884,0,0,1-3.587,1.025,6.991,6.991,0,0,1-1.41-13.837,17.932,17.932,0,0,0-14.607-7.111c-8.264,0-19.923,7.367-19.923,18.77,0,3.2.96,11.339.96,18.706,0,41.769-32.735,48.047-32.735,94.3,0,9.738,5.381,20.436,6.983,23.063,0,0,27.418.32,30.045.32s23.959-35.619,26.394-39.4c9.289-14.35,40.167-30.109,40.167-64.382C840.535,550.123,838.806,543.717,831.054,543.717Z'
											transform='translate(-702.345 -503.55)'
											fill='#31bcaf'
										/>
									</g>
								</g>
							</svg>
						</div>
					</div>
				</div>
			</section>
			<section className='contact' id='contact'>
				<div className='wrapper'>
					<h2>
						<a href='#contact'>Contact</a>
					</h2>
					<ContactForm />
				</div>
			</section>
			<Footer />
		</div>
	);
};
