import Template from '../models/Template';
import Requests from '../models/Requests';
import constants from '../constants';

class Search {
	/**
	 * This method handles an incoming request for searching posts.
	 * @param {Request} request - The fetch request from the user.
	 * @returns {Promise<Response>}
	 */
	async handleSearchRequest(lang, request, env, ctx) {
		try {
			// 1) Parse the URL and querystring
			const url = new URL(request.url);
			const q = url.searchParams.get('q') || '';
			const pathName = url.pathname;

			const domain = constants.DOMAIN;

			const searchResult = await Requests.getSearchResults(q, domain, lang);

			let postsHtml = Template.searchPostsLoop(searchResult, lang);

			let header = Template.renderTemplate('header', {
				lang,
				menu: constants.MENU[lang],
				seo_title: constants.SITE_NAME + ' - ' + constants.SITE_SLOGAN[lang],
				seo_description: constants.SITE_NAME + ' - ' + constants.SITE_SLOGAN[lang],
				seo_image: `https://${constants.DOMAIN}/public/img/logo.svg`,
				seo_url: `https://${constants.DOMAIN}${pathName}`,
				home_url:
					lang === constants.LANGUAGES[0]
						? 'https://' + constants.DOMAIN + '/'
						: 'https://' + constants.DOMAIN + '/' + lang + '/',
				search_placeholder: constants.SEARCH.PLACEHOLDER[lang],
				search_action: constants.SEARCH.ACTION[lang],
			});

			let content = Template.get('search_index', [
				{ search: '{{name}}', replace: q },
				{ search: '{{search.posts}}', replace: postsHtml },
				{ search: '{{search.result}}', replace: constants.SEARCH.RESULT[lang] },
			]);

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

			let response = new Response(header + content + footer, {
				status: 200,
				headers: {
					'Content-Type': 'text/html',
					'Cache-Control': `public, max-age=${constants.CACHE_CONTROL_TIME}`,
				},
			});

			ctx.waitUntil(caches.default.put(request.url.split('?')[0], response.clone()));

			return response;
		} catch (error) {
			console.error('Error in handleSearchRequest:', error);
			return new Response(JSON.stringify({ success: false, message: error.message }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			});
		}
	}
}

export default new Search();
