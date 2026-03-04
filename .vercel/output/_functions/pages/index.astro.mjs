/* empty css                                 */
import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, h as renderScript, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_Dkgve4vv.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_rIk5ueIC.mjs';
import { $ as $$Section } from '../chunks/Section_BhMDhRkP.mjs';
import { $ as $$SectionTitle } from '../chunks/SectionTitle_B4fvlm4d.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Card } from '../chunks/Card_CloYrPdP.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { index, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="accordion__item" class="accordion__item group h-[160px] bg-[#F3F3F3] overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]" data-astro-cid-kq6n5brs> <button class="accordion__toggle w-full h-[160px] flex items-center justify-between p-[60px] cursor-pointer"${addAttribute(`${title} accordion__item menu button`, "id")} aria-expanded="false"${addAttribute(`${title} accordion__item menu content`, "aria-controls")} data-astro-cid-kq6n5brs> <div class="flex items-center gap-[25px]" data-astro-cid-kq6n5brs> <span class="hidden sm:block sm:text-6xl" data-astro-cid-kq6n5brs>0${index}</span> ${title} </div> <div class="bg-gray w-[58px] h-[58px] flex justify-center items-center rounded-full border border-dark" data-astro-cid-kq6n5brs> <div class="accordion__icon h-10 w-10 transition-transform duration-300 flex justify-center items-center relative" aria-hidden="true" data-astro-cid-kq6n5brs></div> </div> </button> <div${addAttribute(`${title} accordion__item menu content`, "id")}${addAttribute(`${title} accordion__item menu button `, "aria-labelledby")} class="accordion__content px-[60px]" data-astro-cid-kq6n5brs> <div class="w-full h-[2px] bg-black" data-astro-cid-kq6n5brs></div> <p class="prose mb-4 mt-1 max-w-full pt-5 pb-[60px] transition-[height]" data-astro-cid-kq6n5brs> ${description} </p> </div> </div>  ${renderScript($$result, "C:/Users/vinay/projects/DeskMate/Positivus/src/components/ui/AccordionItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/components/ui/AccordionItem.astro", void 0);

const Testimonials = [
	{
		index: 1,
		name: "Arjun Reddy",
		role: "B.Tech 3rd Year, CSE",
		comment: "I used to spend 30 minutes hunting through PDFs every time I had a question about exams. DeskMate gives me the answer in 3 seconds with the exact page number. It has become my first stop for any college query."
	},
	{
		index: 2,
		name: "Sneha Patel",
		role: "B.Tech 2nd Year, ECE",
		comment: "The citation feature is what makes DeskMate trustworthy. When it tells me a fee deadline, I can see exactly which document and page it came from. No more guessing or relying on rumors from seniors."
	},
	{
		index: 3,
		name: "Vikram Rao",
		role: "M.Tech 1st Year",
		comment: "I asked a question about scholarship eligibility in Telugu and got a clear answer with the document source. As someone who is more comfortable in my mother tongue, this made a huge difference."
	},
	{
		index: 4,
		name: "Divya Krishnan",
		role: "B.Tech 4th Year, Mech",
		comment: "During placement season I needed to know leave rules quickly. DeskMate told me the exact policy from the Student Handbook. The staff routing is also brilliant — it told me exactly who to contact when I had an edge case."
	},
	{
		index: 5,
		name: "Rahul Verma",
		role: "B.Tech 1st Year",
		comment: "As a new student I had hundreds of questions about everything. DeskMate is honestly better than asking seniors because seniors sometimes give outdated information. DeskMate answers from the latest official documents."
	},
	{
		index: 6,
		name: "Lakshmi Narayan",
		role: "B.Tech 3rd Year, IT",
		comment: "The admin who uploaded the documents said it only took 10 minutes to upload and configure everything. From an admin perspective, it is so simple. No coding needed, just upload PDFs and assign categories."
	}
];

const $$SwiperSlider = createComponent(($$result, $$props, $$slots) => {
  const processedTestimonials = Testimonials.map((item, index, array) => ({
    ...item,
    index: index + 1,
    length: array.length
  }));
  return renderTemplate`${maybeRenderHead()}<div id="ProjectSlider" class="swiper mt-10"${addAttribute({
    "--swiper-pagination-color": "var(--green)",
    "--swiper-pagination-bullet-inactive-color": "#fff",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "19px",
    "--swiper-pagination-bullet-horizontal-gap": "10px"
  }, "style")} data-astro-cid-klye6o2m> <div class="swiper-wrapper mt-[84px] mb-[124px]" data-cursor="swipe" data-astro-cid-klye6o2m> ${processedTestimonials.map((item) => renderTemplate`<div class="swiper-slide text-gray flex flex-col" role="group"${addAttribute(`${item.index} / ${item.length}`, "aria-label")} data-astro-cid-klye6o2m> <div class="flex flex-col justify-center items-center py-[48px] px-6 sm:px-[52px]" data-astro-cid-klye6o2m> <p class="bubble" data-astro-cid-klye6o2m>
"${item.comment}"
</p> </div> <div class="w-full px-10 sm:px-20 " data-astro-cid-klye6o2m> <div class="text-green font-medium" data-astro-cid-klye6o2m>${item.name}</div> <div data-astro-cid-klye6o2m>${item.role}</div> </div> </div>`)} </div> <div class="flex justify-around lg:justify-center mb-[68px] lg:gap-[189px]" data-astro-cid-klye6o2m> <div class="swiper-button-prev w-7 h-7 sm:w-10 sm:h-10" data-astro-cid-klye6o2m> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-astro-cid-klye6o2m><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-klye6o2m></path></svg> </div> <div class="swiper-pagination" data-astro-cid-klye6o2m></div> <div class="swiper-button-next w-7 h-7 sm:w-10 sm:h-10 rotate-180" data-astro-cid-klye6o2m> <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 448 512" data-astro-cid-klye6o2m> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-klye6o2m></path></svg> </div> </div> </div> ${renderScript($$result, "C:/Users/vinay/projects/DeskMate/Positivus/src/components/ui/SwiperSlider.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/components/ui/SwiperSlider.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "testimonials" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-20"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "What Students Say", "description": "Students across colleges share how DeskMate changed the way they find information and navigate college life." })} <div class="rounded-[45px] bg-dark mb-[150px] text-gray"> ${renderComponent($$result2, "SwiperSlider", $$SwiperSlider, {})} </div> </div> ` })}`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/components/sections/Testimonials.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Document-Grounded Answers",
      description: "AI only answers from officially uploaded PDFs \u2014 no external knowledge, no hallucinations. Every answer traces back to a real document.",
      bg: "bg-gray"
    },
    {
      title: "Exact Citations",
      description: "Every answer includes the source document name and page number. Students can verify information directly in the original circular.",
      bg: "bg-green"
    },
    {
      title: "3 Languages",
      description: "Students can ask questions in English, Hindi, or Telugu. DeskMate understands and responds accurately in all three languages.",
      bg: "bg-dark text-gray"
    },
    {
      title: "Smart Staff Routing",
      description: "When AI cannot answer, it doesn't say 'I don't know'. It routes the student to the exact staff member who can help.",
      bg: "bg-gray"
    },
    {
      title: "Simple Admin Upload",
      description: "IT staff upload PDFs via a drag-and-drop interface. Set category, expiry date, and the system indexes the document automatically.",
      bg: "bg-green"
    },
    {
      title: "Always Up-to-Date",
      description: "When admins update documents, answers update instantly. Expired documents stop appearing in responses automatically.",
      bg: "bg-dark text-gray"
    }
  ];
  const howItWorks = [
    {
      index: 1,
      title: "Student Asks a Question",
      description: "A student opens DeskMate and types a question in plain language \u2014 in English, Hindi, or Telugu. 'When is the fee deadline?' or 'How do I apply for hostel?' No navigation, no PDFs, no forms."
    },
    {
      index: 2,
      title: "DeskMate Searches Official Documents",
      description: "DeskMate instantly searches through all officially uploaded college documents. It uses keyword and semantic matching to find the most relevant content from PDFs, circulars, and handbooks."
    },
    {
      index: 3,
      title: "Answer with Document Citation",
      description: "Within seconds, DeskMate responds with the accurate answer AND the exact document name and page number it came from. Students can verify the information directly in the source document."
    },
    {
      index: 4,
      title: "Staff Routing for Complex Cases",
      description: "If a query is too specific or not covered in any document, DeskMate doesn't guess. It identifies the correct staff member \u2014 accounts office, examination cell, hostel warden \u2014 and provides their contact details."
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "DeskMate \u2014 College AI Assistant", "description": "DeskMate is your college AI assistant. Get instant answers from official documents in English, Hindi, and Telugu \u2014 with exact citations, 24/7." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Section", $$Section, { "id": "hero" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-20 mb-[80px]"> <div class="flex flex-col items-center text-center"> <div class="mb-6"> <span class="greenhead text-sm uppercase tracking-widest">College AI Assistant</span> </div> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-6 max-w-4xl">
Your College <span class="greenhead">Knowledge Base</span> Answers in Seconds
</h1> <p class="text-lg text-[#555] mb-8 max-w-2xl">
DeskMate reads every official circular, handbook, and policy document — and answers student questions instantly with exact citations. No hallucinations. No waiting.
</p> <div class="flex flex-wrap justify-center gap-4 mb-8"> <a href="/app/chat" class="btn-primary px-8 py-4 rounded-2xl text-base">
Open DeskMate
</a> <a href="#how-it-works" class="btn-secondary px-8 py-4 rounded-2xl text-base">
How It Works
</a> </div> <!-- Stat pills --> <div class="flex flex-wrap justify-center gap-3"> <span class="greenhead text-sm px-4 py-1.5">24/7 Available</span> <span class="blackhead text-sm px-4 py-1.5">3 Languages</span> <span class="greenhead text-sm px-4 py-1.5">0 Hallucinations</span> </div> </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "id": "features" }, { "default": ($$result3) => renderTemplate` <div class="mb-[80px]"> ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "sectionTitle": "Why DeskMate", "description": "Built specifically for Indian colleges. No generic AI \u2014 every answer is sourced from your institution's own documents." })} <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"> ${features.map((f) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "isUnderline": true }, { "default": ($$result4) => renderTemplate` <div${addAttribute(`p-8 rounded-[45px] h-full ${f.bg}`, "class")}> <h3 class="text-xl font-medium mb-3">${f.title}</h3> <p class="text-sm leading-relaxed opacity-80">${f.description}</p> </div> ` })}`)} </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "id": "how-it-works" }, { "default": ($$result3) => renderTemplate` <div class="mb-[80px]"> ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "sectionTitle": "How It Works", "description": "From question to verified answer in under four seconds \u2014 here's what happens behind the scenes." })} <div> ${howItWorks.map((item) => renderTemplate`${renderComponent($$result3, "AccordionItem", $$AccordionItem, { "index": item.index, "title": item.title, "description": item.description })}`)} </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "id": "stats" }, { "default": ($$result3) => renderTemplate` <div class="mb-[80px]"> <div class="bg-dark rounded-[45px] py-16 px-8 border border-dark shadow-[0px_5px_0px_#191a23]"> <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center text-gray"> <div> <div class="text-5xl font-medium text-green mb-2">10,000+</div> <p class="text-[#aaa]">Queries Answered</p> </div> <div class="sm:border-x border-[#2d2e3a]"> <div class="text-5xl font-medium text-green mb-2">50+</div> <p class="text-[#aaa]">Documents Indexed</p> </div> <div> <div class="text-5xl font-medium text-green mb-2">3</div> <p class="text-[#aaa]">Languages Supported</p> </div> </div> </div> </div> ` })}  ${renderComponent($$result2, "Testimonials", $$Testimonials, {})}  ${renderComponent($$result2, "Section", $$Section, { "id": "cta" }, { "default": ($$result3) => renderTemplate` <div class="mb-[140px]"> <div class="bg-dark rounded-[45px] py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-dark shadow-[0px_5px_0px_#191a23]"> <div class="text-gray"> <h2 class="text-3xl md:text-4xl font-medium mb-3">
Ready to answer every<br> <span class="text-green">student question instantly?</span> </h2> <p class="text-[#aaa]">Try DeskMate with demo data — no signup required.</p> </div> <a href="/app/chat" class="btn-tertiary px-10 py-5 rounded-2xl text-lg font-medium whitespace-nowrap">
Start Asking
</a> </div> </div> ` })} ` })}`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/index.astro", void 0);

const $$file = "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
