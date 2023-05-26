import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/entry/_page.svelte.1f9eb508.js","_app/immutable/chunks/index.7d1e5ac3.js","_app/immutable/entry/_page.ts.9c5eea7e.js","_app/immutable/chunks/_page.da46b06b.js"];
export const stylesheets = ["_app/immutable/assets/_page.1c113883.css"];
export const fonts = [];
