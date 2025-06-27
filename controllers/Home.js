import moment from 'moment-timezone';
import constants from '../constants';
import KV from '../models/KV';
import Requests from '../models/Requests';
import Template from '../models/Template';
import Util from '../models/Util';
import NotFound from './NotFound';

function categoriesHandler(categories, lang) {
	let categoriesHtml = [];

	for (let [idx, category] of categories.entries()) {
		if (!category.posts[0]) continue;

		categoriesHtml.push(
			Template.get('home_category', [
				{ search: '{name}', replace: category.name },
				{ search: '{active}', replace: idx == 0 ? 'active' : '' },
				{ search: '{index}', replace: idx },
			])
		);
	}

	return categoriesHtml.join('');
}

function categoriesPostsHandler(categories, lang) {
	let categoriesHtml = [];

	for (let [idx, category] of categories.entries()) {
		if (!category.posts[0]) continue;
		if (category.name == 'Inversiones') continue; // Skip 'Inversiones' category

		let postsHtml = [];
		for (let post of category.posts) {
			post.url = constants.LANGUAGES[0] == lang ? `/p/${post.slug}/` : `/${lang}/p/${post.slug}/`;
			post.featured_image = Util.generateCdnUrl(post.image, 300, 150, 70);
			post.post_date = moment(post.published_date, 'YYYY-MM-DD HH:mm').format(
				constants.DATE_FORMATS[lang]
			);

			postsHtml.push(
				Template.get('home_category_post', [
					{ search: '{url}', replace: post.url },
					{ search: '{title}', replace: post.title },
					{ search: '{date}', replace: post.post_date },
					{ search: '{category}', replace: category.name },
					{ search: '{featured_image}', replace: post.featured_image },
					{ search: '{read_more}', replace: constants.READ_MORE_TITLE[lang] },
				])
			);
		}

		categoriesHtml.push(
			Template.get('home_category_content', [
				{ search: '{name}', replace: category.name },
				{ search: '{active}', replace: idx == 0 ? 'active' : '' },
				{ search: '{index}', replace: idx },
				{ search: '{posts}', replace: postsHtml.join('') },
			])
		);
	}

	return categoriesHtml.join('');
}

function postsHandler(categories, lang) {
	let postsHtml = [];

	// create a flat list of posts from all categories
	let allPosts = [];

	for (let category of categories) {
		if (!category.posts[0]) continue;
		if (category.name == 'Inversiones') continue; // Skip 'Inversiones' category

		for (let post of category.posts) {
			post.category = category;
			allPosts.push(post);
		}
	}

	allPosts.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));
	for (let post of allPosts.splice(0, 12)) {
		post.url = constants.LANGUAGES[0] == lang ? `/p/${post.slug}/` : `/${lang}/p/${post.slug}/`;

		post.post_date = moment(post.published_date, 'YYYY-MM-DD HH:mm').format(
			constants.DATE_FORMATS[lang]
		);

		post.featured_image = Util.generateCdnUrl(post.image, 300, 150, 70);

		postsHtml.push(
			Template.get('home_post', [
				{ search: '{url}', replace: post.url },
				{ search: '{title}', replace: post.title },
				{ search: '{date}', replace: post.post_date },
				{ search: '{category}', replace: post.category.name },
				{ search: '{featured_image}', replace: post.featured_image },
			])
		);
	}
	return postsHtml.join('');
}

function mainPostsListHandler(posts, lang) {
	let html = [];

	try {
		for (let post of posts) {
			post.url = constants.LANGUAGES[0] == lang ? `/p/${post.slug}/` : `/${lang}/p/${post.slug}/`;

			post.published_date_formatted = moment(post.published_date, 'YYYY-MM-DD HH:mm').format(
				constants.DATE_FORMATS[lang]
			);

			post.post_date = moment(post.published_date, 'YYYY-MM-DD HH:mm').format(
				constants.DATE_FORMATS[lang]
			);

			post.iso_date = moment(post.published_date, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD');

			post.featured_image = Util.generateCdnUrl(post.image, 250, 125, 70);

			html.push(
				Template.get('home_main_posts_list_item', [
					{ search: '{url}', replace: post.url },
					{ search: '{featured_image}', replace: post.featured_image },
					{ search: '{date}', replace: post.post_date },
					{ search: '{isodate}', replace: post.iso_date },
					{ search: '{title}', replace: post.title },
					{ search: '{category}', replace: post.category.name },
				])
			);
		}
	} catch (e) {
		console.log(e);
	}

	return html.join('');
}

function topReadedListHandler(posts, lang) {
	let html = [];

	try {
		for (let post of posts) {
			post.url = constants.LANGUAGES[0] == lang ? `/p/${post.slug}/` : `/${lang}/p/${post.slug}/`;

			post.published_date_formatted = moment(post.published_date, 'YYYY-MM-DD HH:mm').format(
				constants.DATE_FORMATS[lang]
			);

			post.post_date = moment(post.published_date, 'YYYY-MM-DD HH:mm').format(
				constants.DATE_FORMATS[lang]
			);

			post.iso_date = moment(post.published_date, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD');

			post.featured_image = Util.generateCdnUrl(post.image, 75, 75, 70);

			html.push(
				Template.get('home_top_readed_posts', [
					{ search: '{url}', replace: post.url },
					{ search: '{featured_image}', replace: post.featured_image },
					{ search: '{date}', replace: post.post_date },
					{ search: '{isodate}', replace: post.iso_date },
					{ search: '{title}', replace: post.title },
					{ search: '{category}', replace: post.category.name },
					{ search: '{read_more_title}', replace: constants.READ_MORE_TITLE[lang] },
				])
			);
		}
	} catch (e) {
		console.log(e);
	}

	return html.join('<hr class="home-divider">');
}

function mainPostHandler(post, lang) {
	let html = '';

	try {
		post.url = constants.LANGUAGES[0] == lang ? `/p/${post.slug}/` : `/${lang}/p/${post.slug}/`;

		post.featured_image = Util.generateCdnUrl(post.image, 800, 400, 70);
		post.post_date = moment(post.published_date, 'YYYY-MM-DD HH:mm').format(
			constants.DATE_FORMATS[lang]
		);
		html = Template.get('home_main_post', [
			{ search: '{url}', replace: post.url },
			{ search: '{title}', replace: post.title },
			{ search: '{date}', replace: post.post_date },
			{ search: '{category}', replace: post.category.name },
			{ search: '{featured_image}', replace: post.featured_image },
			{ search: '{read_more}', replace: constants.READ_MORE_TITLE[lang] },
		]);
	} catch (e) {
		console.log(e);
	}

	console.log(html);
	return html;
}

class Home {
	async handleHomeLang(lang, request, env, ctx) {
		try {
			let homeData = await Requests.getHomeData(lang, constants.DOMAIN, request.query);

			if (!homeData) {
				return NotFound.index(lang, request, env, ctx);
			}

			let header = Template.renderTemplate('header', {
				lang,
				menu: constants.MENU[lang],
				seo_title: constants.SITE_NAME + ' - ' + constants.SITE_SLOGAN[lang],
				seo_description: constants.SITE_NAME + ' - ' + constants.SITE_SLOGAN[lang],
				seo_image: `https://${constants.DOMAIN}/public/img/logo.svg`,
				seo_url:
					lang === constants.LANGUAGES[0]
						? 'https://' + constants.DOMAIN + '/'
						: 'https://' + constants.DOMAIN + '/' + lang + '/',
				home_url:
					lang === constants.LANGUAGES[0]
						? `https://${constants.DOMAIN}/`
						: `https://${constants.DOMAIN}/${lang}/`,
				search_placeholder: constants.SEARCH.PLACEHOLDER[lang],
				search_action: constants.SEARCH.ACTION[lang],
			});

			//header = header.split('<!-- custom headers -->').join(criticalCss);
			let mainPost = homeData.top_posts.shift();

			let mainPostsList = homeData.top_posts.splice(0, 3);

			let topReadedPosts = homeData.top_posts.splice(0, 4);

			let homeContentMap = {
				MAIN_POSTS_LIST: mainPostsListHandler(mainPostsList, lang),
				MAIN_POST: mainPostHandler(mainPost, lang),
				TOP_READED_LIST: topReadedListHandler(topReadedPosts, lang),
				CATEGORIES: categoriesHandler(homeData.categories, lang),
				CATEGORIES_CONTENT: categoriesPostsHandler(homeData.categories, lang),
				POPULAR_CATEGORIES_TITLE: constants.POPULAR_CATEGORIES_TITLE[lang],
				LATEST_ARTICLES_TITLE: constants.SIDEBAR_TITLE[lang],
				POSTS: postsHandler(homeData.categories, lang),
				READ_MORE_TITLE: constants.READ_MORE_TITLE[lang],
				SITE_NAME: constants.SITE_NAME,
				SITE_SLOGAN: constants.SITE_SLOGAN[lang],
				SITE_DESCRIPTION: constants.SITE_DESCRIPTION[lang],
			};

			let content = Template.renderTemplate('home_index', homeContentMap);

			let footer = Template.renderTemplate('footer', {
				sitedomain: constants.DOMAIN,
				sitename: constants.SITE_NAME,
				site_description: constants.SITE_DESCRIPTION[lang],
				allrights: constants.ALL_RIGHTS[lang],
				year: new Date().getFullYear(),
				logourl: constants.LOGO_URL,
				footer_left_menu: constants.FOOTER_LEFT_MENU[lang],
				footer_right_menu: constants.FOOTER_RIGHT_MENU[lang],
				facebook: constants.SOCIAL_MEDIA.facebook,
				instagram: constants.SOCIAL_MEDIA.instagram,
			});

			let homePageContent = header + content + footer;

			let response = new Response(homePageContent, {
				status: 200,
				headers: {
					'Content-Type': 'text/html',
					'Cache-Control': `public, max-age=${constants.CACHE_CONTROL_TIME}`,
				},
			});

			//ctx.waitUntil(caches.default.put(request.url.split('?')[0], response.clone()));
			ctx.waitUntil(KV.post(env, `${constants.DOMAIN}-${lang}`, homePageContent));

			return response;
		} catch (e) {
			return NotFound.index(lang, request, env, ctx);
		}
	}
}

export default new Home();
