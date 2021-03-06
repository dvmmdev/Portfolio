const body = document.querySelector('body');

window.onscroll = (_: any) => {
	const scrollY = window.scrollY;

	// Set CSS Variables
	body.classList.toggle('scroll', scrollY > 0);
	body.style.setProperty('--scrollY', scrollY.toString());
	body.style.setProperty(
		'--scrollY-percent',
		(scrollY / window.innerHeight).toString()
	);
};
