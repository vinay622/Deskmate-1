/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Dkgve4vv.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_rIk5ueIC.mjs';
import { $ as $$Section } from '../../chunks/Section_BhMDhRkP.mjs';
import { $ as $$Card } from '../../chunks/Card_CloYrPdP.mjs';
import { d as documents } from '../../chunks/documentsData_CuAI0nSB.mjs';
import { s as staff } from '../../chunks/staffData_iK-dcak-.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    { label: "Total Documents", value: documents.length, trend: null },
    { label: "Active Staff", value: staff.length, trend: null },
    { label: "Queries Today", value: 142, trend: "+12%" },
    { label: "Pending Issues", value: 2, trend: null }
  ];
  const recentDocs = documents.slice(0, 5);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Admin Dashboard \u2014 DeskMate", "description": "Manage DeskMate documents and staff directory." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "id": "admin" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-20 mb-20"> <!-- Header --> <div class="flex items-center justify-between mb-8 flex-wrap gap-4"> <div> <p class="text-sm text-[#666] mb-1"> <a href="/" class="underline">Home</a> / Admin
</p> <h1 class="text-4xl font-medium"> <span class="greenhead">Admin</span> Dashboard
</h1> </div> <a href="/app/chat" class="btn-secondary px-5 py-3 rounded-2xl">Open Chat</a> </div> <!-- Stats Grid --> <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10"> ${stats.map((stat) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "isUnderline": true }, { "default": ($$result4) => renderTemplate` <div class="p-6 bg-gray rounded-[45px]"> <p class="text-[#666] text-sm">${stat.label}</p> <div class="flex items-end gap-2 mt-1"> <span class="text-4xl font-medium">${stat.value}</span> ${stat.trend && renderTemplate`<span class="text-green text-sm mb-1">${stat.trend}</span>`} </div> </div> ` })}`)} </div> <!-- Quick Actions --> <div class="flex gap-4 mb-10 flex-wrap"> <a href="/app/admin/documents" class="btn-primary px-8 py-4 rounded-2xl">
Manage Documents
</a> <a href="/app/admin/staff" class="btn-secondary px-8 py-4 rounded-2xl">
Manage Staff
</a> </div> <!-- Recent Documents Table --> <div class="mb-10"> <h2 class="text-2xl font-medium mb-4">Recent Documents</h2> <div class="bg-gray rounded-[45px] overflow-hidden border border-dark shadow-[0px_5px_0px_#191a23]"> <table class="w-full"> <thead> <tr class="border-b border-[#ddd]"> <th class="text-left p-4 pl-8 font-medium text-dark">Document</th> <th class="text-left p-4 font-medium text-dark hidden md:table-cell">Category</th> <th class="text-left p-4 font-medium text-dark hidden lg:table-cell">Uploaded</th> <th class="text-left p-4 font-medium text-dark">Status</th> </tr> </thead> <tbody> ${recentDocs.map((doc) => renderTemplate`<tr class="border-b border-[#eee] last:border-0 hover:bg-[#e8e8e8] transition-colors"> <td class="p-4 pl-8 text-sm font-medium">${doc.name}</td> <td class="p-4 text-sm text-[#666] hidden md:table-cell">${doc.category}</td> <td class="p-4 text-sm text-[#666] hidden lg:table-cell">${doc.uploadedAt}</td> <td class="p-4"> <span${addAttribute(`text-xs px-2 py-0.5 rounded-full font-medium ${doc.status === "active" ? "bg-green text-dark" : doc.status === "expiring" ? "bg-yellow-400 text-dark" : "bg-red-100 text-red-600"}`, "class")}> ${doc.status === "active" ? "Active" : doc.status === "expiring" ? "Expiring" : "Expired"} </span> </td> </tr>`)} </tbody> </table> </div> <div class="mt-3 text-right"> <a href="/app/admin/documents" class="text-sm underline text-[#666]">View all documents &rarr;</a> </div> </div> <!-- System Status --> ${renderComponent($$result3, "Card", $$Card, { "isUnderline": true }, { "default": ($$result4) => renderTemplate` <div class="p-8 bg-dark text-gray rounded-[45px]"> <h3 class="text-green text-xl mb-4">System Status</h3> <div class="grid md:grid-cols-3 gap-4 text-sm"> <div class="flex items-center gap-2"> <div class="w-2 h-2 rounded-full bg-green shrink-0"></div> <span>AI Status: Online</span> </div> <div class="flex items-center gap-2"> <div class="w-2 h-2 rounded-full bg-green shrink-0"></div> <span>Documents Last Indexed: Today 09:32</span> </div> <div class="flex items-center gap-2"> <div class="w-2 h-2 rounded-full bg-green shrink-0"></div> <span>Total Indexed Pages: 107</span> </div> </div> </div> ` })} </div> ` })} ` })}`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/app/admin/index.astro", void 0);

const $$file = "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/app/admin/index.astro";
const $$url = "/app/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
