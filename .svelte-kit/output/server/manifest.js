export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".well-known/assetlinks.json","CMAX_logo_darkblue-128.png","CMAX_logo_darkblue-16.png","CMAX_logo_darkblue-256.png","CMAX_logo_darkblue-32.png","CMAX_logo_darkblue-512.png","CMAX_logo_darkblue-64.png","CMAX_logo_darkblue-96.png","CMAX_logo_darkblue-svg.png","CMAX_logo_darkblue.svg","Stars.svg","favicon.png","iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png","manifest.json","robots.txt","sw.js"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain",".js":"application/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.0211b6cd.js","app":"_app/immutable/entry/app.ce1085e9.js","imports":["_app/immutable/entry/start.0211b6cd.js","_app/immutable/chunks/index.7d1e5ac3.js","_app/immutable/chunks/singletons.5835484a.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/entry/app.ce1085e9.js","_app/immutable/chunks/index.7d1e5ac3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
