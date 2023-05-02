export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.58222926.js","app":"_app/immutable/entry/app.2b1e8ee1.js","imports":["_app/immutable/entry/start.58222926.js","_app/immutable/chunks/index.4c4f1d2f.js","_app/immutable/chunks/singletons.c9b87d7f.js","_app/immutable/chunks/index.2e35f776.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/entry/app.2b1e8ee1.js","_app/immutable/chunks/index.4c4f1d2f.js"],"stylesheets":[],"fonts":[]},
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
