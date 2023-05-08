import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/entry/sverdle-page.svelte.ae10740f.js","_app/immutable/chunks/index.2f5461f2.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/chunks/singletons.29b4bc09.js"];
export const stylesheets = ["_app/immutable/assets/_page.9d501049.css"];
export const fonts = [];
