import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--background: ;--menu-circle:#fafafa}#menu.svelte-4o54vu.svelte-4o54vu.svelte-4o54vu.svelte-4o54vu{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;background:var(--theme-main);border-top:1px solid var(--theme-dark-80)}#menu.svelte-4o54vu>ul.svelte-4o54vu.svelte-4o54vu.svelte-4o54vu{position:relative;padding:0;margin:0;height:5em;display:flex;justify-content:center;align-items:center;list-style:none;background-size:contain;top:1rem}#menu.svelte-4o54vu>ul.svelte-4o54vu>li.svelte-4o54vu.svelte-4o54vu{position:relative;height:100%;width:calc(100% / 3);text-align:center}#menu.svelte-4o54vu>ul>li[aria-current='page'] .circle.svelte-4o54vu.svelte-4o54vu.svelte-4o54vu{background:var(--theme-main-60)}#menu.svelte-4o54vu>ul.svelte-4o54vu>li.svelte-4o54vu>a.svelte-4o54vu{position:relative;font-size:0.7rem;color:#000000}.circle.svelte-4o54vu.svelte-4o54vu.svelte-4o54vu.svelte-4o54vu{position:relative;--size:2rem;left:calc(50% - var(--size)/2);width:var(--size);height:var(--size);border-radius:50%;background:var(--menu-circle)}a.svelte-4o54vu.svelte-4o54vu.svelte-4o54vu.svelte-4o54vu{text-decoration:none}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header><nav id="menu" class="svelte-4o54vu"><ul class="svelte-4o54vu"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-4o54vu"><a href="/" class="svelte-4o54vu"><div class="circle svelte-4o54vu"></div>
					首頁
				</a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/search" ? "page" : void 0, 0)} class="svelte-4o54vu"><a href="/" class="svelte-4o54vu"><div class="circle svelte-4o54vu"></div>
					搜尋
				</a></li>
			<li${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/about") ? "page" : void 0,
    0
  )} class="svelte-4o54vu"><a href="/about" class="svelte-4o54vu"><div class="circle svelte-4o54vu"></div>
					我的
				</a></li></ul></nav>
</header>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-14eg5kx{display:flex;flex-direction:column;min-height:100vh}main.svelte-14eg5kx{flex:1;display:flex;flex-direction:column;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-14eg5kx{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-14eg5kx{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-10r6soc_START --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap" rel="stylesheet"><!-- HEAD_svelte-10r6soc_END -->`, ""}

<div class="app svelte-14eg5kx">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="svelte-14eg5kx">${slots.default ? slots.default({}) : ``}</main>

	<footer class="svelte-14eg5kx"><p>ZoneTwelve ;-P</p></footer>
</div>`;
});
export {
  Layout as default
};
