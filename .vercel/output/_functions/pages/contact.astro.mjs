/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderComponent, h as renderScript, a as renderTemplate } from '../chunks/astro/server_Dkgve4vv.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_rIk5ueIC.mjs';
import { $ as $$Section } from '../chunks/Section_BhMDhRkP.mjs';
import { $ as $$SectionTitle } from '../chunks/SectionTitle_B4fvlm4d.mjs';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CPnNKLoN.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const decorForm = new Proxy({"src":"/_astro/contact-pic.BrB0SfUf.png","width":692,"height":649,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/vinay/projects/DeskMate/Positivus/src/assets/pics/contact-pic.png";
							}
							
							return target[name];
						}
					});

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex relative justify-start items-center p-[60px] bg-[#F3F3F3] rounded-[45px] overflow-hidden" data-astro-cid-2lkv3ujd> <!-- Success state (hidden by default) --> <div id="form-success" class="hidden w-full flex flex-col items-center justify-center py-16 text-center gap-5" data-astro-cid-2lkv3ujd> <div class="w-16 h-16 rounded-full bg-dark flex items-center justify-center mb-2" data-astro-cid-2lkv3ujd> <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b9ff66" stroke-width="2.5" data-astro-cid-2lkv3ujd><polyline points="20 6 9 17 4 12" data-astro-cid-2lkv3ujd></polyline></svg> </div> <h3 class="text-2xl font-medium text-dark" data-astro-cid-2lkv3ujd>Message received!</h3> <p class="text-[#555] max-w-xs leading-relaxed" data-astro-cid-2lkv3ujd>Thanks for reaching out. We'll get back to you at the email you provided within 24 hours.</p> <button id="form-reset-btn" class="btn-secondary px-8 py-3 rounded-2xl text-sm mt-2" data-astro-cid-2lkv3ujd>Send another message</button> </div> <form id="contact-form" class="bg-gray sm:p-6 h-full w-full lg:max-w-lg" data-astro-cid-2lkv3ujd> <div class="flex flex-col sm:flex-row gap-[35px] sm:items-center mb-10" data-astro-cid-2lkv3ujd> <div class="flex items-center gap-[14px]" data-astro-cid-2lkv3ujd> <input type="checkbox" id="checkbox1" name="checkbox1" class="form-checkbox text-black" data-astro-cid-2lkv3ujd> <label for="checkbox1" class="text-black" data-astro-cid-2lkv3ujd>General Inquiry</label> </div> <div class="flex items-center gap-[14px]" data-astro-cid-2lkv3ujd> <input type="checkbox" id="checkbox2" name="checkbox2" class="form-checkbox text-black" data-astro-cid-2lkv3ujd> <label for="checkbox2" class="flex items-center text-black" data-astro-cid-2lkv3ujd>College Partnership</label> </div> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="name" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Name*</label> <input type="text" id="name" name="name" placeholder="Your name" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none focus:border-[#b9ff66] transition-colors" data-astro-cid-2lkv3ujd> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="email" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Email*</label> <input type="email" id="email" name="email" placeholder="your@college.edu.in" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none focus:border-[#b9ff66] transition-colors" data-astro-cid-2lkv3ujd> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="message" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Message*</label> <textarea id="message" name="message" placeholder="What would you like to know about DeskMate?" rows="4" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none focus:border-[#b9ff66] transition-colors resize-none" data-astro-cid-2lkv3ujd></textarea> </div> <button type="submit" id="form-submit-btn" name="submit" class="btn-primary w-full flex items-center justify-center gap-2" data-astro-cid-2lkv3ujd> <span id="submit-label" data-astro-cid-2lkv3ujd>Send Message</span> <svg id="submit-spinner" class="hidden animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-2lkv3ujd><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" data-astro-cid-2lkv3ujd></path></svg> </button> </form> <picture class="absolute right-[-25%] top-[2%] bottom-[2%] hidden lg:block" data-astro-cid-2lkv3ujd> ${renderComponent($$result, "Image", $$Image, { "src": decorForm, "alt": "decor", "data-astro-cid-2lkv3ujd": true })} </picture> </div>  ${renderScript($$result, "C:/Users/vinay/projects/DeskMate/Positivus/src/components/ui/Form.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/components/ui/Form.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Contact \u2014 DeskMate", "description": "Get in touch with the DeskMate team. Questions, partnerships, or integration requests." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "id": "contact" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-20 mb-[140px]"> ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "sectionTitle": "Contact DeskMate", "description": "Have a question, suggestion, or want to integrate DeskMate at your institution? We respond within 24 hours on working days." })} <div class="grid lg:grid-cols-2 gap-8 items-start"> <!-- Form --> ${renderComponent($$result3, "Form", $$Form, {})} <!-- Contact Info --> <div class="bg-dark text-gray rounded-[45px] p-10 border border-dark shadow-[0px_5px_0px_#191a23]"> <h3 class="text-green text-2xl font-medium mb-8">Get in Touch</h3> <div class="flex flex-col gap-6"> <div> <p class="text-[#555] text-xs uppercase tracking-wider mb-1">General Support</p> <a href="mailto:support@deskmate.app" class="text-green underline">support@deskmate.app</a> </div> <div> <p class="text-[#555] text-xs uppercase tracking-wider mb-1">College Partnerships</p> <a href="mailto:partnerships@deskmate.app" class="text-green underline">partnerships@deskmate.app</a> </div> <div> <p class="text-[#555] text-xs uppercase tracking-wider mb-1">Response Time</p> <p class="text-[#aaa]">Within 24 hours on working days</p> </div> </div> <div class="h-[1px] bg-[#2d2e3a] my-8"></div> <div> <p class="text-[#555] text-xs uppercase tracking-wider mb-3">For Colleges</p> <p class="text-[#aaa] text-sm leading-relaxed">
DeskMate can be deployed at your institution in under a week. We handle document indexing, staff directory setup, and training for your IT team. Contact partnerships@ to get started.
</p> </div> </div> </div> </div> ` })} ` })}`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/contact.astro", void 0);

const $$file = "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
