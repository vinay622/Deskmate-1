/* empty css                                       */
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_Dkgve4vv.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_rIk5ueIC.mjs';
import { $ as $$Section } from '../../../chunks/Section_BhMDhRkP.mjs';
import { $ as $$Card } from '../../../chunks/Card_CloYrPdP.mjs';
import { s as staff } from '../../../chunks/staffData_iK-dcak-.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$StaffCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StaffCard;
  const { name, role, department, email, phone, room, hours, handles } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-6 bg-gray rounded-[45px]"> <div class="flex items-start justify-between"> <div class="flex-1 min-w-0"> <div class="flex items-center gap-2 mb-1"> <span class="text-xs bg-dark text-green px-2 py-0.5 rounded-full">${department}</span> </div> <h3 class="font-medium text-dark text-base">${name}</h3> <p class="text-sm text-[#666]">${role}</p> </div> <button class="text-xs btn-secondary px-3 py-1.5 rounded-lg shrink-0">Edit</button> </div> <div class="h-[1px] bg-[#ddd] my-3"></div> <div class="flex flex-col gap-1 text-sm text-[#555]"> <span>${room} &middot; ${hours}</span> <a${addAttribute(`mailto:${email}`, "href")} class="text-dark underline">${email}</a> <span>${phone}</span> </div> <div class="mt-3 flex flex-wrap gap-1"> ${handles.map((h) => renderTemplate`<span class="text-xs bg-[#e8e8e8] text-[#444] px-2 py-0.5 rounded-full">${h}</span>`)} </div> </div> ` })}`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/components/admin/StaffCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Staff = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <!-- Add Staff Modal --> <div id="staff-modal" class="fixed inset-0 bg-black/60 z-[100] hidden items-center justify-center p-4"> <div class="bg-white rounded-[45px] shadow-[0px_5px_0px_#191a23] border border-dark max-w-lg w-full p-10 max-h-[90vh] overflow-y-auto"> <div class="flex justify-between items-center mb-6"> <h2 class="text-2xl font-medium"><span class="greenhead">Add</span> Staff Member</h2> <button id="close-staff-modal" class="text-3xl text-[#666] hover:text-black leading-none">&times;</button> </div> <form id="staff-form" class="flex flex-col gap-4"> <div> <label class="block text-sm font-medium mb-1">Full Name</label> <input type="text" placeholder="e.g. Dr. Ramesh Kumar" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Role / Designation</label> <input type="text" placeholder="e.g. Fee Collection Officer" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Department</label> <select class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> <option>Finance</option> <option>Academics</option> <option>Accommodation</option> <option>Administration</option> <option>Resources</option> </select> </div> <div> <label class="block text-sm font-medium mb-1">Email</label> <input type="email" placeholder="email@college.edu.in" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Phone</label> <input type="text" placeholder="+91-40-00000000" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Office Room</label> <input type="text" placeholder="e.g. Admin Block, Room 104" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Office Hours</label> <input type="text" placeholder="e.g. Mon\u2013Fri, 9:00 AM \u2013 5:00 PM" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Handles (comma-separated topics)</label> <input type="text" placeholder="e.g. fee payment, late fine waiver" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <button type="button" id="mock-add-staff-btn" class="btn-primary w-full rounded-2xl py-4">
Add Staff Member
</button> </form> </div> </div> <script>
  document.getElementById('open-staff-modal').addEventListener('click', function() {
    var modal = document.getElementById('staff-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });

  document.getElementById('close-staff-modal').addEventListener('click', function() {
    var modal = document.getElementById('staff-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  });

  document.getElementById('staff-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.add('hidden');
      this.classList.remove('flex');
    }
  });

  document.getElementById('mock-add-staff-btn').addEventListener('click', function() {
    alert('Staff member added successfully!\\n\\nIn production, this would save to the database and DeskMate would route queries to this person accordingly.');
    var modal = document.getElementById('staff-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.getElementById('staff-form').reset();
  });
<\/script>`], ["", ` <!-- Add Staff Modal --> <div id="staff-modal" class="fixed inset-0 bg-black/60 z-[100] hidden items-center justify-center p-4"> <div class="bg-white rounded-[45px] shadow-[0px_5px_0px_#191a23] border border-dark max-w-lg w-full p-10 max-h-[90vh] overflow-y-auto"> <div class="flex justify-between items-center mb-6"> <h2 class="text-2xl font-medium"><span class="greenhead">Add</span> Staff Member</h2> <button id="close-staff-modal" class="text-3xl text-[#666] hover:text-black leading-none">&times;</button> </div> <form id="staff-form" class="flex flex-col gap-4"> <div> <label class="block text-sm font-medium mb-1">Full Name</label> <input type="text" placeholder="e.g. Dr. Ramesh Kumar" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Role / Designation</label> <input type="text" placeholder="e.g. Fee Collection Officer" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Department</label> <select class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> <option>Finance</option> <option>Academics</option> <option>Accommodation</option> <option>Administration</option> <option>Resources</option> </select> </div> <div> <label class="block text-sm font-medium mb-1">Email</label> <input type="email" placeholder="email@college.edu.in" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Phone</label> <input type="text" placeholder="+91-40-00000000" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Office Room</label> <input type="text" placeholder="e.g. Admin Block, Room 104" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Office Hours</label> <input type="text" placeholder="e.g. Mon\u2013Fri, 9:00 AM \u2013 5:00 PM" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Handles (comma-separated topics)</label> <input type="text" placeholder="e.g. fee payment, late fine waiver" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <button type="button" id="mock-add-staff-btn" class="btn-primary w-full rounded-2xl py-4">
Add Staff Member
</button> </form> </div> </div> <script>
  document.getElementById('open-staff-modal').addEventListener('click', function() {
    var modal = document.getElementById('staff-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });

  document.getElementById('close-staff-modal').addEventListener('click', function() {
    var modal = document.getElementById('staff-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  });

  document.getElementById('staff-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.add('hidden');
      this.classList.remove('flex');
    }
  });

  document.getElementById('mock-add-staff-btn').addEventListener('click', function() {
    alert('Staff member added successfully!\\\\n\\\\nIn production, this would save to the database and DeskMate would route queries to this person accordingly.');
    var modal = document.getElementById('staff-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.getElementById('staff-form').reset();
  });
<\/script>`])), renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Staff Directory \u2014 DeskMate Admin", "description": "Manage the staff directory for DeskMate routing." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "id": "staff" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-20 mb-20"> <!-- Header --> <div class="flex items-center justify-between mb-8 flex-wrap gap-4"> <div> <p class="text-sm text-[#666] mb-1"> <a href="/" class="underline">Home</a> /
<a href="/app/admin" class="underline">Admin</a> / Staff
</p> <h1 class="text-4xl font-medium"> <span class="greenhead">Staff</span> Directory
</h1> </div> <button id="open-staff-modal" class="btn-primary px-6 py-3 rounded-2xl">
Add Staff Member
</button> </div> <!-- Staff grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5"> ${staff.map((member) => renderTemplate`${renderComponent($$result3, "StaffCard", $$StaffCard, { "id": member.id, "name": member.name, "role": member.role, "department": member.department, "email": member.email, "phone": member.phone, "room": member.room, "hours": member.hours, "handles": member.handles })}`)} </div> </div> ` })} ` }));
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/app/admin/staff.astro", void 0);

const $$file = "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/app/admin/staff.astro";
const $$url = "/app/admin/staff";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Staff,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
