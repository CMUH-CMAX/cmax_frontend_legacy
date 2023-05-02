import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/entry/sverdle-page.svelte.8b269dc5.js","_app/immutable/chunks/index.4c4f1d2f.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/chunks/singletons.c9b87d7f.js","_app/immutable/chunks/index.2e35f776.js"];
export const stylesheets = ["_app/immutable/assets/_page.9d501049.css"];
export const fonts = [];
