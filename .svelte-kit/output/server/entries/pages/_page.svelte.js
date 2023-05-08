import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_attribute_value, i as escape_object, e as escape, v as validate_component } from "../../chunks/index3.js";
const Counter_svelte_svelte_type_style_lang = "";
const Bell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "strokeWidth", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M14.8569 17.0817C16.7514 16.857 18.5783 16.4116 20.3111 15.7719C18.8743 14.177 17.9998 12.0656 17.9998 9.75V9.04919C17.9999 9.03281 18 9.01641 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9L5.9998 9.75C5.9998 12.0656 5.12527 14.177 3.68848 15.7719C5.4214 16.4116 7.24843 16.857 9.14314 17.0818M14.8569 17.0817C13.92 17.1928 12.9666 17.25 11.9998 17.25C11.0332 17.25 10.0799 17.1929 9.14314 17.0818M14.8569 17.0817C14.9498 17.3711 15 17.6797 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 17.6797 9.05019 17.3712 9.14314 17.0818" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M5.25001 8.9998C5.25012 5.27197 8.27216 2.25 12 2.25C15.7279 2.25 18.75 5.27208 18.75 9L18.7498 9.04919V9.75C18.7498 11.8731 19.5508 13.8074 20.8684 15.2699C21.0349 15.4547 21.0989 15.71 21.0393 15.9516C20.9797 16.1931 20.8042 16.3893 20.5709 16.4755C19.0269 17.0455 17.4105 17.4659 15.7396 17.7192C15.7465 17.812 15.75 17.9056 15.75 18C15.75 20.0711 14.0711 21.75 12 21.75C9.92894 21.75 8.25001 20.0711 8.25001 18C8.25001 17.9056 8.25351 17.812 8.2604 17.7192C6.58934 17.4659 4.97287 17.0455 3.42875 16.4755C3.19539 16.3893 3.01992 16.1931 2.96033 15.9516C2.90073 15.71 2.96476 15.4547 3.13126 15.2699C4.44879 13.8074 5.24981 11.8731 5.24981 9.75L5.25001 8.9998ZM9.75221 17.8993C9.75075 17.9326 9.75001 17.9662 9.75001 18C9.75001 19.2426 10.7574 20.25 12 20.25C13.2427 20.25 14.25 19.2426 14.25 18C14.25 17.9662 14.2493 17.9326 14.2478 17.8992C13.5072 17.9659 12.7574 18 11.9998 18C11.2424 18 10.4927 17.966 9.75221 17.8993Z" fill="${color}"/> `;
  let { ariaLabel = "bell" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      {
        "stroke-width": escape_attribute_value(strokeWidth)
      }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content-slot.svelte-yluvu0{width:100%;color:var(--theme-dark);background:var(--theme-main-80)}.content-piece.svelte-yluvu0{min-width:80%;color:var(--theme-dark);background:var(--theme-main-80)}.quick-search-btn.svelte-yluvu0{color:var(--theme-dark);background:var(--theme-main-20)}.notification.svelte-yluvu0{width:100%;height:100%}.notification-btn.svelte-yluvu0{width:2rem;height:2rem;background:var(--theme-main-20)}.recent.svelte-yluvu0{color:var(--theme-dark);background:var(--theme-main-20)}.box.svelte-yluvu0{width:4em;height:4em;background:var(--theme-main-20)}",
  map: null
};
let lastname = "殊樵";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-8cf5ct_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="CMAX"><!-- HEAD_svelte-8cf5ct_END -->`, ""}

<div class="content-slot mx-auto grid grid-cols-4 gap-4 content-around p-4 svelte-yluvu0"><div class="col-span-3"><p class="text-xl">嗨，<span class="lastname font-semibold">${escape(lastname)}</span>！</p>
		<p class="text-xl">今天過得好嗎？</p></div>
	<div><div class="notification flex justify-center items-center svelte-yluvu0"><div class="notification-btn flex justify-center items-center rounded-full svelte-yluvu0">${validate_component(Bell, "Bell").$$render($$result, { variation: "solid", size: "20" }, {}, {})}</div></div></div>
	<div class="col-span-4"><div class="quick-search-btn p-2 rounded-lg text-center svelte-yluvu0">尋找最適合你的中醫及診所
		</div></div></div>

<div class="m-2"></div>

<div class="content-slot mx-auto grid p-4 svelte-yluvu0"><div class="grid grid-cols-4 gap-4 pb-2"><p class="col-span-3 text-sm">最近常見症狀</p>
		<p class="text-sm font-bold">查看更多</p></div>

	<div class="recent shadow rounded-md p-4 max-w-sm w-full mx-auto svelte-yluvu0"><div class="animate-pulse flex space-x-4"><div class="flex-1 space-y-6 py-1"><div class="space-y-3"><div class="grid grid-cols-3 gap-4"><div class="h-2 bg-slate-700 rounded col-span-2"></div></div>
					<div class="h-2 bg-slate-700 rounded"></div></div></div>
			<div class="rounded-full bg-slate-700 h-10 w-10"></div></div></div></div>

<div class="m-2"></div>

<div class="content-piece mx-auto svelte-yluvu0"><div class="grid grid-cols-4 gap-4 text-center p-4 m-1"><div class="grid justify-center"><div class="box box-border md:box-content svelte-yluvu0"></div>
			<p class="text-xs pt-1">症狀列別</p></div>
		<div class="grid justify-center"><div class="box box-border md:box-content svelte-yluvu0"></div>
			<p class="text-xs pt-1">症狀檢查器</p></div>
		<div class="grid justify-center"><div class="box box-border md:box-content svelte-yluvu0"></div>
			<p class="text-xs pt-1">診所地圖</p></div>
		<div class="grid justify-center"><div class="box box-border md:box-content svelte-yluvu0"></div>
			<p class="text-xs pt-1">許願池</p></div></div>
</div>`;
});
export {
  Page as default
};
