const doc = document.documentElement;
const body = document.querySelector('body');

let scrolling = false;
let lastScroll = 0;
let lastDir = 0;

window.onscroll = (_) => {
	const windowHeight = window.innerHeight;
	const scrollTop = doc.scrollTop;
	const dir = Math.sign(scrollTop - lastScroll);

	console.log(lastDir, dir);

	if (
		lastDir != dir ||
		(dir > 0 && scrollTop >= windowHeight) ||
		(dir < 0 && scrollTop <= 0)
	)
		scrolling = false;

	if (!scrolling && scrollTop > 0 && scrollTop < windowHeight) {
		scrolling = true;
		window.scrollTo(0, dir > 0 ? windowHeight : 0);
	}

	lastScroll = scrollTop;
	lastDir = dir;

	// Set CSS Variables
	body.style.setProperty('--scrollY', window.scrollY);
	body.style.setProperty(
		'--scrollY-percent',
		window.scrollY / window.innerHeight
	);
};
