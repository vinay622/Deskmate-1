/* empty css                                    */
import { c as createComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead, r as renderComponent } from '../../chunks/astro/server_Dkgve4vv.mjs';
import 'kleur/colors';
import { $ as $$AuthLayout } from '../../chunks/AuthLayout_92tlkeUw.mjs';
import 'clsx';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const demoResponses = [
	{
		id: "fee-01",
		topic: "fees",
		keywords: [
			"fee",
			"fees",
			"tuition",
			"payment",
			"pay",
			"amount",
			"cost",
			"semester",
			"charges"
		],
		question: "What are the semester fees?",
		answer: "The semester fee for B.Tech is ₹85,000 per semester for general category students and ₹42,500 for SC/ST category. This includes tuition fee, lab fee, and library charges. It does not include hostel or mess charges. Last date to pay without fine is the 15th of the month following semester start.",
		source: "Fee Structure 2024-25.pdf",
		page: 3,
		category: "Finance",
		routeTo: null
	},
	{
		id: "fee-02",
		topic: "fees",
		keywords: [
			"fine",
			"late",
			"overdue",
			"penalty",
			"deadline"
		],
		question: "What is the late payment fine?",
		answer: "A fine of ₹500 per day is charged for fee payment after the due date. Maximum fine is ₹5,000. After 30 days of non-payment, the student's portal access is suspended until the dues are cleared.",
		source: "Fee Structure 2024-25.pdf",
		page: 4,
		category: "Finance",
		routeTo: null
	},
	{
		id: "hostel-01",
		topic: "hostel",
		keywords: [
			"hostel",
			"accommodation",
			"room",
			"dormitory",
			"dorm",
			"stay",
			"residence",
			"hall"
		],
		question: "How do I apply for hostel?",
		answer: "Hostel applications open every May via the student portal. You must fill the hostel application form, submit a medical fitness certificate, and pay a refundable deposit of ₹10,000. Allotment is based on merit and distance from hometown. Results are announced in July.",
		source: "Hostel Regulations 2024.pdf",
		page: 1,
		category: "Accommodation",
		routeTo: null
	},
	{
		id: "hostel-02",
		topic: "hostel",
		keywords: [
			"mess",
			"food",
			"canteen",
			"meal",
			"dining",
			"eat"
		],
		question: "What are the mess charges?",
		answer: "Monthly mess charges are ₹3,200 for the standard meal plan (3 meals/day). A vegetarian-only plan is available at ₹2,800/month. Mess charges are paid separately from tuition via the messbill portal. Students can opt out with a 30-day notice.",
		source: "Hostel Regulations 2024.pdf",
		page: 6,
		category: "Accommodation",
		routeTo: null
	},
	{
		id: "exam-01",
		topic: "exams",
		keywords: [
			"exam",
			"examination",
			"schedule",
			"timetable",
			"date",
			"when",
			"test"
		],
		question: "When are the semester exams?",
		answer: "End semester examinations for Semester 5 and 6 are scheduled from November 18 to December 6, 2024. Practical exams run November 11–15. Hall tickets will be available on the student portal 10 days before the exam. Carry your original ID card to the exam hall.",
		source: "Academic Calendar 2024-25.pdf",
		page: 8,
		category: "Academics",
		routeTo: null
	},
	{
		id: "exam-02",
		topic: "exams",
		keywords: [
			"revaluation",
			"recheck",
			"marks",
			"result",
			"grade",
			"gpa",
			"cgpa",
			"score"
		],
		question: "How do I apply for revaluation?",
		answer: "Revaluation applications must be submitted within 15 days of result declaration. The fee is ₹500 per subject. Apply via the student portal under Examinations > Revaluation Request. Results for revaluation are typically announced within 45 days. Revalued marks are final.",
		source: "Examination Rules 2024.pdf",
		page: 12,
		category: "Academics",
		routeTo: null
	},
	{
		id: "leave-01",
		topic: "leave",
		keywords: [
			"leave",
			"absent",
			"attendance",
			"absence",
			"medical",
			"sick"
		],
		question: "How do I apply for leave?",
		answer: "Leave applications must be submitted at least 2 days in advance through the student portal under Applications > Leave Request. For medical leave, attach a doctor's certificate. Maximum 15 days of casual leave per semester is allowed. Leave beyond this requires HoD approval and will affect attendance percentage.",
		source: "Student Handbook 2024.pdf",
		page: 22,
		category: "Academics",
		routeTo: null
	},
	{
		id: "scholarship-01",
		topic: "scholarship",
		keywords: [
			"scholarship",
			"financial",
			"aid",
			"stipend",
			"merit",
			"concession",
			"discount",
			"free"
		],
		question: "What scholarships are available?",
		answer: "The college offers: (1) Merit Scholarship — top 5% of each class get 25% fee waiver. (2) State Government SC/ST/BC scholarships — apply via AP/TS Jagruthi portal. (3) National Scholarship Portal (NSP) for central government schemes. Deadline for NSP is typically October 31. Contact the Scholarship Cell, Admin Block Room 105.",
		source: "Scholarship Guidelines 2024.pdf",
		page: 2,
		category: "Finance",
		routeTo: null
	},
	{
		id: "library-01",
		topic: "library",
		keywords: [
			"library",
			"book",
			"borrow",
			"issue",
			"due",
			"return",
			"catalog",
			"journal"
		],
		question: "How many books can I borrow?",
		answer: "B.Tech students can borrow up to 3 books at a time for a period of 14 days. M.Tech and PhD students may borrow 5 books for 30 days. A fine of ₹2 per day per book applies after the due date. Books can be renewed online once if not reserved by another student.",
		source: "Library Rules 2024.pdf",
		page: 1,
		category: "Resources",
		routeTo: null
	},
	{
		id: "fallback",
		topic: "unknown",
		keywords: [
		],
		question: null,
		answer: "I couldn't find a direct answer to your question in the official documents. Please contact the relevant department directly. Mention your question, roll number, and preferred contact method.",
		source: null,
		page: null,
		category: null,
		routeTo: {
			name: "Student Helpdesk",
			email: "helpdesk@college.edu.in",
			phone: "+91-40-12345678",
			room: "Admin Block, Room 102",
			hours: "Mon–Fri, 9:00 AM – 5:00 PM"
		}
	}
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ChatInterface = createComponent(($$result, $$props, $$slots) => {
  const responsesJSON = JSON.stringify(demoResponses);
  return renderTemplate(_a || (_a = __template(["", '<div class="flex h-screen bg-white overflow-hidden" id="chat-root" data-astro-cid-mxf2l2hr> <!-- \u2550\u2550\u2550 SIDEBAR \u2550\u2550\u2550 --> <aside id="sidebar" class="w-[260px] shrink-0 flex flex-col bg-[#f8f9fb] border-r border-[#e8eaed] z-20 transition-transform duration-300" data-astro-cid-mxf2l2hr> <!-- Logo --> <div class="px-5 py-5 border-b border-[#e8eaed]" data-astro-cid-mxf2l2hr> <a href="/" class="flex items-center gap-2.5" data-astro-cid-mxf2l2hr> <div class="w-8 h-8 rounded-[10px] bg-dark flex items-center justify-center shrink-0" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b9ff66" stroke-width="2.5" data-astro-cid-mxf2l2hr><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" data-astro-cid-mxf2l2hr></path></svg> </div> <span class="text-base font-medium text-dark leading-none" data-astro-cid-mxf2l2hr>Desk<span style="background:#b9ff66;border-radius:5px;padding:1px 6px;color:#191a23;" data-astro-cid-mxf2l2hr>Mate</span></span> </a> </div> <!-- New Chat --> <div class="px-4 pt-4 pb-2" data-astro-cid-mxf2l2hr> <button id="new-chat-btn" class="w-full flex items-center justify-center gap-2 bg-dark text-white hover:bg-[#2d2e3a] rounded-[12px] py-2.5 px-4 text-sm font-medium transition-all duration-200" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-mxf2l2hr><path d="M12 5v14M5 12h14" data-astro-cid-mxf2l2hr></path></svg>\nNew Chat\n</button> </div> <!-- Recent Conversations --> <div class="flex-1 overflow-y-auto px-3 py-2" data-astro-cid-mxf2l2hr> <p class="text-[10px] uppercase tracking-widest text-[#aaa] font-medium px-2 mb-2" data-astro-cid-mxf2l2hr>Recent</p> <div id="recent-chats-list" class="flex flex-col gap-0.5" data-astro-cid-mxf2l2hr> <p id="no-history-msg" class="text-xs text-[#ccc] px-2 py-2 italic" data-astro-cid-mxf2l2hr>No conversations yet</p> </div> </div> <!-- User area --> <div class="px-4 py-4 border-t border-[#e8eaed]" data-astro-cid-mxf2l2hr> <div class="flex items-center gap-3" data-astro-cid-mxf2l2hr> <div class="w-8 h-8 rounded-full bg-dark flex items-center justify-center shrink-0" data-astro-cid-mxf2l2hr> <span class="text-[#b9ff66] text-xs font-semibold" data-astro-cid-mxf2l2hr>S</span> </div> <div class="flex-1 min-w-0" data-astro-cid-mxf2l2hr> <p class="text-xs font-medium text-dark truncate" data-astro-cid-mxf2l2hr>Student</p> <p class="text-[10px] text-[#aaa] truncate" data-astro-cid-mxf2l2hr>student@college.edu.in</p> </div> <a href="/" class="p-1.5 rounded-lg hover:bg-[#ececec] text-[#aaa] hover:text-dark transition-colors" title="Back to home" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-mxf2l2hr><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" data-astro-cid-mxf2l2hr></path><polyline points="16 17 21 12 16 7" data-astro-cid-mxf2l2hr></polyline><line x1="21" y1="12" x2="9" y2="12" data-astro-cid-mxf2l2hr></line></svg> </a> </div> </div> </aside> <!-- \u2550\u2550\u2550 MAIN CHAT AREA \u2550\u2550\u2550 --> <main class="flex-1 flex flex-col min-w-0 bg-white" data-astro-cid-mxf2l2hr> <!-- Top Header --> <header class="flex items-center justify-between px-6 py-4 border-b border-[#e8eaed] bg-white shrink-0" data-astro-cid-mxf2l2hr> <div class="flex items-center gap-3" data-astro-cid-mxf2l2hr> <button id="sidebar-toggle" class="lg:hidden p-1.5 rounded-lg hover:bg-[#f3f3f3] text-[#555] transition-colors" data-astro-cid-mxf2l2hr> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-mxf2l2hr><path d="M3 12h18M3 6h18M3 18h18" data-astro-cid-mxf2l2hr></path></svg> </button> <div class="flex items-center gap-2.5" data-astro-cid-mxf2l2hr> <div class="flex items-center gap-1.5" data-astro-cid-mxf2l2hr> <div class="w-2 h-2 rounded-full bg-green animate-pulse" data-astro-cid-mxf2l2hr></div> <span class="text-sm font-medium text-dark" data-astro-cid-mxf2l2hr>DeskMate AI</span> </div> <span class="text-[10px] text-[#aaa] border border-[#e0e0e0] rounded-full px-2 py-0.5 hidden sm:inline" data-astro-cid-mxf2l2hr>Official Docs Only</span> </div> </div> <div class="flex items-center gap-3" data-astro-cid-mxf2l2hr> <div class="flex items-center gap-2" data-astro-cid-mxf2l2hr> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2" data-astro-cid-mxf2l2hr><circle cx="12" cy="12" r="10" data-astro-cid-mxf2l2hr></circle><line x1="2" y1="12" x2="22" y2="12" data-astro-cid-mxf2l2hr></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-astro-cid-mxf2l2hr></path></svg> <select id="lang-selector" class="bg-transparent border border-[#e0e0e0] text-dark text-xs rounded-[8px] px-2 py-1.5 outline-none cursor-pointer focus:border-dark transition-colors" data-astro-cid-mxf2l2hr> <option value="en" data-astro-cid-mxf2l2hr>English</option> <option value="hi" data-astro-cid-mxf2l2hr>\u0939\u093F\u0902\u0926\u0940</option> <option value="te" data-astro-cid-mxf2l2hr>\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41</option> </select> </div> <div class="w-px h-5 bg-[#e8eaed]" data-astro-cid-mxf2l2hr></div> <div class="flex items-center gap-1.5 text-[#aaa]" data-astro-cid-mxf2l2hr> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-mxf2l2hr><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-astro-cid-mxf2l2hr></path><polyline points="14 2 14 8 20 8" data-astro-cid-mxf2l2hr></polyline></svg> <span class="text-xs hidden sm:inline" data-astro-cid-mxf2l2hr>7 docs indexed</span> </div> </div> </header> <!-- Message List --> <div id="message-list" class="flex-1 overflow-y-auto"', ` data-astro-cid-mxf2l2hr> <!-- Welcome state --> <div id="welcome-screen" class="h-full flex flex-col items-center justify-center px-6 py-12" data-astro-cid-mxf2l2hr> <div class="w-14 h-14 rounded-[18px] bg-dark flex items-center justify-center mb-5" data-astro-cid-mxf2l2hr> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b9ff66" stroke-width="2" data-astro-cid-mxf2l2hr><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" data-astro-cid-mxf2l2hr></path></svg> </div> <h2 class="text-2xl font-medium text-dark mb-2 text-center" data-astro-cid-mxf2l2hr>How can I help you today?</h2> <p class="text-sm text-[#888] text-center max-w-sm leading-relaxed mb-10" data-astro-cid-mxf2l2hr>
Ask me anything about your college \u2014 fees, hostel, exams, scholarships and more with exact document citations.
</p> <!-- Starter cards --> <div class="grid grid-cols-2 gap-3 w-full max-w-lg" data-astro-cid-mxf2l2hr> <button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="What are the semester fees for B.Tech?" data-astro-cid-mxf2l2hr> <div class="w-8 h-8 rounded-[10px] bg-[#b9ff66]/20 flex items-center justify-center mb-3" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5a7a00" stroke-width="2" data-astro-cid-mxf2l2hr><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" data-astro-cid-mxf2l2hr></path></svg> </div> <p class="text-xs font-medium text-dark mb-0.5" data-astro-cid-mxf2l2hr>Fees & Finance</p> <p class="text-[11px] text-[#888] leading-relaxed" data-astro-cid-mxf2l2hr>Semester fees, payment dates, fine structure</p> </button> <button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="How do I apply for hostel accommodation?" data-astro-cid-mxf2l2hr> <div class="w-8 h-8 rounded-[10px] bg-blue-100 flex items-center justify-center mb-3" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" data-astro-cid-mxf2l2hr><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-mxf2l2hr></path></svg> </div> <p class="text-xs font-medium text-dark mb-0.5" data-astro-cid-mxf2l2hr>Hostel & Accommodation</p> <p class="text-[11px] text-[#888] leading-relaxed" data-astro-cid-mxf2l2hr>Allotment, mess charges, rules</p> </button> <button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="When are the semester examinations scheduled?" data-astro-cid-mxf2l2hr> <div class="w-8 h-8 rounded-[10px] bg-orange-100 flex items-center justify-center mb-3" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" data-astro-cid-mxf2l2hr><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-astro-cid-mxf2l2hr></rect><line x1="16" y1="2" x2="16" y2="6" data-astro-cid-mxf2l2hr></line><line x1="8" y1="2" x2="8" y2="6" data-astro-cid-mxf2l2hr></line><line x1="3" y1="10" x2="21" y2="10" data-astro-cid-mxf2l2hr></line></svg> </div> <p class="text-xs font-medium text-dark mb-0.5" data-astro-cid-mxf2l2hr>Exams & Academics</p> <p class="text-[11px] text-[#888] leading-relaxed" data-astro-cid-mxf2l2hr>Exam dates, revaluation, hall tickets</p> </button> <button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="What scholarships are available and what is the eligibility?" data-astro-cid-mxf2l2hr> <div class="w-8 h-8 rounded-[10px] bg-purple-100 flex items-center justify-center mb-3" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2" data-astro-cid-mxf2l2hr><path d="M22 10v6M2 10l10-5 10 5-10 5z" data-astro-cid-mxf2l2hr></path><path d="M6 12v5c3 3 9 3 12 0v-5" data-astro-cid-mxf2l2hr></path></svg> </div> <p class="text-xs font-medium text-dark mb-0.5" data-astro-cid-mxf2l2hr>Scholarships</p> <p class="text-[11px] text-[#888] leading-relaxed" data-astro-cid-mxf2l2hr>Eligibility, amounts, application process</p> </button> </div> </div> </div> <!-- Input Area --> <div class="border-t border-[#e8eaed] bg-white px-4 pb-4 pt-3 shrink-0" data-astro-cid-mxf2l2hr> <!-- Input row --> <div class="relative max-w-3xl mx-auto" data-astro-cid-mxf2l2hr> <!-- Agent dropdown \u2014 positioned relative to this container, opens upward --> <div id="agent-dropdown" class="hidden absolute bottom-full left-0 mb-2 w-72 bg-white border border-[#e0e0e0] rounded-[16px] shadow-lg z-50 overflow-hidden" data-astro-cid-mxf2l2hr> <div class="px-3 py-2 border-b border-[#f0f0f0]" data-astro-cid-mxf2l2hr> <p class="text-[10px] text-[#aaa] uppercase tracking-widest font-medium" data-astro-cid-mxf2l2hr>Select Agent</p> </div> <div id="agent-options" class="py-1.5" data-astro-cid-mxf2l2hr></div> </div> <div class="relative border border-[#e0e0e0] rounded-[18px] bg-[#f8f9fb] focus-within:border-dark focus-within:bg-white transition-all shadow-sm" data-astro-cid-mxf2l2hr> <!-- Agent selector bar (inside input box, top) --> <div class="flex items-center gap-2 px-3 pt-2.5 pb-2 border-b border-[#ececec]" data-astro-cid-mxf2l2hr> <button id="agent-btn" class="flex items-center gap-1.5 text-xs text-[#555] hover:text-dark transition-colors group" data-astro-cid-mxf2l2hr> <span id="agent-emoji" class="text-sm" data-astro-cid-mxf2l2hr>\u{1F4AC}</span> <span id="agent-label" class="font-medium" data-astro-cid-mxf2l2hr>General</span> <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-[#ccc] group-hover:text-dark transition-colors" data-astro-cid-mxf2l2hr><polyline points="6 9 12 15 18 9" data-astro-cid-mxf2l2hr></polyline></svg> </button> <div class="w-px h-3 bg-[#e0e0e0]" data-astro-cid-mxf2l2hr></div> <span id="agent-hint-text" class="text-[10px] text-[#bbb]" data-astro-cid-mxf2l2hr>Ask anything about your college</span> </div> <!-- Textarea --> <textarea id="chat-input" rows="1" placeholder="Type your question..." class="w-full bg-transparent px-4 py-3 text-sm text-dark placeholder-[#bbb] outline-none resize-none leading-relaxed" style="min-height: 44px; max-height: 120px;" autocomplete="off" data-astro-cid-mxf2l2hr></textarea> <!-- Send button (inside box, bottom-right) --> <div class="flex items-center justify-end px-3 pb-2.5" data-astro-cid-mxf2l2hr> <button id="send-btn" class="w-9 h-9 rounded-[12px] bg-dark hover:bg-[#2d2e3a] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-mxf2l2hr><path d="M22 2L11 13" data-astro-cid-mxf2l2hr></path><path d="M22 2L15 22 11 13 2 9l20-7z" data-astro-cid-mxf2l2hr></path></svg> </button> </div> </div> <p class="text-center text-[10px] text-[#ccc] mt-2" data-astro-cid-mxf2l2hr>Answers sourced from official college documents only</p> </div> </div> </main> </div>  <script>
  // \u2500\u2500\u2500 Agents \u2500\u2500\u2500
  var AGENTS = [
    { id: 'general',     emoji: '\u{1F4AC}', label: 'General',      hint: 'Ask anything about your college',    topics: [] },
    { id: 'academics',   emoji: '\u{1F393}', label: 'Academics',    hint: 'Courses, results & attendance',      topics: ['exam', 'leave', 'revaluation', 'academic', 'course'] },
    { id: 'fees',        emoji: '\u{1F4B0}', label: 'Fees',         hint: 'Payments, fines & fee structure',    topics: ['fee', 'fees', 'fine', 'payment', 'tuition', 'mess'] },
    { id: 'admissions',  emoji: '\u{1F4CB}', label: 'Admissions',   hint: 'Joining process & transfers',        topics: ['admission', 'join', 'transfer', 'enroll', 'apply'] },
    { id: 'hostel',      emoji: '\u{1F3E0}', label: 'Hostel',       hint: 'Accommodation, mess & rules',        topics: ['hostel', 'mess', 'accommodation', 'room', 'warden'] },
    { id: 'placements',  emoji: '\u{1F4BC}', label: 'Placements',   hint: 'Jobs, internships & companies',      topics: ['placement', 'job', 'internship', 'company', 'career', 'recruit'] },
    { id: 'library',     emoji: '\u{1F4DA}', label: 'Library',      hint: 'Books, resources & timings',         topics: ['library', 'book', 'borrow', 'resource', 'fine'] },
    { id: 'scholarships',emoji: '\u{1F3C6}', label: 'Scholarships', hint: 'Grants, funds & eligibility',        topics: ['scholarship', 'grant', 'fund', 'merit', 'stipend'] },
  ];

  var currentAgent = AGENTS[0];
  var currentSessionId = null;
  var messageBuffer = [];

  // \u2500\u2500\u2500 Build agent dropdown options \u2500\u2500\u2500
  (function() {
    var optContainer = document.getElementById('agent-options');
    AGENTS.forEach(function(agent) {
      var btn = document.createElement('button');
      btn.className = 'agent-option w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors' + (agent.id === 'general' ? ' active' : '');
      btn.dataset.agentId = agent.id;
      btn.innerHTML = '<span class="text-base w-5 text-center">' + agent.emoji + '</span>'
        + '<div class="flex flex-col"><span class="text-xs font-medium text-dark">' + agent.label + '</span>'
        + '<span class="text-[10px] text-[#aaa]">' + agent.hint + '</span></div>'
        + (agent.id === 'general' ? '<svg class="ml-auto" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#b9ff66" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>' : '');
      btn.addEventListener('click', function() {
        selectAgent(agent.id);
      });
      optContainer.appendChild(btn);
    });
  })();

  function selectAgent(agentId) {
    currentAgent = AGENTS.find(function(a) { return a.id === agentId; }) || AGENTS[0];
    document.getElementById('agent-emoji').textContent = currentAgent.emoji;
    document.getElementById('agent-label').textContent = currentAgent.label;
    document.getElementById('agent-hint-text').textContent = currentAgent.hint;

    // Update active state in dropdown
    document.querySelectorAll('.agent-option').forEach(function(btn) {
      var isActive = btn.dataset.agentId === agentId;
      btn.classList.toggle('active', isActive);
      // update checkmark
      var existing = btn.querySelector('svg.check-mark');
      if (existing) existing.remove();
      if (isActive) {
        var check = document.createElement('span');
        check.className = 'ml-auto';
        check.innerHTML = '<svg class="check-mark" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#b9ff66" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';
        btn.appendChild(check);
      }
    });
    closeAgentDropdown();
  }

  // \u2500\u2500\u2500 Agent dropdown toggle \u2500\u2500\u2500
  function openAgentDropdown() {
    document.getElementById('agent-dropdown').classList.remove('hidden');
  }
  function closeAgentDropdown() {
    document.getElementById('agent-dropdown').classList.add('hidden');
  }

  document.getElementById('agent-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    var dd = document.getElementById('agent-dropdown');
    dd.classList.toggle('hidden');
  });

  document.addEventListener('click', function(e) {
    var dd = document.getElementById('agent-dropdown');
    if (!dd.classList.contains('hidden') && !dd.contains(e.target) && e.target !== document.getElementById('agent-btn')) {
      closeAgentDropdown();
    }
  });

  // \u2500\u2500\u2500 Lang detection \u2500\u2500\u2500
  function detectLanguage(text) {
    if (/[\\u0900-\\u097F]/.test(text)) return 'hi';
    if (/[\\u0C00-\\u0C7F]/.test(text)) return 'te';
    return 'en';
  }

  // \u2500\u2500\u2500 Response matching \u2500\u2500\u2500
  function findResponse(userMessage, responses, agent) {
    var normalized = userMessage.toLowerCase().replace(/[^\\w\\s\\u0900-\\u097F\\u0C00-\\u0C7F]/g, ' ');

    // Inject agent topic keywords into the normalized message to boost relevance
    if (agent && agent.topics && agent.topics.length > 0) {
      normalized = agent.topics.join(' ') + ' ' + normalized;
    }

    var tokens = normalized.split(/\\s+/).filter(function(t) { return t.length > 1; });

    var fallback = responses.find(function(r) { return r.id === 'fallback'; });
    var candidates = responses.filter(function(r) { return r.id !== 'fallback'; });

    var bestScore = 0;
    var bestMatch = fallback;

    for (var i = 0; i < candidates.length; i++) {
      var entry = candidates[i];
      var score = 0;
      for (var k = 0; k < entry.keywords.length; k++) {
        var keyword = entry.keywords[k];
        for (var t = 0; t < tokens.length; t++) {
          var token = tokens[t];
          if (token === keyword || token.indexOf(keyword) !== -1 || keyword.indexOf(token) !== -1) {
            score += 1;
          }
        }
      }
      if (normalized.indexOf(entry.topic) !== -1) score += 2;
      if (score > bestScore) {
        bestScore = score;
        bestMatch = entry;
      }
    }

    return {
      id: bestMatch.id,
      topic: bestMatch.topic,
      answer: bestMatch.answer,
      source: bestMatch.source,
      page: bestMatch.page,
      category: bestMatch.category,
      routeTo: bestMatch.routeTo,
      confidence: bestScore >= 3 ? 'high' : bestScore >= 1 ? 'low' : 'none'
    };
  }

  // \u2500\u2500\u2500 Timestamp \u2500\u2500\u2500
  function formatTimestamp() {
    return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  // \u2500\u2500\u2500 Create bubble \u2500\u2500\u2500
  function createBubble(role, content, timestamp, meta) {
    var isUser = role === 'user';
    var outer = document.createElement('div');
    outer.className = 'flex ' + (isUser ? 'justify-end' : 'justify-start') + ' mb-5 px-6 msg-appear';

    var inner = document.createElement('div');
    inner.className = 'max-w-[72%] flex flex-col gap-2 ' + (isUser ? 'items-end' : 'items-start');

    var bubble = document.createElement('div');
    bubble.className = 'px-4 py-3 ' + (isUser
      ? 'bg-dark text-white rounded-[18px] rounded-br-[4px]'
      : 'bg-[#f8f9fb] border border-[#e8eaed] rounded-[18px] rounded-bl-[4px] text-dark');

    var p = document.createElement('p');
    p.className = 'text-sm leading-relaxed whitespace-pre-wrap';
    p.textContent = content;
    bubble.appendChild(p);
    inner.appendChild(bubble);

    // Citation badge
    if (!isUser && meta && meta.source) {
      var badgeRow = document.createElement('div');
      badgeRow.className = 'flex items-center gap-2 flex-wrap';

      var sourceBadge = document.createElement('span');
      sourceBadge.className = 'inline-flex items-center gap-1.5 bg-[#f3f3f3] border border-[#e0e0e0] text-dark text-[11px] px-3 py-1 rounded-full font-medium';
      sourceBadge.innerHTML = '<svg width="10" height="12" viewBox="0 0 10 12" fill="#888"><path d="M1 0h8v12H1V0zm2 3h4v1H3V3zm0 2h4v1H3V5zm0 2h3v1H3V7z"/></svg>' + meta.source + ' &middot; p.' + meta.page;
      badgeRow.appendChild(sourceBadge);

      if (meta.category) {
        var catBadge = document.createElement('span');
        catBadge.className = 'text-[11px] text-[#888] px-2.5 py-0.5 bg-[#f3f3f3] rounded-full border border-[#e0e0e0]';
        catBadge.textContent = meta.category;
        badgeRow.appendChild(catBadge);
      }

      if (meta.confidence === 'low') {
        var confBadge = document.createElement('span');
        confBadge.className = 'text-[11px] px-2.5 py-0.5 bg-amber-50 text-amber-600 border border-amber-200 rounded-full';
        confBadge.textContent = 'Low confidence';
        badgeRow.appendChild(confBadge);
      }
      inner.appendChild(badgeRow);
    }

    // Staff redirect card
    if (!isUser && meta && meta.routeTo) {
      var staffCard = document.createElement('div');
      staffCard.className = 'bg-white border border-[#e8eaed] shadow-sm rounded-[16px] p-4 w-full mt-1';

      var staffHeader = document.createElement('div');
      staffHeader.className = 'flex items-center gap-2 mb-3';
      staffHeader.innerHTML = '<div class="w-7 h-7 rounded-lg bg-dark/5 flex items-center justify-center"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#191a23" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><p class="text-xs font-medium text-dark uppercase tracking-wider">Suggested Contact</p>';
      staffCard.appendChild(staffHeader);

      var sName = document.createElement('p');
      sName.className = 'font-medium text-dark text-sm mb-1';
      sName.textContent = meta.routeTo.name;
      staffCard.appendChild(sName);

      var details = document.createElement('div');
      details.className = 'text-xs text-[#888] flex flex-col gap-1';

      var infoRows = [
        { icon: 'M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z', text: meta.routeTo.room },
        { icon: 'M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z', text: meta.routeTo.hours },
      ];
      infoRows.forEach(function(d) {
        var row = document.createElement('div');
        row.className = 'flex items-center gap-1.5';
        row.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2"><path d="' + d.icon + '"/></svg><span>' + d.text + '</span>';
        details.appendChild(row);
      });
      var emailRow = document.createElement('div');
      emailRow.className = 'flex items-center gap-1.5';
      emailRow.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg><a href="mailto:' + meta.routeTo.email + '" class="text-dark underline underline-offset-2 hover:text-green transition-colors">' + meta.routeTo.email + '</a>';
      details.appendChild(emailRow);

      staffCard.appendChild(details);
      inner.appendChild(staffCard);
    }

    var ts = document.createElement('span');
    ts.className = 'text-[10px] text-[#ccc] px-1';
    ts.textContent = timestamp;
    inner.appendChild(ts);

    outer.appendChild(inner);
    return outer;
  }

  // \u2500\u2500\u2500 Session management (localStorage) \u2500\u2500\u2500
  var SESSIONS_KEY = 'dm_sessions';
  var SESSION_PREFIX = 'dm_sess_';

  function getSessions() {
    try {
      return JSON.parse(localStorage.getItem(SESSIONS_KEY) || '[]');
    } catch(e) { return []; }
  }

  function saveSession(session) {
    try {
      var sessions = getSessions().filter(function(s) { return s.id !== session.id; });
      sessions.unshift(session);
      if (sessions.length > 10) sessions = sessions.slice(0, 10);
      localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
    } catch(e) {}
  }

  function getSessionMessages(sessionId) {
    try {
      return JSON.parse(localStorage.getItem(SESSION_PREFIX + sessionId) || '[]');
    } catch(e) { return []; }
  }

  function appendSessionMessage(sessionId, msg) {
    try {
      var msgs = getSessionMessages(sessionId);
      msgs.push(msg);
      localStorage.setItem(SESSION_PREFIX + sessionId, JSON.stringify(msgs));
    } catch(e) {}
  }

  function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  function truncate(str, n) {
    return str.length > n ? str.slice(0, n) + '\u2026' : str;
  }

  // \u2500\u2500\u2500 Render sidebar recent conversations \u2500\u2500\u2500
  function renderRecentChats() {
    var sessions = getSessions();
    var container = document.getElementById('recent-chats-list');
    var noMsg = document.getElementById('no-history-msg');

    // Remove old dynamic items (keep no-history-msg)
    var oldItems = container.querySelectorAll('.recent-chat-item');
    oldItems.forEach(function(el) { el.remove(); });

    if (sessions.length === 0) {
      if (noMsg) noMsg.style.display = '';
      return;
    }
    if (noMsg) noMsg.style.display = 'none';

    sessions.slice(0, 8).forEach(function(sess) {
      var item = document.createElement('div');
      item.className = 'recent-chat-item flex items-start gap-2 px-3 py-2.5 rounded-[10px] cursor-pointer transition-colors' + (sess.id === currentSessionId ? ' active-session' : '');
      item.dataset.sessionId = sess.id;
      item.innerHTML = '<svg class="shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
        + '<div class="flex-1 min-w-0"><p class="text-xs text-dark truncate leading-tight">' + truncate(sess.title, 36) + '</p>'
        + '<p class="text-[10px] text-[#bbb] mt-0.5">' + formatRelativeTime(sess.ts) + '</p></div>';
      item.addEventListener('click', function() {
        loadSession(sess.id);
      });
      container.appendChild(item);
    });
  }

  function formatRelativeTime(ts) {
    var diff = Date.now() - ts;
    var mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return mins + 'm ago';
    var hrs = Math.floor(mins / 60);
    if (hrs < 24) return hrs + 'h ago';
    var days = Math.floor(hrs / 24);
    return days + 'd ago';
  }

  // \u2500\u2500\u2500 Load a past session \u2500\u2500\u2500
  function loadSession(sessionId) {
    currentSessionId = sessionId;
    var msgs = getSessionMessages(sessionId);
    var list = document.getElementById('message-list');
    list.innerHTML = '';

    msgs.forEach(function(msg) {
      var el = createBubble(msg.role, msg.content, msg.ts, msg.meta || {});
      el.classList.remove('msg-appear'); // no animation when restoring
      list.appendChild(el);
    });

    list.scrollTo({ top: list.scrollHeight, behavior: 'auto' });
    renderRecentChats();

    // Close sidebar on mobile
    document.getElementById('sidebar').classList.remove('open');
  }

  // \u2500\u2500\u2500 Append message \u2500\u2500\u2500
  function appendMessage(role, content, meta) {
    // Remove welcome screen if present
    var screen = document.getElementById('welcome-screen');
    if (screen) screen.remove();

    // Start new session on first user message
    if (role === 'user' && currentSessionId === null) {
      currentSessionId = generateId();
      saveSession({ id: currentSessionId, title: content, ts: Date.now() });
      renderRecentChats();
    }

    // Save to session
    appendSessionMessage(currentSessionId, {
      role: role,
      content: content,
      meta: meta || {},
      ts: formatTimestamp()
    });

    var list = document.getElementById('message-list');
    var el = createBubble(role, content, formatTimestamp(), meta);
    list.appendChild(el);
    list.scrollTo({ top: list.scrollHeight, behavior: 'smooth' });
  }

  // \u2500\u2500\u2500 Typing indicator \u2500\u2500\u2500
  function showTyping() {
    var list = document.getElementById('message-list');
    var el = document.createElement('div');
    el.id = 'typing-indicator';
    el.className = 'flex justify-start mb-5 px-6';
    el.innerHTML = '<div class="bg-[#f8f9fb] border border-[#e8eaed] rounded-[18px] rounded-bl-[4px] px-4 py-3"><div class="flex gap-1 items-center h-4"><span class="w-1.5 h-1.5 bg-[#bbb] rounded-full animate-bounce" style="animation-delay:0ms"></span><span class="w-1.5 h-1.5 bg-[#bbb] rounded-full animate-bounce" style="animation-delay:150ms"></span><span class="w-1.5 h-1.5 bg-[#bbb] rounded-full animate-bounce" style="animation-delay:300ms"></span></div></div>';
    list.appendChild(el);
    list.scrollTo({ top: list.scrollHeight, behavior: 'smooth' });
  }
  function hideTyping() {
    var el = document.getElementById('typing-indicator');
    if (el) el.remove();
  }

  // \u2500\u2500\u2500 Handle send \u2500\u2500\u2500
  function handleSend() {
    var input = document.getElementById('chat-input');
    var text = input.value.trim();
    if (!text) return;

    appendMessage('user', text, {});
    input.value = '';
    input.style.height = 'auto';

    var btn = document.getElementById('send-btn');
    btn.disabled = true;
    showTyping();

    setTimeout(function() {
      hideTyping();
      btn.disabled = false;
      var list = document.getElementById('message-list');
      var responses = JSON.parse(list.dataset.responses);
      var result = findResponse(text, responses, currentAgent);
      appendMessage('assistant', result.answer, result);
    }, 700);
  }

  // \u2500\u2500\u2500 Build welcome screen (used by New Chat) \u2500\u2500\u2500
  function buildWelcomeScreen() {
    var welcome = document.createElement('div');
    welcome.id = 'welcome-screen';
    welcome.className = 'h-full flex flex-col items-center justify-center px-6 py-12';
    welcome.innerHTML = ''
      + '<div class="w-14 h-14 rounded-[18px] bg-dark flex items-center justify-center mb-5">'
      +   '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b9ff66" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
      + '</div>'
      + '<h2 class="text-2xl font-medium text-dark mb-2 text-center">How can I help you today?</h2>'
      + '<p class="text-sm text-[#888] text-center max-w-sm leading-relaxed mb-10">Ask me anything about your college \u2014 fees, hostel, exams, scholarships and more with exact document citations.</p>'
      + '<div class="grid grid-cols-2 gap-3 w-full max-w-lg">'
      +   '<button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="What are the semester fees for B.Tech?">'
      +     '<div class="w-8 h-8 rounded-[10px] bg-[#b9ff66]/20 flex items-center justify-center mb-3"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5a7a00" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>'
      +     '<p class="text-xs font-medium text-dark mb-0.5">Fees &amp; Finance</p>'
      +     '<p class="text-[11px] text-[#888] leading-relaxed">Semester fees, payment dates, fine structure</p>'
      +   '</button>'
      +   '<button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="How do I apply for hostel accommodation?">'
      +     '<div class="w-8 h-8 rounded-[10px] bg-blue-100 flex items-center justify-center mb-3"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>'
      +     '<p class="text-xs font-medium text-dark mb-0.5">Hostel &amp; Accommodation</p>'
      +     '<p class="text-[11px] text-[#888] leading-relaxed">Allotment, mess charges, rules</p>'
      +   '</button>'
      +   '<button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="When are the semester examinations scheduled?">'
      +     '<div class="w-8 h-8 rounded-[10px] bg-orange-100 flex items-center justify-center mb-3"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>'
      +     '<p class="text-xs font-medium text-dark mb-0.5">Exams &amp; Academics</p>'
      +     '<p class="text-[11px] text-[#888] leading-relaxed">Exam dates, revaluation, hall tickets</p>'
      +   '</button>'
      +   '<button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="What scholarships are available and what is the eligibility?">'
      +     '<div class="w-8 h-8 rounded-[10px] bg-purple-100 flex items-center justify-center mb-3"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>'
      +     '<p class="text-xs font-medium text-dark mb-0.5">Scholarships</p>'
      +     '<p class="text-[11px] text-[#888] leading-relaxed">Eligibility, amounts, application process</p>'
      +   '</button>'
      + '</div>';
    return welcome;
  }
  // \u2500\u2500\u2500 New chat \u2500\u2500\u2500
  document.getElementById('new-chat-btn').addEventListener('click', function() {
    currentSessionId = null;
    var list = document.getElementById('message-list');
    list.innerHTML = '';
    list.appendChild(buildWelcomeScreen());

    document.getElementById('chat-input').value = '';
    document.getElementById('chat-input').style.height = 'auto';
    document.getElementById('sidebar').classList.remove('open');
    renderRecentChats();
  });

  // \u2500\u2500\u2500 Events \u2500\u2500\u2500
  document.getElementById('send-btn').addEventListener('click', handleSend);

  document.getElementById('chat-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  document.getElementById('chat-input').addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 120) + 'px';
  });

  // Starter cards \u2014 event delegation so it works after New Chat rebuilds the screen
  document.getElementById('message-list').addEventListener('click', function(e) {
    var card = e.target.closest('.starter-card');
    if (card) {
      document.getElementById('chat-input').value = card.dataset.text || '';
      handleSend();
    }
  });

  // Mobile sidebar
  var sidebarToggle = document.getElementById('sidebar-toggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      document.getElementById('sidebar').classList.toggle('open');
    });
  }

  // \u2500\u2500\u2500 Init \u2500\u2500\u2500
  renderRecentChats();
<\/script>`], ["", '<div class="flex h-screen bg-white overflow-hidden" id="chat-root" data-astro-cid-mxf2l2hr> <!-- \u2550\u2550\u2550 SIDEBAR \u2550\u2550\u2550 --> <aside id="sidebar" class="w-[260px] shrink-0 flex flex-col bg-[#f8f9fb] border-r border-[#e8eaed] z-20 transition-transform duration-300" data-astro-cid-mxf2l2hr> <!-- Logo --> <div class="px-5 py-5 border-b border-[#e8eaed]" data-astro-cid-mxf2l2hr> <a href="/" class="flex items-center gap-2.5" data-astro-cid-mxf2l2hr> <div class="w-8 h-8 rounded-[10px] bg-dark flex items-center justify-center shrink-0" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b9ff66" stroke-width="2.5" data-astro-cid-mxf2l2hr><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" data-astro-cid-mxf2l2hr></path></svg> </div> <span class="text-base font-medium text-dark leading-none" data-astro-cid-mxf2l2hr>Desk<span style="background:#b9ff66;border-radius:5px;padding:1px 6px;color:#191a23;" data-astro-cid-mxf2l2hr>Mate</span></span> </a> </div> <!-- New Chat --> <div class="px-4 pt-4 pb-2" data-astro-cid-mxf2l2hr> <button id="new-chat-btn" class="w-full flex items-center justify-center gap-2 bg-dark text-white hover:bg-[#2d2e3a] rounded-[12px] py-2.5 px-4 text-sm font-medium transition-all duration-200" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-mxf2l2hr><path d="M12 5v14M5 12h14" data-astro-cid-mxf2l2hr></path></svg>\nNew Chat\n</button> </div> <!-- Recent Conversations --> <div class="flex-1 overflow-y-auto px-3 py-2" data-astro-cid-mxf2l2hr> <p class="text-[10px] uppercase tracking-widest text-[#aaa] font-medium px-2 mb-2" data-astro-cid-mxf2l2hr>Recent</p> <div id="recent-chats-list" class="flex flex-col gap-0.5" data-astro-cid-mxf2l2hr> <p id="no-history-msg" class="text-xs text-[#ccc] px-2 py-2 italic" data-astro-cid-mxf2l2hr>No conversations yet</p> </div> </div> <!-- User area --> <div class="px-4 py-4 border-t border-[#e8eaed]" data-astro-cid-mxf2l2hr> <div class="flex items-center gap-3" data-astro-cid-mxf2l2hr> <div class="w-8 h-8 rounded-full bg-dark flex items-center justify-center shrink-0" data-astro-cid-mxf2l2hr> <span class="text-[#b9ff66] text-xs font-semibold" data-astro-cid-mxf2l2hr>S</span> </div> <div class="flex-1 min-w-0" data-astro-cid-mxf2l2hr> <p class="text-xs font-medium text-dark truncate" data-astro-cid-mxf2l2hr>Student</p> <p class="text-[10px] text-[#aaa] truncate" data-astro-cid-mxf2l2hr>student@college.edu.in</p> </div> <a href="/" class="p-1.5 rounded-lg hover:bg-[#ececec] text-[#aaa] hover:text-dark transition-colors" title="Back to home" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-mxf2l2hr><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" data-astro-cid-mxf2l2hr></path><polyline points="16 17 21 12 16 7" data-astro-cid-mxf2l2hr></polyline><line x1="21" y1="12" x2="9" y2="12" data-astro-cid-mxf2l2hr></line></svg> </a> </div> </div> </aside> <!-- \u2550\u2550\u2550 MAIN CHAT AREA \u2550\u2550\u2550 --> <main class="flex-1 flex flex-col min-w-0 bg-white" data-astro-cid-mxf2l2hr> <!-- Top Header --> <header class="flex items-center justify-between px-6 py-4 border-b border-[#e8eaed] bg-white shrink-0" data-astro-cid-mxf2l2hr> <div class="flex items-center gap-3" data-astro-cid-mxf2l2hr> <button id="sidebar-toggle" class="lg:hidden p-1.5 rounded-lg hover:bg-[#f3f3f3] text-[#555] transition-colors" data-astro-cid-mxf2l2hr> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-mxf2l2hr><path d="M3 12h18M3 6h18M3 18h18" data-astro-cid-mxf2l2hr></path></svg> </button> <div class="flex items-center gap-2.5" data-astro-cid-mxf2l2hr> <div class="flex items-center gap-1.5" data-astro-cid-mxf2l2hr> <div class="w-2 h-2 rounded-full bg-green animate-pulse" data-astro-cid-mxf2l2hr></div> <span class="text-sm font-medium text-dark" data-astro-cid-mxf2l2hr>DeskMate AI</span> </div> <span class="text-[10px] text-[#aaa] border border-[#e0e0e0] rounded-full px-2 py-0.5 hidden sm:inline" data-astro-cid-mxf2l2hr>Official Docs Only</span> </div> </div> <div class="flex items-center gap-3" data-astro-cid-mxf2l2hr> <div class="flex items-center gap-2" data-astro-cid-mxf2l2hr> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2" data-astro-cid-mxf2l2hr><circle cx="12" cy="12" r="10" data-astro-cid-mxf2l2hr></circle><line x1="2" y1="12" x2="22" y2="12" data-astro-cid-mxf2l2hr></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-astro-cid-mxf2l2hr></path></svg> <select id="lang-selector" class="bg-transparent border border-[#e0e0e0] text-dark text-xs rounded-[8px] px-2 py-1.5 outline-none cursor-pointer focus:border-dark transition-colors" data-astro-cid-mxf2l2hr> <option value="en" data-astro-cid-mxf2l2hr>English</option> <option value="hi" data-astro-cid-mxf2l2hr>\u0939\u093F\u0902\u0926\u0940</option> <option value="te" data-astro-cid-mxf2l2hr>\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41</option> </select> </div> <div class="w-px h-5 bg-[#e8eaed]" data-astro-cid-mxf2l2hr></div> <div class="flex items-center gap-1.5 text-[#aaa]" data-astro-cid-mxf2l2hr> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-mxf2l2hr><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-astro-cid-mxf2l2hr></path><polyline points="14 2 14 8 20 8" data-astro-cid-mxf2l2hr></polyline></svg> <span class="text-xs hidden sm:inline" data-astro-cid-mxf2l2hr>7 docs indexed</span> </div> </div> </header> <!-- Message List --> <div id="message-list" class="flex-1 overflow-y-auto"', ` data-astro-cid-mxf2l2hr> <!-- Welcome state --> <div id="welcome-screen" class="h-full flex flex-col items-center justify-center px-6 py-12" data-astro-cid-mxf2l2hr> <div class="w-14 h-14 rounded-[18px] bg-dark flex items-center justify-center mb-5" data-astro-cid-mxf2l2hr> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b9ff66" stroke-width="2" data-astro-cid-mxf2l2hr><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" data-astro-cid-mxf2l2hr></path></svg> </div> <h2 class="text-2xl font-medium text-dark mb-2 text-center" data-astro-cid-mxf2l2hr>How can I help you today?</h2> <p class="text-sm text-[#888] text-center max-w-sm leading-relaxed mb-10" data-astro-cid-mxf2l2hr>
Ask me anything about your college \u2014 fees, hostel, exams, scholarships and more with exact document citations.
</p> <!-- Starter cards --> <div class="grid grid-cols-2 gap-3 w-full max-w-lg" data-astro-cid-mxf2l2hr> <button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="What are the semester fees for B.Tech?" data-astro-cid-mxf2l2hr> <div class="w-8 h-8 rounded-[10px] bg-[#b9ff66]/20 flex items-center justify-center mb-3" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5a7a00" stroke-width="2" data-astro-cid-mxf2l2hr><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" data-astro-cid-mxf2l2hr></path></svg> </div> <p class="text-xs font-medium text-dark mb-0.5" data-astro-cid-mxf2l2hr>Fees & Finance</p> <p class="text-[11px] text-[#888] leading-relaxed" data-astro-cid-mxf2l2hr>Semester fees, payment dates, fine structure</p> </button> <button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="How do I apply for hostel accommodation?" data-astro-cid-mxf2l2hr> <div class="w-8 h-8 rounded-[10px] bg-blue-100 flex items-center justify-center mb-3" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" data-astro-cid-mxf2l2hr><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-mxf2l2hr></path></svg> </div> <p class="text-xs font-medium text-dark mb-0.5" data-astro-cid-mxf2l2hr>Hostel & Accommodation</p> <p class="text-[11px] text-[#888] leading-relaxed" data-astro-cid-mxf2l2hr>Allotment, mess charges, rules</p> </button> <button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="When are the semester examinations scheduled?" data-astro-cid-mxf2l2hr> <div class="w-8 h-8 rounded-[10px] bg-orange-100 flex items-center justify-center mb-3" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" data-astro-cid-mxf2l2hr><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-astro-cid-mxf2l2hr></rect><line x1="16" y1="2" x2="16" y2="6" data-astro-cid-mxf2l2hr></line><line x1="8" y1="2" x2="8" y2="6" data-astro-cid-mxf2l2hr></line><line x1="3" y1="10" x2="21" y2="10" data-astro-cid-mxf2l2hr></line></svg> </div> <p class="text-xs font-medium text-dark mb-0.5" data-astro-cid-mxf2l2hr>Exams & Academics</p> <p class="text-[11px] text-[#888] leading-relaxed" data-astro-cid-mxf2l2hr>Exam dates, revaluation, hall tickets</p> </button> <button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="What scholarships are available and what is the eligibility?" data-astro-cid-mxf2l2hr> <div class="w-8 h-8 rounded-[10px] bg-purple-100 flex items-center justify-center mb-3" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2" data-astro-cid-mxf2l2hr><path d="M22 10v6M2 10l10-5 10 5-10 5z" data-astro-cid-mxf2l2hr></path><path d="M6 12v5c3 3 9 3 12 0v-5" data-astro-cid-mxf2l2hr></path></svg> </div> <p class="text-xs font-medium text-dark mb-0.5" data-astro-cid-mxf2l2hr>Scholarships</p> <p class="text-[11px] text-[#888] leading-relaxed" data-astro-cid-mxf2l2hr>Eligibility, amounts, application process</p> </button> </div> </div> </div> <!-- Input Area --> <div class="border-t border-[#e8eaed] bg-white px-4 pb-4 pt-3 shrink-0" data-astro-cid-mxf2l2hr> <!-- Input row --> <div class="relative max-w-3xl mx-auto" data-astro-cid-mxf2l2hr> <!-- Agent dropdown \u2014 positioned relative to this container, opens upward --> <div id="agent-dropdown" class="hidden absolute bottom-full left-0 mb-2 w-72 bg-white border border-[#e0e0e0] rounded-[16px] shadow-lg z-50 overflow-hidden" data-astro-cid-mxf2l2hr> <div class="px-3 py-2 border-b border-[#f0f0f0]" data-astro-cid-mxf2l2hr> <p class="text-[10px] text-[#aaa] uppercase tracking-widest font-medium" data-astro-cid-mxf2l2hr>Select Agent</p> </div> <div id="agent-options" class="py-1.5" data-astro-cid-mxf2l2hr></div> </div> <div class="relative border border-[#e0e0e0] rounded-[18px] bg-[#f8f9fb] focus-within:border-dark focus-within:bg-white transition-all shadow-sm" data-astro-cid-mxf2l2hr> <!-- Agent selector bar (inside input box, top) --> <div class="flex items-center gap-2 px-3 pt-2.5 pb-2 border-b border-[#ececec]" data-astro-cid-mxf2l2hr> <button id="agent-btn" class="flex items-center gap-1.5 text-xs text-[#555] hover:text-dark transition-colors group" data-astro-cid-mxf2l2hr> <span id="agent-emoji" class="text-sm" data-astro-cid-mxf2l2hr>\u{1F4AC}</span> <span id="agent-label" class="font-medium" data-astro-cid-mxf2l2hr>General</span> <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-[#ccc] group-hover:text-dark transition-colors" data-astro-cid-mxf2l2hr><polyline points="6 9 12 15 18 9" data-astro-cid-mxf2l2hr></polyline></svg> </button> <div class="w-px h-3 bg-[#e0e0e0]" data-astro-cid-mxf2l2hr></div> <span id="agent-hint-text" class="text-[10px] text-[#bbb]" data-astro-cid-mxf2l2hr>Ask anything about your college</span> </div> <!-- Textarea --> <textarea id="chat-input" rows="1" placeholder="Type your question..." class="w-full bg-transparent px-4 py-3 text-sm text-dark placeholder-[#bbb] outline-none resize-none leading-relaxed" style="min-height: 44px; max-height: 120px;" autocomplete="off" data-astro-cid-mxf2l2hr></textarea> <!-- Send button (inside box, bottom-right) --> <div class="flex items-center justify-end px-3 pb-2.5" data-astro-cid-mxf2l2hr> <button id="send-btn" class="w-9 h-9 rounded-[12px] bg-dark hover:bg-[#2d2e3a] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed" data-astro-cid-mxf2l2hr> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-mxf2l2hr><path d="M22 2L11 13" data-astro-cid-mxf2l2hr></path><path d="M22 2L15 22 11 13 2 9l20-7z" data-astro-cid-mxf2l2hr></path></svg> </button> </div> </div> <p class="text-center text-[10px] text-[#ccc] mt-2" data-astro-cid-mxf2l2hr>Answers sourced from official college documents only</p> </div> </div> </main> </div>  <script>
  // \u2500\u2500\u2500 Agents \u2500\u2500\u2500
  var AGENTS = [
    { id: 'general',     emoji: '\u{1F4AC}', label: 'General',      hint: 'Ask anything about your college',    topics: [] },
    { id: 'academics',   emoji: '\u{1F393}', label: 'Academics',    hint: 'Courses, results & attendance',      topics: ['exam', 'leave', 'revaluation', 'academic', 'course'] },
    { id: 'fees',        emoji: '\u{1F4B0}', label: 'Fees',         hint: 'Payments, fines & fee structure',    topics: ['fee', 'fees', 'fine', 'payment', 'tuition', 'mess'] },
    { id: 'admissions',  emoji: '\u{1F4CB}', label: 'Admissions',   hint: 'Joining process & transfers',        topics: ['admission', 'join', 'transfer', 'enroll', 'apply'] },
    { id: 'hostel',      emoji: '\u{1F3E0}', label: 'Hostel',       hint: 'Accommodation, mess & rules',        topics: ['hostel', 'mess', 'accommodation', 'room', 'warden'] },
    { id: 'placements',  emoji: '\u{1F4BC}', label: 'Placements',   hint: 'Jobs, internships & companies',      topics: ['placement', 'job', 'internship', 'company', 'career', 'recruit'] },
    { id: 'library',     emoji: '\u{1F4DA}', label: 'Library',      hint: 'Books, resources & timings',         topics: ['library', 'book', 'borrow', 'resource', 'fine'] },
    { id: 'scholarships',emoji: '\u{1F3C6}', label: 'Scholarships', hint: 'Grants, funds & eligibility',        topics: ['scholarship', 'grant', 'fund', 'merit', 'stipend'] },
  ];

  var currentAgent = AGENTS[0];
  var currentSessionId = null;
  var messageBuffer = [];

  // \u2500\u2500\u2500 Build agent dropdown options \u2500\u2500\u2500
  (function() {
    var optContainer = document.getElementById('agent-options');
    AGENTS.forEach(function(agent) {
      var btn = document.createElement('button');
      btn.className = 'agent-option w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors' + (agent.id === 'general' ? ' active' : '');
      btn.dataset.agentId = agent.id;
      btn.innerHTML = '<span class="text-base w-5 text-center">' + agent.emoji + '</span>'
        + '<div class="flex flex-col"><span class="text-xs font-medium text-dark">' + agent.label + '</span>'
        + '<span class="text-[10px] text-[#aaa]">' + agent.hint + '</span></div>'
        + (agent.id === 'general' ? '<svg class="ml-auto" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#b9ff66" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>' : '');
      btn.addEventListener('click', function() {
        selectAgent(agent.id);
      });
      optContainer.appendChild(btn);
    });
  })();

  function selectAgent(agentId) {
    currentAgent = AGENTS.find(function(a) { return a.id === agentId; }) || AGENTS[0];
    document.getElementById('agent-emoji').textContent = currentAgent.emoji;
    document.getElementById('agent-label').textContent = currentAgent.label;
    document.getElementById('agent-hint-text').textContent = currentAgent.hint;

    // Update active state in dropdown
    document.querySelectorAll('.agent-option').forEach(function(btn) {
      var isActive = btn.dataset.agentId === agentId;
      btn.classList.toggle('active', isActive);
      // update checkmark
      var existing = btn.querySelector('svg.check-mark');
      if (existing) existing.remove();
      if (isActive) {
        var check = document.createElement('span');
        check.className = 'ml-auto';
        check.innerHTML = '<svg class="check-mark" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#b9ff66" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';
        btn.appendChild(check);
      }
    });
    closeAgentDropdown();
  }

  // \u2500\u2500\u2500 Agent dropdown toggle \u2500\u2500\u2500
  function openAgentDropdown() {
    document.getElementById('agent-dropdown').classList.remove('hidden');
  }
  function closeAgentDropdown() {
    document.getElementById('agent-dropdown').classList.add('hidden');
  }

  document.getElementById('agent-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    var dd = document.getElementById('agent-dropdown');
    dd.classList.toggle('hidden');
  });

  document.addEventListener('click', function(e) {
    var dd = document.getElementById('agent-dropdown');
    if (!dd.classList.contains('hidden') && !dd.contains(e.target) && e.target !== document.getElementById('agent-btn')) {
      closeAgentDropdown();
    }
  });

  // \u2500\u2500\u2500 Lang detection \u2500\u2500\u2500
  function detectLanguage(text) {
    if (/[\\\\u0900-\\\\u097F]/.test(text)) return 'hi';
    if (/[\\\\u0C00-\\\\u0C7F]/.test(text)) return 'te';
    return 'en';
  }

  // \u2500\u2500\u2500 Response matching \u2500\u2500\u2500
  function findResponse(userMessage, responses, agent) {
    var normalized = userMessage.toLowerCase().replace(/[^\\\\w\\\\s\\\\u0900-\\\\u097F\\\\u0C00-\\\\u0C7F]/g, ' ');

    // Inject agent topic keywords into the normalized message to boost relevance
    if (agent && agent.topics && agent.topics.length > 0) {
      normalized = agent.topics.join(' ') + ' ' + normalized;
    }

    var tokens = normalized.split(/\\\\s+/).filter(function(t) { return t.length > 1; });

    var fallback = responses.find(function(r) { return r.id === 'fallback'; });
    var candidates = responses.filter(function(r) { return r.id !== 'fallback'; });

    var bestScore = 0;
    var bestMatch = fallback;

    for (var i = 0; i < candidates.length; i++) {
      var entry = candidates[i];
      var score = 0;
      for (var k = 0; k < entry.keywords.length; k++) {
        var keyword = entry.keywords[k];
        for (var t = 0; t < tokens.length; t++) {
          var token = tokens[t];
          if (token === keyword || token.indexOf(keyword) !== -1 || keyword.indexOf(token) !== -1) {
            score += 1;
          }
        }
      }
      if (normalized.indexOf(entry.topic) !== -1) score += 2;
      if (score > bestScore) {
        bestScore = score;
        bestMatch = entry;
      }
    }

    return {
      id: bestMatch.id,
      topic: bestMatch.topic,
      answer: bestMatch.answer,
      source: bestMatch.source,
      page: bestMatch.page,
      category: bestMatch.category,
      routeTo: bestMatch.routeTo,
      confidence: bestScore >= 3 ? 'high' : bestScore >= 1 ? 'low' : 'none'
    };
  }

  // \u2500\u2500\u2500 Timestamp \u2500\u2500\u2500
  function formatTimestamp() {
    return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  // \u2500\u2500\u2500 Create bubble \u2500\u2500\u2500
  function createBubble(role, content, timestamp, meta) {
    var isUser = role === 'user';
    var outer = document.createElement('div');
    outer.className = 'flex ' + (isUser ? 'justify-end' : 'justify-start') + ' mb-5 px-6 msg-appear';

    var inner = document.createElement('div');
    inner.className = 'max-w-[72%] flex flex-col gap-2 ' + (isUser ? 'items-end' : 'items-start');

    var bubble = document.createElement('div');
    bubble.className = 'px-4 py-3 ' + (isUser
      ? 'bg-dark text-white rounded-[18px] rounded-br-[4px]'
      : 'bg-[#f8f9fb] border border-[#e8eaed] rounded-[18px] rounded-bl-[4px] text-dark');

    var p = document.createElement('p');
    p.className = 'text-sm leading-relaxed whitespace-pre-wrap';
    p.textContent = content;
    bubble.appendChild(p);
    inner.appendChild(bubble);

    // Citation badge
    if (!isUser && meta && meta.source) {
      var badgeRow = document.createElement('div');
      badgeRow.className = 'flex items-center gap-2 flex-wrap';

      var sourceBadge = document.createElement('span');
      sourceBadge.className = 'inline-flex items-center gap-1.5 bg-[#f3f3f3] border border-[#e0e0e0] text-dark text-[11px] px-3 py-1 rounded-full font-medium';
      sourceBadge.innerHTML = '<svg width="10" height="12" viewBox="0 0 10 12" fill="#888"><path d="M1 0h8v12H1V0zm2 3h4v1H3V3zm0 2h4v1H3V5zm0 2h3v1H3V7z"/></svg>' + meta.source + ' &middot; p.' + meta.page;
      badgeRow.appendChild(sourceBadge);

      if (meta.category) {
        var catBadge = document.createElement('span');
        catBadge.className = 'text-[11px] text-[#888] px-2.5 py-0.5 bg-[#f3f3f3] rounded-full border border-[#e0e0e0]';
        catBadge.textContent = meta.category;
        badgeRow.appendChild(catBadge);
      }

      if (meta.confidence === 'low') {
        var confBadge = document.createElement('span');
        confBadge.className = 'text-[11px] px-2.5 py-0.5 bg-amber-50 text-amber-600 border border-amber-200 rounded-full';
        confBadge.textContent = 'Low confidence';
        badgeRow.appendChild(confBadge);
      }
      inner.appendChild(badgeRow);
    }

    // Staff redirect card
    if (!isUser && meta && meta.routeTo) {
      var staffCard = document.createElement('div');
      staffCard.className = 'bg-white border border-[#e8eaed] shadow-sm rounded-[16px] p-4 w-full mt-1';

      var staffHeader = document.createElement('div');
      staffHeader.className = 'flex items-center gap-2 mb-3';
      staffHeader.innerHTML = '<div class="w-7 h-7 rounded-lg bg-dark/5 flex items-center justify-center"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#191a23" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><p class="text-xs font-medium text-dark uppercase tracking-wider">Suggested Contact</p>';
      staffCard.appendChild(staffHeader);

      var sName = document.createElement('p');
      sName.className = 'font-medium text-dark text-sm mb-1';
      sName.textContent = meta.routeTo.name;
      staffCard.appendChild(sName);

      var details = document.createElement('div');
      details.className = 'text-xs text-[#888] flex flex-col gap-1';

      var infoRows = [
        { icon: 'M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z', text: meta.routeTo.room },
        { icon: 'M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z', text: meta.routeTo.hours },
      ];
      infoRows.forEach(function(d) {
        var row = document.createElement('div');
        row.className = 'flex items-center gap-1.5';
        row.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2"><path d="' + d.icon + '"/></svg><span>' + d.text + '</span>';
        details.appendChild(row);
      });
      var emailRow = document.createElement('div');
      emailRow.className = 'flex items-center gap-1.5';
      emailRow.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg><a href="mailto:' + meta.routeTo.email + '" class="text-dark underline underline-offset-2 hover:text-green transition-colors">' + meta.routeTo.email + '</a>';
      details.appendChild(emailRow);

      staffCard.appendChild(details);
      inner.appendChild(staffCard);
    }

    var ts = document.createElement('span');
    ts.className = 'text-[10px] text-[#ccc] px-1';
    ts.textContent = timestamp;
    inner.appendChild(ts);

    outer.appendChild(inner);
    return outer;
  }

  // \u2500\u2500\u2500 Session management (localStorage) \u2500\u2500\u2500
  var SESSIONS_KEY = 'dm_sessions';
  var SESSION_PREFIX = 'dm_sess_';

  function getSessions() {
    try {
      return JSON.parse(localStorage.getItem(SESSIONS_KEY) || '[]');
    } catch(e) { return []; }
  }

  function saveSession(session) {
    try {
      var sessions = getSessions().filter(function(s) { return s.id !== session.id; });
      sessions.unshift(session);
      if (sessions.length > 10) sessions = sessions.slice(0, 10);
      localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
    } catch(e) {}
  }

  function getSessionMessages(sessionId) {
    try {
      return JSON.parse(localStorage.getItem(SESSION_PREFIX + sessionId) || '[]');
    } catch(e) { return []; }
  }

  function appendSessionMessage(sessionId, msg) {
    try {
      var msgs = getSessionMessages(sessionId);
      msgs.push(msg);
      localStorage.setItem(SESSION_PREFIX + sessionId, JSON.stringify(msgs));
    } catch(e) {}
  }

  function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  function truncate(str, n) {
    return str.length > n ? str.slice(0, n) + '\u2026' : str;
  }

  // \u2500\u2500\u2500 Render sidebar recent conversations \u2500\u2500\u2500
  function renderRecentChats() {
    var sessions = getSessions();
    var container = document.getElementById('recent-chats-list');
    var noMsg = document.getElementById('no-history-msg');

    // Remove old dynamic items (keep no-history-msg)
    var oldItems = container.querySelectorAll('.recent-chat-item');
    oldItems.forEach(function(el) { el.remove(); });

    if (sessions.length === 0) {
      if (noMsg) noMsg.style.display = '';
      return;
    }
    if (noMsg) noMsg.style.display = 'none';

    sessions.slice(0, 8).forEach(function(sess) {
      var item = document.createElement('div');
      item.className = 'recent-chat-item flex items-start gap-2 px-3 py-2.5 rounded-[10px] cursor-pointer transition-colors' + (sess.id === currentSessionId ? ' active-session' : '');
      item.dataset.sessionId = sess.id;
      item.innerHTML = '<svg class="shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
        + '<div class="flex-1 min-w-0"><p class="text-xs text-dark truncate leading-tight">' + truncate(sess.title, 36) + '</p>'
        + '<p class="text-[10px] text-[#bbb] mt-0.5">' + formatRelativeTime(sess.ts) + '</p></div>';
      item.addEventListener('click', function() {
        loadSession(sess.id);
      });
      container.appendChild(item);
    });
  }

  function formatRelativeTime(ts) {
    var diff = Date.now() - ts;
    var mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return mins + 'm ago';
    var hrs = Math.floor(mins / 60);
    if (hrs < 24) return hrs + 'h ago';
    var days = Math.floor(hrs / 24);
    return days + 'd ago';
  }

  // \u2500\u2500\u2500 Load a past session \u2500\u2500\u2500
  function loadSession(sessionId) {
    currentSessionId = sessionId;
    var msgs = getSessionMessages(sessionId);
    var list = document.getElementById('message-list');
    list.innerHTML = '';

    msgs.forEach(function(msg) {
      var el = createBubble(msg.role, msg.content, msg.ts, msg.meta || {});
      el.classList.remove('msg-appear'); // no animation when restoring
      list.appendChild(el);
    });

    list.scrollTo({ top: list.scrollHeight, behavior: 'auto' });
    renderRecentChats();

    // Close sidebar on mobile
    document.getElementById('sidebar').classList.remove('open');
  }

  // \u2500\u2500\u2500 Append message \u2500\u2500\u2500
  function appendMessage(role, content, meta) {
    // Remove welcome screen if present
    var screen = document.getElementById('welcome-screen');
    if (screen) screen.remove();

    // Start new session on first user message
    if (role === 'user' && currentSessionId === null) {
      currentSessionId = generateId();
      saveSession({ id: currentSessionId, title: content, ts: Date.now() });
      renderRecentChats();
    }

    // Save to session
    appendSessionMessage(currentSessionId, {
      role: role,
      content: content,
      meta: meta || {},
      ts: formatTimestamp()
    });

    var list = document.getElementById('message-list');
    var el = createBubble(role, content, formatTimestamp(), meta);
    list.appendChild(el);
    list.scrollTo({ top: list.scrollHeight, behavior: 'smooth' });
  }

  // \u2500\u2500\u2500 Typing indicator \u2500\u2500\u2500
  function showTyping() {
    var list = document.getElementById('message-list');
    var el = document.createElement('div');
    el.id = 'typing-indicator';
    el.className = 'flex justify-start mb-5 px-6';
    el.innerHTML = '<div class="bg-[#f8f9fb] border border-[#e8eaed] rounded-[18px] rounded-bl-[4px] px-4 py-3"><div class="flex gap-1 items-center h-4"><span class="w-1.5 h-1.5 bg-[#bbb] rounded-full animate-bounce" style="animation-delay:0ms"></span><span class="w-1.5 h-1.5 bg-[#bbb] rounded-full animate-bounce" style="animation-delay:150ms"></span><span class="w-1.5 h-1.5 bg-[#bbb] rounded-full animate-bounce" style="animation-delay:300ms"></span></div></div>';
    list.appendChild(el);
    list.scrollTo({ top: list.scrollHeight, behavior: 'smooth' });
  }
  function hideTyping() {
    var el = document.getElementById('typing-indicator');
    if (el) el.remove();
  }

  // \u2500\u2500\u2500 Handle send \u2500\u2500\u2500
  function handleSend() {
    var input = document.getElementById('chat-input');
    var text = input.value.trim();
    if (!text) return;

    appendMessage('user', text, {});
    input.value = '';
    input.style.height = 'auto';

    var btn = document.getElementById('send-btn');
    btn.disabled = true;
    showTyping();

    setTimeout(function() {
      hideTyping();
      btn.disabled = false;
      var list = document.getElementById('message-list');
      var responses = JSON.parse(list.dataset.responses);
      var result = findResponse(text, responses, currentAgent);
      appendMessage('assistant', result.answer, result);
    }, 700);
  }

  // \u2500\u2500\u2500 Build welcome screen (used by New Chat) \u2500\u2500\u2500
  function buildWelcomeScreen() {
    var welcome = document.createElement('div');
    welcome.id = 'welcome-screen';
    welcome.className = 'h-full flex flex-col items-center justify-center px-6 py-12';
    welcome.innerHTML = ''
      + '<div class="w-14 h-14 rounded-[18px] bg-dark flex items-center justify-center mb-5">'
      +   '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b9ff66" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
      + '</div>'
      + '<h2 class="text-2xl font-medium text-dark mb-2 text-center">How can I help you today?</h2>'
      + '<p class="text-sm text-[#888] text-center max-w-sm leading-relaxed mb-10">Ask me anything about your college \u2014 fees, hostel, exams, scholarships and more with exact document citations.</p>'
      + '<div class="grid grid-cols-2 gap-3 w-full max-w-lg">'
      +   '<button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="What are the semester fees for B.Tech?">'
      +     '<div class="w-8 h-8 rounded-[10px] bg-[#b9ff66]/20 flex items-center justify-center mb-3"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5a7a00" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>'
      +     '<p class="text-xs font-medium text-dark mb-0.5">Fees &amp; Finance</p>'
      +     '<p class="text-[11px] text-[#888] leading-relaxed">Semester fees, payment dates, fine structure</p>'
      +   '</button>'
      +   '<button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="How do I apply for hostel accommodation?">'
      +     '<div class="w-8 h-8 rounded-[10px] bg-blue-100 flex items-center justify-center mb-3"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>'
      +     '<p class="text-xs font-medium text-dark mb-0.5">Hostel &amp; Accommodation</p>'
      +     '<p class="text-[11px] text-[#888] leading-relaxed">Allotment, mess charges, rules</p>'
      +   '</button>'
      +   '<button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="When are the semester examinations scheduled?">'
      +     '<div class="w-8 h-8 rounded-[10px] bg-orange-100 flex items-center justify-center mb-3"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>'
      +     '<p class="text-xs font-medium text-dark mb-0.5">Exams &amp; Academics</p>'
      +     '<p class="text-[11px] text-[#888] leading-relaxed">Exam dates, revaluation, hall tickets</p>'
      +   '</button>'
      +   '<button class="starter-card text-left bg-[#f8f9fb] hover:bg-[#f0f1f3] border border-[#e8eaed] hover:border-dark rounded-[16px] p-4 transition-all duration-200" data-text="What scholarships are available and what is the eligibility?">'
      +     '<div class="w-8 h-8 rounded-[10px] bg-purple-100 flex items-center justify-center mb-3"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>'
      +     '<p class="text-xs font-medium text-dark mb-0.5">Scholarships</p>'
      +     '<p class="text-[11px] text-[#888] leading-relaxed">Eligibility, amounts, application process</p>'
      +   '</button>'
      + '</div>';
    return welcome;
  }
  // \u2500\u2500\u2500 New chat \u2500\u2500\u2500
  document.getElementById('new-chat-btn').addEventListener('click', function() {
    currentSessionId = null;
    var list = document.getElementById('message-list');
    list.innerHTML = '';
    list.appendChild(buildWelcomeScreen());

    document.getElementById('chat-input').value = '';
    document.getElementById('chat-input').style.height = 'auto';
    document.getElementById('sidebar').classList.remove('open');
    renderRecentChats();
  });

  // \u2500\u2500\u2500 Events \u2500\u2500\u2500
  document.getElementById('send-btn').addEventListener('click', handleSend);

  document.getElementById('chat-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  document.getElementById('chat-input').addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 120) + 'px';
  });

  // Starter cards \u2014 event delegation so it works after New Chat rebuilds the screen
  document.getElementById('message-list').addEventListener('click', function(e) {
    var card = e.target.closest('.starter-card');
    if (card) {
      document.getElementById('chat-input').value = card.dataset.text || '';
      handleSend();
    }
  });

  // Mobile sidebar
  var sidebarToggle = document.getElementById('sidebar-toggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      document.getElementById('sidebar').classList.toggle('open');
    });
  }

  // \u2500\u2500\u2500 Init \u2500\u2500\u2500
  renderRecentChats();
<\/script>`])), maybeRenderHead(), addAttribute(responsesJSON, "data-responses"));
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/components/chat/ChatInterface.astro", void 0);

const $$Chat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { "title": "DeskMate \u2014 Chat", "description": "Ask DeskMate anything about your college. Instant answers with document citations." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ChatInterface", $$ChatInterface, {})} ` })}`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/app/chat.astro", void 0);

const $$file = "C:/Users/vinay/projects/DeskMate/Positivus/src/pages/app/chat.astro";
const $$url = "/app/chat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Chat,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
