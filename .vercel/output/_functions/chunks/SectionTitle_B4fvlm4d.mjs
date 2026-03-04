import { d as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate } from './astro/server_Dkgve4vv.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { sectionTitle, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center gap-10 mb-20 sm:flex-row"> <h2 class="greenhead text-center sm:text-left text-3xl sm:text-4xl">${sectionTitle}</h2> <p class="w-auto text-center sm:text-left sm:w-[580px]"> ${description} </p> </div>`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/components/ui/SectionTitle.astro", void 0);

export { $$SectionTitle as $ };
