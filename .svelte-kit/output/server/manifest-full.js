export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".well-known/assetlinks.json","CMAX_logo-128.png","CMAX_logo-16.png","CMAX_logo-256.png","CMAX_logo-32.png","CMAX_logo-512.png","CMAX_logo-64.png","CMAX_logo-96.png","CMAX_logo.svg","Stars.svg","favicon.png","iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png","manifest.json","robots.txt","sw.js"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain",".js":"application/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.3da9a01e.js","app":"_app/immutable/entry/app.9590ad2d.js","imports":["_app/immutable/entry/start.3da9a01e.js","_app/immutable/chunks/index.c6096ada.js","_app/immutable/chunks/singletons.ebaa247a.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/entry/app.9590ad2d.js","_app/immutable/chunks/index.c6096ada.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/notification",
				pattern: /^\/notification\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/recent",
				pattern: /^\/recent\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/search/body",
				pattern: /^\/search\/body\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/sverdle/how-to-play",
				pattern: /^\/sverdle\/how-to-play\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
