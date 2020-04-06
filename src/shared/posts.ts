import PostsFiles from './blog/**/*.md';

interface IPostFileImg {
	source: string;
	alt: string;
	link: string;
}

interface IPostFileLink {
	title: string;
	href: string;
	buttonClass: string;
	target: string;
}

interface IPostFile {
	attributes: {
		title: string;
		type: string;
		slug: string;
		date: Date;
		desc: string;
		tags: string[];
		imgs: IPostFileImg[];
		links: IPostFileLink[];
	};
	html: string;
}

interface IPost {
	title: string;
	type: string;
	slug: string;
	date: Date;
	desc: string;
	tags: string[];
	imgs: IPostFileImg[];
	links: IPostFileLink[];
	dateFormat: string;
	permalink: string;
	html: string;
}

function formatPost({ attributes, html }: IPostFile): IPost {
	const date = new Date(attributes.date || '2020-01-01').toISOString();
	const dateFormat = date.substring(0, date.indexOf('T')).replace(/-/g, '/');
	return {
		...attributes,
		dateFormat,
		permalink: `/articles/${dateFormat}/${attributes.slug}`,
		html,
	};
}
const sortPosts = (a: IPost, b: IPost) =>
	a.date < b.date ? -1 : a.date > b.date ? 1 : 0;

const Posts: IPost[] = PostsFiles.map(formatPost).sort(sortPosts);
const Articles = Posts.filter((p: IPost) => p.type === 'article');
const Projects = Posts.filter((p: IPost) => p.type === 'project');

const findPost = (permalink: string): IPost =>
	Posts.find((post) => post.permalink === permalink);

export { Posts, Articles, Projects, findPost, IPost };
