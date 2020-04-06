import PostsFiles from './blog/**/*.md';

function formatPost({ attributes, html }) {
	const date = attributes.date || '2020-01-01';
	const dateFormat = date.substring(0, date.indexOf('T')).replace(/-/g, '/');
	return {
		...attributes,
		dateFormat,
		permalink: `/articles/${dateFormat}/${attributes.slug}`,
		html,
	};
}
const sortPosts = (a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0);

const Posts = PostsFiles.map(formatPost).sort(sortPosts);
const Articles = Posts.filter((p) => p.type === 'article');
const Projects = Posts.filter((p) => p.type === 'project');

const findPost = (permalink) =>
	Posts.find((post) => post.permalink === permalink);

console.log(Posts);

export { Posts, Articles, Projects, findPost };
