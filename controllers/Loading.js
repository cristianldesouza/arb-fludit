import Requests from '../models/Requests';
import Template from '../models/Template';
import constants from '../constants';

const translationsEnum = Object.freeze({
	pt: {
		title: 'Redirecionando...',
		secure: 'Site Seguro',
		message_1: 'Oferta encontrada, redirecionando...',
	},
	en: {
		title: 'Loading...',
		secure: 'Secure Site',
		message_1: 'Offer found, redirecting...',
	},
	es: {
		title: 'Redirección...',
		secure: 'Sitio Seguro',
		message_1: 'Oferta encontrada, redirigiendo...',
	},
	it: {
		title: 'Reindirizzamento...',
		secure: 'Sito Sicuro',
		message_1: 'Offerta trovata, reindirizzando...',
	},
	de: {
		title: 'Weiterleitung...',
		secure: 'Sichere Website',
		message_1: 'Angebot gefunden, Weiterleitung...',
	},
	fr: {
		title: 'Redirection...',
		secure: 'Site Sécurisé',
		message_1: 'Offre trouvée, redirection en cours...',
	},
});

class Loading {
	async index(request, env, ctx) {
		const { lang } = request.params;

		let urls = await Requests.getLandersAndAggregators(lang);

		let content = Template.get('loading', [
			{ search: '{title}', replace: translationsEnum[lang]?.title },
			{ search: '{secure}', replace: translationsEnum[lang]?.secure },
			{ search: '{message_1}', replace: translationsEnum[lang]?.message_1 },
			{ search: '`{url_list}`', replace: JSON.stringify(urls || []) },
		]);

		let response = new Response(content, {
			status: 200,
			headers: {
				'Content-Type': 'text/html',
				'Cache-Control': `public, max-age=${constants.CACHE_CONTROL_TIME}`,
			},
		});

		ctx.waitUntil(caches.default.put(request.url.split('?')[0], response.clone()));

		return response;
	}
}

export default new Loading();
