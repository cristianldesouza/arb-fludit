import constants from '../constants';
import KV from '../models/KV';
const cacheDebug = true;

class Caching {
	async defaultCache(request, env, ctx) {
		if (request.url.includes('cache=delete')) {
			if (cacheDebug) {
				console.log(request.url.split('?')[0] + ' → deletando cache');
			}
			await caches.default.delete(request.url.split('?')[0], {});
		}

		if (constants.CACHING) {
			const start = cacheDebug ? Date.now() : null; // Inicia o contador de tempo se cacheDebug for true

			let response = await caches.default.match(request.url.split('?')[0]);

			if (response) {
				if (cacheDebug) {
					const end = Date.now();
					console.log(request.url.split('?')[0] + '→ Cache hit');
					console.log(`Tempo de execução: ${end - start}ms`);
				}
				return response;
			}

			if (cacheDebug) {
				const end = Date.now();
				console.log(request.url.split('?')[0] + ' → Cache miss');
			}
		}
	}

	async kvCache(request, env, ctx) {
		if (constants.CACHING && !request.url.includes('cache=delete')) {
			if (request.url?.includes('ads.txt')) {
				let adsTxt = await KV.get(env, `${constants.DOMAIN}-ads.txt`);

				if (adsTxt) {
					console.log('Ads.txt KV cache hit!');

					return new Response(adsTxt, {
						status: 200,
						headers: {
							'Content-Type': 'text/plain; charset=utf-8',
							'Cache-Control': `public, max-age=${constants.CACHE_CONTROL_TIME}`,
						},
					});
				}
			} else {
				const url = new URL(request.url);
				const pathSegments = url.pathname.split('/').filter(Boolean); // Split and remove empty segments
				let lang = constants.LANGUAGES[0]; // Default language

				// Check if the first path segment is a valid language
				if (pathSegments.length > 0 && constants.LANGUAGES.includes(pathSegments[0])) {
					lang = pathSegments[0];
				}

				// Fetch the home page with the language-specific key
				let homePage = await KV.get(env, `${constants.DOMAIN}-${lang}`);

				if (homePage) {
					console.log(`KV "${constants.DOMAIN}-${lang}" Cache hit.`);

					return new Response(homePage, {
						status: 200,
						headers: {
							'Content-Type': 'text/html',
							'Cache-Control': `public, max-age=${constants.CACHE_CONTROL_TIME}`,
						},
					});
				}
			}
		}
	}
}

export default new Caching();
