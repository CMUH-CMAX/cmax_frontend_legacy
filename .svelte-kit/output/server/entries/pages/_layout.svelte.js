import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as subscribe, g as add_attribute, h as escape, n as null_to_empty, v as validate_component } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "strokeWidth", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M2.25 11.9998L11.2045 3.04533C11.6438 2.60599 12.3562 2.60599 12.7955 3.04532L21.75 11.9998M4.5 9.74983V19.8748C4.5 20.4961 5.00368 20.9998 5.625 20.9998H9.75V16.1248C9.75 15.5035 10.2537 14.9998 10.875 14.9998H13.125C13.7463 14.9998 14.25 15.5035 14.25 16.1248V20.9998H18.375C18.9963 20.9998 19.5 20.4962 19.5 19.8748V9.74983M8.25 20.9998H16.5" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M11.4697 3.84076C11.7626 3.54787 12.2374 3.54787 12.5303 3.84076L21.2197 12.5301C21.5126 12.823 21.9874 12.823 22.2803 12.5301C22.5732 12.2372 22.5732 11.7623 22.2803 11.4694L13.591 2.7801C12.7123 1.90142 11.2877 1.90142 10.409 2.7801L1.71967 11.4694C1.42678 11.7623 1.42678 12.2372 1.71967 12.5301C2.01256 12.823 2.48744 12.823 2.78033 12.5301L11.4697 3.84076Z" fill="${color}"/> <path d="M12 5.43176L20.159 13.5908C20.1887 13.6205 20.2191 13.6492 20.25 13.6769V19.8748C20.25 20.9103 19.4105 21.7498 18.375 21.7498H15C14.5858 21.7498 14.25 21.414 14.25 20.9998V16.4998C14.25 16.0856 13.9142 15.7498 13.5 15.7498H10.5C10.0858 15.7498 9.75 16.0856 9.75 16.4998V20.9998C9.75 21.414 9.41421 21.7498 9 21.7498H5.625C4.58947 21.7498 3.75 20.9103 3.75 19.8748V13.6769C3.78093 13.6492 3.81127 13.6205 3.84099 13.5908L12 5.43176Z" fill="${color}"/> `;
  let { ariaLabel = "home" } = $$props;
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
const MagnifyingGlass = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "strokeWidth", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3.75C6.77208 3.75 3.75 6.77208 3.75 10.5C3.75 14.2279 6.77208 17.25 10.5 17.25C12.3642 17.25 14.0506 16.4953 15.273 15.273C16.4953 14.0506 17.25 12.3642 17.25 10.5C17.25 6.77208 14.2279 3.75 10.5 3.75ZM2.25 10.5C2.25 5.94365 5.94365 2.25 10.5 2.25C15.0563 2.25 18.75 5.94365 18.75 10.5C18.75 12.5078 18.032 14.3491 16.8399 15.7793L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.7793 16.8399C14.3491 18.032 12.5078 18.75 10.5 18.75C5.94365 18.75 2.25 15.0563 2.25 10.5Z" fill="${color}"/> `;
  let { ariaLabel = "magnifying glass" } = $$props;
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
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "strokeWidth", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M15.75 6C15.75 8.07107 14.071 9.75 12 9.75C9.9289 9.75 8.24996 8.07107 8.24996 6C8.24996 3.92893 9.9289 2.25 12 2.25C14.071 2.25 15.75 3.92893 15.75 6Z" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4.5011 20.1182C4.5714 16.0369 7.90184 12.75 12 12.75C16.0982 12.75 19.4287 16.0371 19.4988 20.1185C17.216 21.166 14.6764 21.75 12.0003 21.75C9.32396 21.75 6.78406 21.1659 4.5011 20.1182Z" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M7.49996 6C7.49996 3.51472 9.51468 1.5 12 1.5C14.4852 1.5 16.5 3.51472 16.5 6C16.5 8.48528 14.4852 10.5 12 10.5C9.51468 10.5 7.49996 8.48528 7.49996 6Z" fill="${color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75121 20.1053C3.82855 15.6156 7.49195 12 12 12C16.5081 12 20.1716 15.6157 20.2487 20.1056C20.2538 20.4034 20.0823 20.676 19.8116 20.8002C17.4327 21.8918 14.7865 22.5 12.0003 22.5C9.21382 22.5 6.5674 21.8917 4.18829 20.7999C3.91762 20.6757 3.74608 20.4031 3.75121 20.1053Z" fill="${color}"/> `;
  let { ariaLabel = "user" } = $$props;
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
const mountainSvg = "/_app/immutable/assets/mountain.f8aa8a1d.svg";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--menu-height:5em}.mountainSvg.svelte-1ahbmlu.svelte-1ahbmlu.svelte-1ahbmlu.svelte-1ahbmlu{position:fixed;bottom:var(--menu-height);width:100%;height:auto;z-index:-1}#menu.svelte-1ahbmlu.svelte-1ahbmlu.svelte-1ahbmlu.svelte-1ahbmlu{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;background:var(--white-f)}#menu.svelte-1ahbmlu>ul.svelte-1ahbmlu.svelte-1ahbmlu.svelte-1ahbmlu{position:relative;padding:0;margin:0;height:var(--menu-height);display:flex;justify-content:center;align-items:center;list-style:none;background-size:contain;top:1rem}#menu.svelte-1ahbmlu>ul.svelte-1ahbmlu>li.svelte-1ahbmlu.svelte-1ahbmlu{position:relative;height:100%;width:calc(100% / 3);text-align:center}#menu.svelte-1ahbmlu>ul.svelte-1ahbmlu>li.svelte-1ahbmlu>a.svelte-1ahbmlu{position:relative;font-size:0.7rem;color:var(--black-0)}.navbar-icon.svelte-1ahbmlu.svelte-1ahbmlu.svelte-1ahbmlu.svelte-1ahbmlu{--size:2rem;position:relative;left:calc(50% - var(--size)/2);width:var(--size);height:var(--size)}a.svelte-1ahbmlu.svelte-1ahbmlu.svelte-1ahbmlu.svelte-1ahbmlu{text-decoration:none}a.activate.svelte-1ahbmlu>.svelte-1ahbmlu.svelte-1ahbmlu.svelte-1ahbmlu{color:var(--blue-4);background:var(--linear-1);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header><img class="mountainSvg svelte-1ahbmlu"${add_attribute("src", mountainSvg, 0)} alt="Welcome">
	<nav id="menu" class="svelte-1ahbmlu"><ul class="svelte-1ahbmlu"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-1ahbmlu"><a href="/" class="${escape(null_to_empty($page.url.pathname === "/" ? "activate" : ""), true) + " svelte-1ahbmlu"}"><div class="navbar-icon svelte-1ahbmlu">${validate_component(Home, "Home").$$render($$result, { variation: "solid", size: "32" }, {}, {})}</div>
					<span class="svelte-1ahbmlu">首頁</span></a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/search" ? "page" : void 0, 0)} class="svelte-1ahbmlu"><a href="/search" class="${escape(null_to_empty($page.url.pathname === "/search" ? "activate" : ""), true) + " svelte-1ahbmlu"}"><div class="navbar-icon svelte-1ahbmlu">${validate_component(MagnifyingGlass, "MagnifyingGlass").$$render($$result, { variation: "solid", size: "32" }, {}, {})}</div>
					<span class="svelte-1ahbmlu">搜尋</span></a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/about" ? "page" : void 0, 0)} class="svelte-1ahbmlu"><a href="/about" class="${escape(null_to_empty($page.url.pathname === "/about" ? "activate" : ""), true) + " svelte-1ahbmlu"}"><div class="navbar-icon svelte-1ahbmlu">${validate_component(User, "User").$$render($$result, { variation: "outline", size: "32" }, {}, {})}</div>
					<span class="svelte-1ahbmlu">我的</span></a></li></ul></nav>
</header>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-113l080{display:flex;flex-direction:column;min-height:100vh}main.svelte-113l080{flex:1;display:flex;flex-direction:column;width:100%;height:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-113l080{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-113l080{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-123mti_START --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap" rel="stylesheet">${$$result.title = `<title>CMAX 中醫地圖</title>`, ""}<link rel="manifest" href="/manifest.json"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="application-name" content="CMAX"><meta name="apple-mobile-web-app-title" content="CMAX"><meta name="msapplication-starturl" content="/"><link rel="icon" type="image/png" sizes="128x128" href="/CMAX_logo_darkblue-128.png"><link rel="apple-touch-icon" type="image/png" sizes="128x128" href="/CMAX_logo_darkblue-128.png"><link rel="icon" type="image/png" sizes="16x16" href="/CMAX_logo_darkblue-16.png"><link rel="apple-touch-icon" type="image/png" sizes="16x16" href="/CMAX_logo_darkblue-16.png"><link rel="icon" type="image/png" sizes="32x32" href="/CMAX_logo_darkblue-32.png"><link rel="apple-touch-icon" type="image/png" sizes="32x32" href="/CMAX_logo_darkblue-32.png"><link rel="icon" type="image/png" sizes="64x64" href="/CMAX_logo_darkblue-64.png"><link rel="apple-touch-icon" type="image/png" sizes="64x64" href="/CMAX_logo_darkblue-64.png"><link rel="icon" type="image/png" sizes="96x96" href="/CMAX_logo_darkblue-96.png"><link rel="apple-touch-icon" type="image/png" sizes="96x96" href="/CMAX_logo_darkblue-96.png"><link rel="icon" type="image/png" sizes="256x256" href="/CMAX_logo_darkblue-256.png"><link rel="apple-touch-icon" type="image/png" sizes="256x256" href="/CMAX_logo_darkblue-256.png"><link rel="icon" type="image/png" sizes="512x512" href="/CMAX_logo_darkblue-512.png"><link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/CMAX_logo_darkblue-512.png"><link rel="icon" type="image/svg" href="/CMAX_logo_darkblue.svg"><link rel="apple-touch-icon" type="image/svg" href="/CMAX_logo_darkblue.svg"><!-- HEAD_svelte-123mti_END -->`, ""}

<div class="app svelte-113l080">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="svelte-113l080">${slots.default ? slots.default({}) : ``}</main>

	<footer class="svelte-113l080"><p>ZoneTwelve Here</p></footer>
</div>`;
});
export {
  Layout as default
};
