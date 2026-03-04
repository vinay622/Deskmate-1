/* empty css                                 */
import { d as createAstro, c as createComponent } from '../chunks/astro/server_Dkgve4vv.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return Astro2.redirect("/app/chat");
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/app/index.astro", void 0);

const $$file = "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/app/index.astro";
const $$url = "/app";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
