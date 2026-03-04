import { d as createAstro, c as createComponent, r as renderComponent, m as maybeRenderHead, i as renderSlot, a as renderTemplate } from './astro/server_Dkgve4vv.mjs';
import 'kleur/colors';
import { $ as $$MainHead } from './MainHead_DBpAnsI-.mjs';
/* empty css                        */

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$AuthLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "MainHead", $$MainHead, { "title": title, "description": description })}${maybeRenderHead()}<body class="bg-dark font-grotesk min-h-screen"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/layouts/AuthLayout.astro", void 0);

export { $$AuthLayout as $ };
