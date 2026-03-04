import { c as createComponent, m as maybeRenderHead, a as renderTemplate, d as createAstro, r as renderComponent, b as addAttribute, j as defineScriptVars, i as renderSlot, s as spreadAttributes, h as renderScript } from './astro/server_Dkgve4vv.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { $ as $$MainHead } from './MainHead_DBpAnsI-.mjs';
/* empty css                        */

const $$ShortForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="bg-[#292A32] px-10 py-14 rounded-[14px] gap-5 h-full flex flex-col sm:flex-row items-center justify-center"> <div class="w-full sm:w-[55%]"> <input type="text" id="email" name="email" placeholder="Email" class="bg-transparent w-full px-[35px] py-5 border rounded-[14px] focus:outline-none"> </div> <button type="submit" name="submit" class="w-full sm:w-[45%] btn-tertiary">Subscribe to news</button> </form>`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/components/ui/ShortForm.astro", void 0);

const $$Astro$b = createAstro("https://positivustheme.vercel.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Footer;
  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Open App", href: "/app/chat" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="sm:px-5"> <div class="w-full max-w-[1240px] mx-auto"> <div class="px-[15px] bg-dark text-gray py-[55px] lg:px-[60px] sm:rounded-t-[45px]"> <div> <div class="flex flex-col lg:flex-row gap-7 items-center justify-between"> <a href="/" class="flex items-center"> <span class="text-2xl font-medium text-white">
Desk<span class="text-green">Mate</span> </span> </a> <ul class="flex flex-col sm:flex-row gap-5"> ${links.map((link) => renderTemplate`<li class="text-center"> <a class="underline"${addAttribute(link.href, "href")}>${link.name}</a> </li>`)} </ul> <div class="flex gap-4 items-center"> <a href="mailto:support@deskmate.app" class="text-green underline text-sm">support@deskmate.app</a> </div> </div> <div class="flex flex-col lg:flex-row mt-[66px] mb-[51px]"> <div class="flex text-center lg:text-start flex-col w-full lg:w-[30%]"> <h3 class="mb-5 text-center md:text-left text-2xl text-green">Contact us</h3> <div class="flex flex-col justify-between gap-4"> <span>Email: support@deskmate.app</span> <span>Partnerships: partnerships@deskmate.app</span> <span class="lg:w-3/4">Response time: within 24 hours on working days</span> </div> </div> <div class="flex-grow my-10 lg:my-0 lg:ml-12"> ${renderComponent($$result, "ShortForm", $$ShortForm, {})} </div> </div> </div> <div class="h-[1px] bg-gray mb-5"></div> <div class="flex flex-col lg:flex-row h-20 justify-center mt-4 text-center md:justify-between md:mt-0"> <span>
&copy; 2024 DeskMate &mdash; Built with
<a class="underline" target="_blank" href="https://astro.build">Astro</a> </span> <span class="text-[#666] text-sm mt-2 lg:mt-0">
AI-powered college assistant &mdash; No hallucinations, always cited.
</span> </div> </div> </div> </section>`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/components/ui/Footer.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$a = createAstro("https://positivustheme.vercel.app");
const $$Astronav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Astronav;
  const { closeOnClick = false } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", " <script>(function(){", '\n["DOMContentLoaded", "astro:after-swap"].forEach((event) => {\n  document.addEventListener(event, addListeners);\n});\n\n// Function to clone and replace elements\nfunction cloneAndReplace(element) {\n  const clone = element.cloneNode(true);\n  element.parentNode.replaceChild(clone, element);\n}\n\nfunction addListeners() {\n  // Clean up existing listeners\n  const oldMenuButton = document.getElementById("astronav-menu");\n  if (oldMenuButton) {\n    cloneAndReplace(oldMenuButton);\n  }\n\n  const oldDropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  oldDropdownMenus.forEach((menu) => {\n    cloneAndReplace(menu);\n  });\n\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n}\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      `.astronav-dropdown button, .astronav-dropdown label, .astronav-dropdown input,\n	  .astronav-dropdown-submenu button, .astronav-dropdown-submenu label, .astronav-dropdown-submenu input,\n	  #astronav-menu`\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // console.log("I ran", d);\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  // console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n}\n})();<\/script>'], ["", " <script>(function(){", '\n["DOMContentLoaded", "astro:after-swap"].forEach((event) => {\n  document.addEventListener(event, addListeners);\n});\n\n// Function to clone and replace elements\nfunction cloneAndReplace(element) {\n  const clone = element.cloneNode(true);\n  element.parentNode.replaceChild(clone, element);\n}\n\nfunction addListeners() {\n  // Clean up existing listeners\n  const oldMenuButton = document.getElementById("astronav-menu");\n  if (oldMenuButton) {\n    cloneAndReplace(oldMenuButton);\n  }\n\n  const oldDropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  oldDropdownMenus.forEach((menu) => {\n    cloneAndReplace(menu);\n  });\n\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n}\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      \\`.astronav-dropdown button, .astronav-dropdown label, .astronav-dropdown input,\n	  .astronav-dropdown-submenu button, .astronav-dropdown-submenu label, .astronav-dropdown-submenu input,\n	  #astronav-menu\\`\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // console.log("I ran", d);\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  // console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n}\n})();<\/script>'])), renderSlot($$result, $$slots["default"]), defineScriptVars({ closeOnClick }));
}, "C:/Users/vinay/projects/DeskMate/Positivus/node_modules/astro-navbar/src/Astronav.astro", void 0);

const $$Astro$9 = createAstro("https://positivustheme.vercel.app");
const $$MenuIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="astronav-menu" aria-label="Toggle Menu"> ${renderSlot($$result, $$slots["default"], renderTemplate` <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${spreadAttributes(rest)}> <title>Toggle Menu</title> <path class="astronav-close-icon astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path> <path class="astronav-open-icon astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path> </svg> `)} </button>`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/node_modules/astro-navbar/src/components/MenuIcon.astro", void 0);

const $$Astro$8 = createAstro("https://positivustheme.vercel.app");
const $$OpenIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-open-icon astronav-toggle", className], "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/node_modules/astro-navbar/src/components/OpenIcon.astro", void 0);

const $$Astro$7 = createAstro("https://positivustheme.vercel.app");
const $$CloseIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-close-icon astronav-toggle hidden", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/node_modules/astro-navbar/src/components/CloseIcon.astro", void 0);

const $$Astro$6 = createAstro("https://positivustheme.vercel.app");
const $$MenuItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["astronav-items astronav-toggle", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </nav>`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/node_modules/astro-navbar/src/components/MenuItems.astro", void 0);

const $$Astro$5 = createAstro("https://positivustheme.vercel.app");
const $$Dropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<menu${addAttribute(["astronav-dropdown", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</menu>`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/node_modules/astro-navbar/src/components/Dropdown.astro", void 0);

const $$Astro$4 = createAstro("https://positivustheme.vercel.app");
const $$DropdownSubmenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$DropdownSubmenu;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown-submenu", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/node_modules/astro-navbar/src/components/DropdownSubmenu.astro", void 0);

const $$Astro$3 = createAstro("https://positivustheme.vercel.app");
const $$DropdownItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown dropdown-toggle hidden", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/node_modules/astro-navbar/src/components/DropdownItems.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://positivustheme.vercel.app");
const $$StickyHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StickyHeader;
  const {
    scrollY = 100,
    defaultClass = "",
    activeClass = "",
    class: className = "",
    ...rest
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<header", "", " data-astro-cid-itfz4qi6> ", " </header> <script>(function(){", '\n  // @ts-nocheck\n  let lastKnownScrollPosition = 0;\n  let ticking = false;\n\n  const header = document.querySelector(".astronav-sticky-header");\n\n  // Define two different scroll positions\n  const addScrollY = Math.max(scrollY, 100); // Scroll position to add active class\n  const removeScrollY = Math.max(scrollY - 50, 50); // Scroll position to remove active class\n\n  function updateAnimation(scrollPos) {\n    if (scrollPos > addScrollY) {\n      header.classList.remove(...defaultClass.split(" "));\n      header.classList.add("is-active", ...activeClass.split(" "));\n      header.setAttribute("active", "");\n    } else if (scrollPos < removeScrollY) {\n      header.classList.remove("is-active", ...activeClass.split(" "));\n      header.classList.add(...defaultClass.split(" "));\n      header.removeAttribute("active");\n    }\n  }\n\n  window.addEventListener("scroll", function () {\n    lastKnownScrollPosition = window.scrollY;\n    if (!ticking) {\n      window.requestAnimationFrame(function () {\n        updateAnimation(lastKnownScrollPosition);\n        ticking = false;\n      });\n\n      ticking = true;\n    }\n  });\n})();<\/script> '])), maybeRenderHead(), addAttribute(["astronav-sticky-header", className, defaultClass], "class:list"), spreadAttributes(rest), renderSlot($$result, $$slots["default"]), defineScriptVars({ scrollY, defaultClass, activeClass }));
}, "C:/Users/vinay/projects/DeskMate/Positivus/node_modules/astro-navbar/src/components/StickyHeader.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://positivustheme.vercel.app");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuitems = [
    { href: "/", label: "Home" },
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];
  const isAppPage = Astro2.url.pathname.startsWith("/app");
  Astro2.url.pathname === "/login" || Astro2.url.pathname === "/signup";
  const pathname = Astro2.url.pathname;
  function isActive(href) {
    if (href.startsWith("/#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href;
  }
  return renderTemplate(_a || (_a = __template(["", '<div class="mt-20"> <nav', '> <header class="flex flex-col lg:flex-row justify-between items-center my-5 px-6 md:px-32"> ', " <div> ", ` </div> </header> </nav> </div> <script>
  const menuIcon = document.getElementById('menu-icon');
  const openIcon = document.getElementById('open-icon');
  const closeIcon = document.getElementById('close-icon');
  const menuItems = document.getElementById('menu-items');
  const closeMenuItems = document.querySelectorAll('[data-close-menu="true"]');

  menuIcon.addEventListener('click', () => {
    menuItems.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  closeMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.classList.add('hidden');
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
<\/script>`])), maybeRenderHead(), addAttribute(`w-full top-0 left-0 z-50 fixed ${isAppPage ? "bg-dark border-b border-[#2d2e3a]" : "bg-white"}`, "class"), renderComponent($$result, "Astronav", $$Astronav, {}, { "default": ($$result2) => renderTemplate` <div class="flex w-full lg:w-auto items-center justify-between"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <span${addAttribute(`text-xl font-medium ${isAppPage ? "text-white" : "text-dark"}`, "class")}>
Desk<span class="greenhead">Mate</span> </span> </a> <div class="block lg:hidden"> <div id="menu-icon"${addAttribute(`w-8 h-8 cursor-pointer ${isAppPage ? "text-white" : "text-black"}`, "class")}> <!-- Open (hamburger) icon --> <svg id="open-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-8 h-8"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <!-- Close (X) icon --> <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-8 h-8 hidden"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </div> </div> </div> <nav class="hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0" id="menu-items"> <ul class="font-medium flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0"> ${menuitems.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(`mobile-nav-link block py-2 px-3 rounded lg:bg-transparent lg:p-0 transition-colors ${isAppPage ? "text-gray hover:text-green" : isActive(item.href) ? "text-dark font-medium border-b-2 border-[#b9ff66] pb-0.5" : "text-[#666] hover:text-dark"}`, "class")} data-close-menu="true"> ${item.label} </a> </li>`)} <div class="lg:hidden flex items-center justify-center mt-3 gap-3 flex-wrap"> <a class="mobile-nav-link px-6 py-3 rounded-2xl border border-zinc-900 text-black hover:bg-black hover:text-white inline-flex text-base" href="/login" data-close-menu="true">
Sign In
</a> <a class="mobile-nav-link px-6 py-3 rounded-2xl bg-green border border-zinc-900 text-dark hover:bg-black hover:text-white inline-flex text-base" href="/signup" data-close-menu="true">
Sign Up
</a> </div> </ul> </nav> ` }), isAppPage ? renderTemplate`<!-- App pages: just an "Open Chat" link -->
          <div class="hidden lg:flex items-center gap-4"> <a href="/app/chat" class="px-7 py-3.5 rounded-2xl bg-green hover:bg-dark text-dark hover:text-white border border-dark text-sm font-medium transition-all">
Open Chat
</a> </div>` : renderTemplate`<!-- Public pages: Sign In + Sign Up -->
          <div class="hidden lg:flex items-center gap-3"> <a href="/login" class="px-7 py-3.5 rounded-2xl border border-dark text-dark hover:bg-dark hover:text-white text-sm font-medium transition-all">
Sign In
</a> <a href="/signup" class="px-7 py-3.5 rounded-2xl bg-green border border-dark text-dark hover:bg-dark hover:text-white text-sm font-medium transition-all">
Sign Up Free
</a> </div>`);
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/components/ui/Navbar.astro", void 0);

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { ...props } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-ouamjn2i> ${renderComponent($$result, "MainHead", $$MainHead, { ...props, "data-astro-cid-ouamjn2i": true })}${renderScript($$result, "C:/Users/vinay/projects/DeskMate/Positivus/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts")}${maybeRenderHead()}<body class="bg-white font-grotesk" data-astro-cid-ouamjn2i> <main data-astro-cid-ouamjn2i> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-ouamjn2i": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ouamjn2i": true })} </main> </body></html>`;
}, "C:/Users/vinay/projects/DeskMate/Positivus/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
