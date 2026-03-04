/* empty css                                       */
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_Dkgve4vv.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_rIk5ueIC.mjs';
import { $ as $$Section } from '../../../chunks/Section_BhMDhRkP.mjs';
import { $ as $$Card } from '../../../chunks/Card_CloYrPdP.mjs';
import { d as documents } from '../../../chunks/documentsData_CuAI0nSB.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$DocumentCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DocumentCard;
  const { name, category, uploadedBy, uploadedAt, expiryDate, pages, size, status, description } = Astro2.props;
  const statusConfig = {
    active: { label: "Active", cls: "bg-green text-dark" },
    expiring: { label: "Expiring Soon", cls: "bg-yellow-400 text-dark" },
    expired: { label: "Expired", cls: "bg-red-500 text-white" }
  };
  const s = statusConfig[status];
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-6 bg-gray rounded-[45px]"> <div class="flex items-start justify-between gap-4"> <div class="flex-1 min-w-0"> <div class="flex items-center gap-2 mb-1 flex-wrap"> <span${addAttribute(`text-xs font-medium px-2 py-0.5 rounded-full ${s.cls}`, "class")}>${s.label}</span> <span class="text-xs text-[#666] bg-[#e0e0e0] px-2 py-0.5 rounded-full">${category}</span> </div> <h3 class="font-medium text-dark text-base truncate">${name}</h3> <p class="text-sm text-[#777] mt-1 line-clamp-2">${description}</p> </div> <div class="flex gap-2 shrink-0"> <button class="text-xs btn-secondary px-3 py-1.5 rounded-lg">View</button> <button class="text-xs bg-red-100 text-red-600 px-3 py-1.5 rounded-lg border border-red-200 hover:bg-red-200 transition-colors">Delete</button> </div> </div> <div class="h-[1px] bg-[#ddd] my-3"></div> <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#777]"> <span>${pages} pages &middot; ${size}</span> <span>Uploaded by ${uploadedBy} on ${uploadedAt}</span> <span>Expires: ${expiryDate}</span> </div> </div> ` })}`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/components/admin/DocumentCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Documents = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <!-- Upload Modal --> <div id="upload-modal" class="fixed inset-0 bg-black/60 z-[100] hidden items-center justify-center p-4"> <div class="bg-white rounded-[45px] shadow-[0px_5px_0px_#191a23] border border-dark max-w-lg w-full p-10"> <div class="flex justify-between items-center mb-6"> <h2 class="text-2xl font-medium"><span class="greenhead">Upload</span> Document</h2> <button id="close-modal" class="text-3xl text-[#666] hover:text-black leading-none">&times;</button> </div> <form id="upload-form" class="flex flex-col gap-4"> <div> <label class="block text-sm font-medium mb-1">Document File (PDF)</label> <input type="file" accept=".pdf" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm"> </div> <div> <label class="block text-sm font-medium mb-1">Title / Display Name</label> <input type="text" placeholder="e.g. Fee Structure 2024-25.pdf" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Category</label> <select class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> <option>Finance</option> <option>Academics</option> <option>Accommodation</option> <option>Resources</option> <option>General</option> </select> </div> <div> <label class="block text-sm font-medium mb-1">Expiry Date</label> <input type="date" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Description (optional)</label> <textarea class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none resize-none" rows="2"></textarea> </div> <button type="button" id="mock-upload-btn" class="btn-primary w-full rounded-2xl py-4">
Upload Document
</button> </form> </div> </div> <script>
  // Modal open/close
  document.getElementById('open-upload-modal').addEventListener('click', function() {
    var modal = document.getElementById('upload-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });

  document.getElementById('close-modal').addEventListener('click', function() {
    var modal = document.getElementById('upload-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  });

  document.getElementById('upload-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.add('hidden');
      this.classList.remove('flex');
    }
  });

  // Mock upload success
  document.getElementById('mock-upload-btn').addEventListener('click', function() {
    alert('Document uploaded successfully!\\n\\nIn production, this would process and index the PDF for AI queries.');
    var modal = document.getElementById('upload-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.getElementById('upload-form').reset();
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var filter = btn.dataset.filter;

      document.querySelectorAll('.filter-btn').forEach(function(b) {
        b.classList.remove('bg-dark', 'text-white');
        b.classList.add('border', 'border-dark');
      });

      btn.classList.add('bg-dark', 'text-white');
      btn.classList.remove('border', 'border-dark');

      document.querySelectorAll('.doc-item').forEach(function(item) {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
<\/script>`], ["", ` <!-- Upload Modal --> <div id="upload-modal" class="fixed inset-0 bg-black/60 z-[100] hidden items-center justify-center p-4"> <div class="bg-white rounded-[45px] shadow-[0px_5px_0px_#191a23] border border-dark max-w-lg w-full p-10"> <div class="flex justify-between items-center mb-6"> <h2 class="text-2xl font-medium"><span class="greenhead">Upload</span> Document</h2> <button id="close-modal" class="text-3xl text-[#666] hover:text-black leading-none">&times;</button> </div> <form id="upload-form" class="flex flex-col gap-4"> <div> <label class="block text-sm font-medium mb-1">Document File (PDF)</label> <input type="file" accept=".pdf" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm"> </div> <div> <label class="block text-sm font-medium mb-1">Title / Display Name</label> <input type="text" placeholder="e.g. Fee Structure 2024-25.pdf" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Category</label> <select class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> <option>Finance</option> <option>Academics</option> <option>Accommodation</option> <option>Resources</option> <option>General</option> </select> </div> <div> <label class="block text-sm font-medium mb-1">Expiry Date</label> <input type="date" class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none"> </div> <div> <label class="block text-sm font-medium mb-1">Description (optional)</label> <textarea class="w-full border border-dark rounded-[14px] px-4 py-3 text-sm outline-none resize-none" rows="2"></textarea> </div> <button type="button" id="mock-upload-btn" class="btn-primary w-full rounded-2xl py-4">
Upload Document
</button> </form> </div> </div> <script>
  // Modal open/close
  document.getElementById('open-upload-modal').addEventListener('click', function() {
    var modal = document.getElementById('upload-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });

  document.getElementById('close-modal').addEventListener('click', function() {
    var modal = document.getElementById('upload-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  });

  document.getElementById('upload-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.add('hidden');
      this.classList.remove('flex');
    }
  });

  // Mock upload success
  document.getElementById('mock-upload-btn').addEventListener('click', function() {
    alert('Document uploaded successfully!\\\\n\\\\nIn production, this would process and index the PDF for AI queries.');
    var modal = document.getElementById('upload-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.getElementById('upload-form').reset();
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var filter = btn.dataset.filter;

      document.querySelectorAll('.filter-btn').forEach(function(b) {
        b.classList.remove('bg-dark', 'text-white');
        b.classList.add('border', 'border-dark');
      });

      btn.classList.add('bg-dark', 'text-white');
      btn.classList.remove('border', 'border-dark');

      document.querySelectorAll('.doc-item').forEach(function(item) {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
<\/script>`])), renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Document Management \u2014 DeskMate Admin", "description": "Upload and manage college documents for DeskMate." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "id": "documents" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-20 mb-20"> <!-- Header --> <div class="flex items-center justify-between mb-8 flex-wrap gap-4"> <div> <p class="text-sm text-[#666] mb-1"> <a href="/" class="underline">Home</a> /
<a href="/app/admin" class="underline">Admin</a> / Documents
</p> <h1 class="text-4xl font-medium"> <span class="greenhead">Documents</span> </h1> </div> <button id="open-upload-modal" class="btn-primary px-6 py-3 rounded-2xl">
Upload Document
</button> </div> <!-- Filter bar --> <div class="flex gap-3 mb-6 flex-wrap"> <button class="filter-btn text-sm px-4 py-2 rounded-full bg-dark text-white" data-filter="all">
All (${documents.length})
</button> <button class="filter-btn text-sm px-4 py-2 rounded-full border border-dark hover:bg-dark hover:text-white transition-colors" data-filter="Finance">Finance</button> <button class="filter-btn text-sm px-4 py-2 rounded-full border border-dark hover:bg-dark hover:text-white transition-colors" data-filter="Academics">Academics</button> <button class="filter-btn text-sm px-4 py-2 rounded-full border border-dark hover:bg-dark hover:text-white transition-colors" data-filter="Accommodation">Accommodation</button> <button class="filter-btn text-sm px-4 py-2 rounded-full border border-dark hover:bg-dark hover:text-white transition-colors" data-filter="Resources">Resources</button> <button class="filter-btn text-sm px-4 py-2 rounded-full border border-dark hover:bg-dark hover:text-white transition-colors" data-filter="General">General</button> </div> <!-- Documents grid --> <div class="grid lg:grid-cols-2 gap-5" id="doc-grid"> ${documents.map((doc) => renderTemplate`<div class="doc-item"${addAttribute(doc.category, "data-category")}> ${renderComponent($$result3, "DocumentCard", $$DocumentCard, { "id": doc.id, "name": doc.name, "category": doc.category, "uploadedBy": doc.uploadedBy, "uploadedAt": doc.uploadedAt, "expiryDate": doc.expiryDate, "pages": doc.pages, "size": doc.size, "status": doc.status, "description": doc.description })} </div>`)} </div> </div> ` })} ` }));
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/app/admin/documents.astro", void 0);

const $$file = "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/app/admin/documents.astro";
const $$url = "/app/admin/documents";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Documents,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
