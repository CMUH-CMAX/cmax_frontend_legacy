export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.444433ba.js","app":"_app/immutable/entry/app.866c93bf.js","imports":["_app/immutable/entry/start.444433ba.js","_app/immutable/chunks/index.2f5461f2.js","_app/immutable/chunks/singletons.29b4bc09.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/entry/app.866c93bf.js","_app/immutable/chunks/index.2f5461f2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js')
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
