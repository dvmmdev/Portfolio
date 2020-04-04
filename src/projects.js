export default [
	Project(
		'Corehalla',
		'Statistics website for the game Brawlhalla.',
		['website', 'discord bot'],
		[
			Thumbnail(
				'https://images.unsplash.com/photo-1502514276381-1ea51dfe201c?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
				'Corehalla',
				'#corehalla'
			),
		],
		[Link('View Code', '#', 'blank'), Link('Visit', '#', 'hollow')]
	),
	Project(
		'Kyumee',
		'Matchmaking, Rankings and Stats system.',
		['website', 'discord bot'],
		[
			Thumbnail(
				'https://images.unsplash.com/uploads/14128433436835eb4240e/cf8effc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
				'Kyumee',
				'#kyumee'
			),
		],
		[Link('View Code', '#', 'blank'), Link('Visit', '#', 'hollow')]
	),
	Project(
		'Lorem',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in rutrum ex, in molestie tortor. Fusce eu dolor ac arcu tempus pellentesque. Quisque convallis rutrum fermentum...',
		['article', 'mockup'],
		[
			Thumbnail(
				'https://images.unsplash.com/photo-1585703855101-8245dedacb64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
				'Kyumee',
				'#kyumee'
			),
		],
		[Link('Read More', '/blog', 'blank', '_self')]
	),
	Project(
		'Mokap.JS',
		'Data modeling utility.',
		['NPM Module'],
		[
			Thumbnail(
				'https://images.unsplash.com/photo-1585790339217-ef3600f47e0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
				'Mokap.JS',
				'#mokapjs'
			),
		],
		[Link('View Code', '#', 'blank'), Link('View', '#', 'hollow')]
	),
	Project(
		'Hamburger',
		'Create a variety of hamburgers!',
		['website', 'game'],
		[
			Thumbnail(
				'https://images.unsplash.com/photo-1585771863106-cae7fa97cb29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
				'Hamburger',
				'#hamburger'
			),
		],
		[Link('View Code', '#', 'blank'), Link('Visit', '#', 'hollow')]
	),
];

function Project(title, desc, tags, imgs, links) {
	return {
		title,
		desc,
		tags,
		imgs,
		links,
	};
}

function Link(title, href, buttonClass = '', target = '_blank') {
	return { title, href, target, buttonClass };
}

function Thumbnail(source, alt, link = '') {
	return { source, alt, link };
}
