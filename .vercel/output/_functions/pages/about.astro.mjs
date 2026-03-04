/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Dkgve4vv.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_rIk5ueIC.mjs';
import { $ as $$Section } from '../chunks/Section_BhMDhRkP.mjs';
import { $ as $$SectionTitle } from '../chunks/SectionTitle_B4fvlm4d.mjs';
import { $ as $$Card } from '../chunks/Card_CloYrPdP.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const problems = [
    {
      title: "Information is Hard to Find",
      description: "Fee deadlines, exam schedules, hostel rules \u2014 they exist in PDFs and notice boards that students never check or can't locate. Critical information is scattered and inaccessible.",
      bg: "bg-green"
    },
    {
      title: "Staff Answer the Same Questions Repeatedly",
      description: "Administrative staff spend hours answering 'When is the fee deadline?' for the hundredth time each semester, diverting time from complex work that actually needs human attention.",
      bg: "bg-gray"
    },
    {
      title: "Rumours Fill the Gap",
      description: "WhatsApp groups and senior students become the de facto information source \u2014 spreading outdated or incorrect information. There's no reliable, always-available source of truth.",
      bg: "bg-dark text-gray"
    }
  ];
  const team = [
    {
      name: "Vinay Reddy",
      role: "Founder & Product Lead",
      description: "Experienced the problem first-hand during college. Built DeskMate to ensure no student wastes time hunting for information that should be instantly accessible."
    },
    {
      name: "Priya Das",
      role: "AI Engineer",
      description: "Designed the document indexing and keyword-matching engine that powers DeskMate's no-hallucination guarantee. Expert in RAG pipelines and information retrieval."
    },
    {
      name: "Sai Kumar",
      role: "Full Stack Developer",
      description: "Built the admin portal, document management system, and real-time chat interface. Focused on making the product fast, reliable, and simple to deploy."
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About \u2014 DeskMate", "description": "Learn about DeskMate \u2014 the AI assistant built to solve the college information problem." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Section", $$Section, { "id": "about-hero" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-20 mb-[80px] text-center"> <span class="greenhead text-sm uppercase tracking-widest mb-4 inline-block">About DeskMate</span> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-6 max-w-3xl mx-auto">
Built to end the<br> <span class="greenhead">college information problem</span> </h1> <p class="text-lg text-[#555] max-w-2xl mx-auto">
Colleges in India are drowning in repetitive questions. Students spend hours hunting for basic information across notice boards, WhatsApp groups, and unresponsive email inboxes. DeskMate fixes this.
</p> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "id": "problem" }, { "default": ($$result3) => renderTemplate` <div class="mb-[80px]"> ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "sectionTitle": "The Problem", "description": "Every college has the same friction between official information and the students who need it." })} <div class="grid sm:grid-cols-3 gap-5"> ${problems.map((p) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "isUnderline": true }, { "default": ($$result4) => renderTemplate` <div${addAttribute(`p-8 rounded-[45px] h-full ${p.bg}`, "class")}> <h3 class="text-xl font-medium mb-3">${p.title}</h3> <p class="text-sm leading-relaxed opacity-80">${p.description}</p> </div> ` })}`)} </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "id": "solution" }, { "default": ($$result3) => renderTemplate` <div class="mb-[80px]"> <div class="bg-dark rounded-[45px] p-12 md:p-16 border border-dark shadow-[0px_5px_0px_#191a23]"> <div class="grid md:grid-cols-2 gap-12 text-gray items-center"> <div> <span class="text-green text-sm uppercase tracking-widest mb-4 block">Our Solution</span> <h2 class="text-3xl md:text-4xl font-medium mb-6 leading-tight">
A 24/7 assistant that only tells the truth
</h2> <p class="text-[#aaa] leading-relaxed mb-6">
DeskMate reads all official college documents and answers student questions from that knowledge — nothing else. Every answer includes the source document and page number. Every dead end routes to a real staff member.
</p> <a href="/app/chat" class="btn-tertiary px-8 py-4 rounded-2xl inline-block">
Try It Now
</a> </div> <div class="flex flex-col gap-4"> ${[
    "Answers only from official uploaded documents",
    "Every response cites source document and page number",
    "Works in English, Hindi, and Telugu",
    "Staff routing when AI cannot answer",
    "Admin uploads documents in under 10 minutes",
    "Automatic expiry of outdated documents"
  ].map((point) => renderTemplate`<div class="flex items-start gap-3"> <span class="text-green mt-0.5 shrink-0">&#10003;</span> <span class="text-[#ccc] text-sm">${point}</span> </div>`)} </div> </div> </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "id": "team" }, { "default": ($$result3) => renderTemplate` <div class="mb-[140px]"> ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "sectionTitle": "The Team", "description": "People who got frustrated by the college information problem and decided to solve it." })} <div class="grid sm:grid-cols-3 gap-5"> ${team.map((member) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "isUnderline": true }, { "default": ($$result4) => renderTemplate` <div class="bg-gray rounded-[45px] p-8"> <div class="w-16 h-16 rounded-full bg-dark flex items-center justify-center mb-4"> <span class="text-green text-2xl font-medium">${member.name.charAt(0)}</span> </div> <h3 class="font-medium text-dark text-lg">${member.name}</h3> <p class="text-sm text-[#666] mb-3">${member.role}</p> <div class="h-[1px] bg-[#ddd] mb-3"></div> <p class="text-sm text-[#555] leading-relaxed">${member.description}</p> </div> ` })}`)} </div> </div> ` })} ` })}`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/about.astro", void 0);

const $$file = "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
