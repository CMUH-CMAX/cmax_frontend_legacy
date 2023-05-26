import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/entry/sverdle-page.svelte.92edb66f.js","_app/immutable/chunks/index.7d1e5ac3.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/chunks/singletons.5835484a.js"];
export const stylesheets = ["_app/immutable/assets/_page.9d501049.css"];
export const fonts = [];
