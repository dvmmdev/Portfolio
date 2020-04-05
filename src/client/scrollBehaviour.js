const body = document.querySelector('body');

window.onscroll = (_) => {
	// Set CSS Variables
	body.style.setProperty('--scrollY', window.scrollY);
	body.style.setProperty(
		'--scrollY-percent',
		window.scrollY / window.innerHeight
	);
};
