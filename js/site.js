/* =========================================================
   EDIT YOUR SITE HERE
   Everything below in SITE is used across every page:
   the menu, the footer, the homepage roles, the work pages
   and your social links.
   ========================================================= */
const SITE = {
  name: "Angelic Cox",
  // Your logo image (top-left corner, mobile menu and footer).
  // Put the file in an images/ folder and set its path, e.g. "images/logo.png".
  // Leave it "" and a placeholder box shows instead.
  logo: "images/angelic-cox-logo.png",
  city: "San Francisco Bay Area",

  // The big words under "Hi! I'm a..." on the homepage.
  // `category` is the slug of the work category each word links to: clicking the word (or its star)
  // scrolls down the homepage to that category's projects (placeholder cards until it has some).
  roles: [
    { label: "Digital Marketer", category: "digital-marketer" },
    { label: "Data Analyst", category: "data-analyst" },
    { label: "Social Designer", category: "social-designer" },
    { label: "Digital Artist", category: "digital-artist" },
  ],

  // Work categories: they show in the Work dropdown and the footer, and each gets a section on the homepage
  // (when a role in the list above uses its slug). `image` isn't used right now.
  // Add `color: "#ff0000"` to pick its color (big page title + hover color);
  // otherwise they use orange, pink, blue, green, purple in turn.
  // Pick a dark enough color to read easily on white.
  // Add `layout: "grid"` for an art category: its pieces show in sets of four, with only their `title` as a small
  // caption (no skills): the 1st tall on the left, the 2nd and 3rd stacked in the middle, the 4th tall on the right.
  // Add `layout: "cross"` to show projects in sets of four, each with its name and skills: the 1st wide on top,
  // then the 2nd wide on the left, the 3rd tall in the middle and the 4th wide on the right.
  //
  // Each category has project slots. Fill in the blanks between the quotes:
  //   title     - project name, shown under the photo and on its page
  //   caption   - art categories only: the small line under the picture, if not the title ("" shows none)
  //   copy      - optional, false shows no words on the project's page: just its post (or picture), centered
  //   detail    - optional, a short line shown under the name on the project's own page, e.g. "Role · Type · Year"
  //   summary   - optional, one sentence about the project (kept for your notes; not shown right now)
  //   tags      - optional, a few skills, e.g. ["Excel", "Design"], shown as little round badges under the name
  //   image     - the photo people click, shown at its own shape (nothing gets cropped), e.g. "images/my-photo.jpg"
  //               (or use video: "images/my-clip.mp4" instead)
  //   instagram - optional, a post's link, e.g. "https://www.instagram.com/p/ABC123/"
  //   slides    - optional, a PDF or PowerPoint in files/, e.g. "files/my-deck.pdf"
  //   about     - optional, a few sentences shown next to the post on the project's page (not on the photo)
  //   link      - optional, a page somewhere else to send people to, shown under `about` (name it with linkLabel)
  //   credit    - optional, who took the photo, shown under it on the project's page, e.g. "Photo: Jane Doe"
  //   page      - optional, a write-up page for this project, e.g. "digital-marketer-project-1.html".
  //               Clicking the project opens that page instead (Instagram and slides then go in that page).
  // Once a category has a filled-in project, its page and its homepage section show only the filled-in ones
  // (name, skills and picture), one after another, in the order listed here. Delete the lines you don't need, or copy a line to add more.
  categories: [
    { slug: "digital-marketer", title: "Digital Marketer", image: "", layout: "cross", projects: [
      { title: "Impossible Foods: Making Plant-Based Meat Normal", detail: "Consultant · UC Berkeley course, best presentation · 2025",
        summary: "Interviewed 19 people about how a new food becomes normal, and pitched where Impossible Foods should show up next.",
        tags: ["Interviews", "Consumer research", "Canva"],
        image: "images/impossible-foods-slide-01.jpg", instagram: "", slides: "", page: "digital-marketer-project-3.html" },
      { title: "LeadGenPro: From Spend to Strategy", detail: "Project Manager · Capstone, simulated data · 2026",
        summary: "Led a team of four through a 90-day ad plan for a software company, from first meeting to final presentation.",
        tags: ["Ad strategy", "Project management", "Presenting"],
        image: "images/leadgenpro-slide-01.jpg", instagram: "", slides: "", page: "digital-marketer-project-2.html" },
      { title: "Emo Night at 924 Gilman", detail: "Social media & analytics · Instagram campaign · 2025",
        summary: "Spotted rising ad costs, switched to posts made for each music style, and designed a campaign that brought 100+ people to the show.",
        tags: ["Excel", "Instagram analytics", "Design"],
        image: "images/emo-night-poster.jpg", instagram: "https://www.instagram.com/p/DSTMDNDEpwZ/", slides: "", page: "",
        about: "I tracked the Instagram ads in an Excel dashboard and noticed the cost per click (what's paid each time someone clicks) nearly doubled in three months, from $0.076 to $0.146. People were tired of the same schedule posts, so I suggested posts made for each show's music style and designed this Emo Night campaign. It got 1,400+ likes and brought 100+ people to the show." },
      { title: "Chewy: Paid Media Performance Report", detail: "Performance Analyst · Simulated project · 2026",
        summary: "Compared $3.57M in Google and Facebook ads to find which were worth the money, and where to move the budget.",
        tags: ["Data analysis", "Paid media", "Google Sheets", "Excel"],
        image: "images/chewy-report-slide-01.jpg", instagram: "", slides: "", page: "digital-marketer-project-1.html" },
    ] },
    { slug: "data-analyst", title: "Data Analyst", image: "", projects: [
      { title: "ONGB: Student Absenteeism in Oakland Unified School District", detail: "Data Science Discovery Intern · Research poster · 2024–2025",
        summary: "Built machine learning models with a research team to predict which Oakland students were at risk of chronic absenteeism, with about 80% accuracy.",
        tags: ["Machine learning", "Jupyter Notebook", "Data visualization", "Poster design"],
        image: "images/ongb-thumbnail.jpg", instagram: "", slides: "", page: "data-analyst-project-1.html" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
    ] },
    { slug: "social-designer", title: "Social Designer", image: "", projects: [
      { title: "EMPIRE: Social Media Designs", detail: "Social designer · Mock designs · Figma",
        summary: "Mock Instagram designs for EMPIRE in Figma: a carousel, Instagram stories, and one post taken through three versions.",
        tags: ["Figma", "Instagram carousels", "Instagram stories", "Iterative design"],
        image: "images/empire-carousel.jpg", instagram: "", slides: "", page: "social-designer-project-1.html" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
    ] },
    { slug: "digital-artist", title: "Digital Artist", image: "", layout: "grid", projects: [
      { title: "Balu Brigada · Sticker", caption: "", detail: "Procreate & Photoshop · 2025",
        summary: "Drew a sticker in Procreate, laid out the sheet in Photoshop and handed the stickers out at the show. One ended up on a guitar on stage.",
        tags: ["Procreate", "Photoshop", "Illustration", "Sticker design"],
        image: "images/balu-brigada-sticker.jpg", instagram: "", slides: "", page: "",
        about: "I drew this sticker digitally in Procreate, then designed the sticker sheet layout in Photoshop. I cut out the stickers and handed them out at a Balu Brigada show. One made it into the artist's hands, and onto a guitar on stage at Brooklyn Bowl in Philadelphia on October 31, 2025.",
        credit: "Photo: Cami Liberty for Unclear Magazine",
        link: "https://www.unclearmag.com/concerts-events-posts/2025/11/5/balu-brigada-philadelphia", linkLabel: "See it on Unclear Magazine" },
      { title: "Mk.gee · Digital painting", caption: "", copy: false, detail: "Photoshop · 2026",
        summary: "A Photoshop painting inspired by Mk.gee's A Museum of Contradiction, made while practicing color theory.",
        tags: ["Photoshop", "Digital painting", "Color theory"],
        image: "images/museum-of-contradiction.jpg", instagram: "https://www.instagram.com/p/DTUKIeKFMNL/", slides: "", page: "",
        about: "A digital painting in Photoshop, inspired by Mk.gee's A Museum of Contradiction. I had the album on repeat for two months. I'd also been practicing color theory, and this piece puts it to work: one glowing light in the dark." },
      { title: "Balu Brigada · Digital illustration", caption: "", copy: false, detail: "Photoshop · 2025",
        summary: "A Photoshop illustration made for the release of Balu Brigada's album Portal, exploring new texture brushes.",
        tags: ["Photoshop", "Illustration", "Texture brushes"],
        image: "images/balu-brigada-portal.jpg", focus: "top", instagram: "https://www.instagram.com/p/DN_nIHgEgDX/", slides: "", page: "",
        about: "I made this for the release of Portal, Balu Brigada's new album. This is how the album's vibe looked in my head. I painted it in Photoshop, trying out new texture brushes." },
      { title: "Balu Brigada · Digital painting", caption: "", copy: false, detail: "Photoshop · 2026",
        summary: "A Photoshop painting of Henry Beasley for his birthday, from my own photo of Balu Brigada's show at Bimbo's 365 Club.",
        tags: ["Photoshop", "Digital painting", "Portraiture"],
        image: "images/henry-beasley-painting.jpg", instagram: "https://www.instagram.com/p/Dcy5K1nmH3i/", slides: "", page: "",
        about: "I painted Henry Beasley of Balu Brigada in Photoshop for his birthday. The reference photo is my own, taken at their show at Bimbo's 365 Club in San Francisco. It's one of my favorite shows I've seen." },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
      { title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
    ] },
  ],

  // Shown under "Connect" in the footer and as icons on the About page.
  // Replace "#" with your profile link.
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/angeliccox" },
  ],
};

/* =========================================================
   You shouldn't need to edit below this line.
   ========================================================= */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  // Each category's color: its big page title, and the color its name turns on hover.
  // All are high contrast on white (at least 4.5 : 1): orange, pink, blue, green, purple.
  const CAT_COLORS = ["#c2410c", "#be185d", "#0062b1", "#047857", "#8b278c"];
  const catColor = (c) => c.color || CAT_COLORS[SITE.categories.indexOf(c) % CAT_COLORS.length];
  const page = document.body.dataset.page;
  const findCat = (slug) => SITE.categories.find((c) => c.slug === slug);
  // Each project gets its own page: project.html?c=<category slug>&p=<project name as a slug>
  const slugify = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const projectId = (p, i) => slugify(p.title) || String(i + 1);
  // A project with its own write-up page (`page:` in SITE) opens that page instead.
  const projectUrl = (c, p, i) =>
    p.page || `project.html?c=${encodeURIComponent(c.slug)}&p=${encodeURIComponent(projectId(p, i))}`;
  const current = (id) =>
    page === id || (id === "work" && ["project", "write-up"].includes(page)) ? 'aria-current="page"' : "";

  function logo() {
    return SITE.logo
      ? `<img src="${esc(SITE.logo)}" alt="">`
      : '<span class="ph logo-ph"><strong>Logo</strong></span>';
  }

  // `extra` adds attributes to the picture, e.g. a style
  const media = (p, extra = "") =>
    p.video
      ? `<video src="${esc(p.video)}" ${extra} autoplay muted loop playsinline></video>`
      : `<img src="${esc(p.image)}" alt="${esc(p.title || "")}" ${extra} loading="lazy">`;
  const ph = (shape, label) =>
    `<div class="ph" style="aspect-ratio:${shape}"><div><strong>${label}</strong></div></div>`;

  // Huge title sized to fill the width of the heading around it (category pages and homepage projects).
  // Two passes, since text doesn't grow exactly in step with font size.
  // (+.03em puts back the tight letter-spacing trimmed after the last letter.)
  const fitTitle = (title) => {
    const fit = () => {
      let size = 100;
      for (let pass = 0; pass < 2; pass++) {
        title.style.fontSize = `${size}px`;
        size = (size * title.parentElement.clientWidth) / (title.offsetWidth + size * 0.03);
      }
      title.style.fontSize = `${size}px`;
    };
    fit();
    addEventListener("resize", fit);
  };

  // Projects, laid out like jamesjunk.co: one after another down the page, each with its name and its skills (`tags`),
  // then its picture at its own shape (nothing cropped) with rounded corners.
  // Each project opens its project page. Used on the homepage and on each category page, in the order listed in SITE.
  // Goes inside a <div class="feed">. A role with no projects yet shows two placeholders instead, not clickable.
  const filledProjects = (c) => (c.projects || []).filter((p) => p.title || p.image || p.video);
  const skills = (tags) => (tags.length ? `<ul class="skills">${tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : "");
  const projectFeed = (c, heading) => {
    if (c.layout === "grid") return artGrid(c);
    if (c.layout === "cross") return crossGrid(c, heading);
    const list = filledProjects(c);
    const items = list.length
      ? list.map((p) => `
          <a class="feed-item" href="${projectUrl(c, p, c.projects.indexOf(p))}">
            <${heading} class="feed-title">${esc(p.title || "Project Title")}</${heading}>
            ${skills(p.tags || [])}
            <div class="feed-media">${p.image || p.video ? media(p) : ""}</div>
          </a>`)
      : [0, 1].map(() => `
          <div class="feed-item">
            <${heading} class="feed-title">Project Title</${heading}>
            <div class="feed-media ph"><div><strong>Project photo</strong></div></div>
          </div>`);
    return items.join("");
  };
  // `layout: "cross"` in SITE: projects in sets of four, in the order listed in SITE, each with its name and skills under it:
  //   1st - wide, on top, centered over the 3rd
  //   2nd - wide, below on the left        3rd - tall, below in the middle        4th - wide, below on the right
  // So list the tall project 3rd. A fifth project starts a new set of four below. Each opens its project page.
  const crossGrid = (c, heading) => {
    const list = filledProjects(c);
    const pieces = list.length
      ? list.map((p) => `
          <a class="cross-piece" href="${projectUrl(c, p, c.projects.indexOf(p))}">
            <div class="cross-media">${p.image || p.video ? media(p) : ""}</div>
            <${heading} class="cross-title">${esc(p.title || "Project Title")}</${heading}>
            ${skills(p.tags || [])}
          </a>`)
      : ["16 / 9", "16 / 9", "4 / 5", "16 / 9"].map((shape) => `
          <div class="cross-piece">
            <div class="cross-media">${ph(shape, "Project photo")}</div>
            <${heading} class="cross-title">Project Title</${heading}>
          </div>`);
    const sets = [];
    for (let i = 0; i < pieces.length; i += 4) sets.push(`<div class="cross-set">${pieces.slice(i, i + 4).join("")}</div>`);
    return sets.join("");
  };
  // Art categories (`layout: "grid"` in SITE) show their pieces in sets of four, each with only a small caption
  // under it (its `title`, e.g. "Balu Brigada · Sticker"), in the order listed in SITE:
  //   1st - tall, on the left        2nd and 3rd - stacked in the middle        4th - tall, on the right
  // So list tall pieces 1st and 4th. A fifth piece starts a new set of four below. Each opens its project page.
  // The middle pieces get trimmed to fit; `focus` on a piece picks the part to keep, e.g. "top" (default: the middle).
  // The caption is the piece's `title`, unless it has its own `caption` ("" shows none).
  const artCaption = (p) => ("caption" in p ? p.caption : p.title);
  const artGrid = (c) => {
    const list = filledProjects(c);
    const pieces = list.length
      ? list.map((p) => `
          <a class="art-piece" href="${projectUrl(c, p, c.projects.indexOf(p))}">
            ${p.image || p.video ? media(p, p.focus ? `style="object-position:${esc(p.focus)}"` : "") : ""}
            ${artCaption(p) ? `<p class="art-caption">${esc(artCaption(p))}</p>` : ""}
          </a>`)
      : ["4 / 5", "4 / 3", "4 / 3", "4 / 5"].map((shape) => `<div class="art-piece">${ph(shape, "Artwork")}</div>`);
    const sets = [];
    for (let i = 0; i < pieces.length; i += 4) sets.push(`<div class="art-set">${pieces.slice(i, i + 4).join("")}</div>`);
    return `<div class="art-grid">${sets.join("")}</div>`;
  };
  // Every role gets a section under the homepage's first screen (one per category, in the order of the roles list).
  const homeRoles = SITE.roles.filter(
    (r, i, all) => findCat(r.category) && all.findIndex((x) => x.category === r.category) === i
  );
  const onHome = (slug) => homeRoles.some((r) => r.category === slug);
  // The categories in the menu's Work dropdown (and the footer's) lead down the homepage to their projects.
  // On the homepage itself they just glide down. "work" is the top of the projects; a category without
  // a homepage section leads there too.
  const homeLink = (id) => `${page === "home" ? "" : "index.html"}#${encodeURIComponent(id)}`;
  const workUrl = (c) => homeLink(onHome(c.slug) ? c.slug : "work");
  // Where "go back" leads from a project: its section on the homepage
  const backUrl = (c) => `index.html#${encodeURIComponent(onHome(c.slug) ? c.slug : "work")}`;

  // Instagram's own embed code; Instagram's script turns it into the post (it must be a public post).
  // With captioned false, the post shows without its Instagram caption.
  const instagramEmbed = (url, captioned = true) => {
    const link = String(url).split("?")[0].replace(/\/?$/, "/");
    return `
      <blockquote class="instagram-media" ${captioned ? "data-instgrm-captioned" : ""} data-instgrm-permalink="${esc(link)}" data-instgrm-version="14">
        <a href="${esc(link)}" target="_blank" rel="noopener">View this post on Instagram</a>
      </blockquote>`;
  };
  const loadInstagram = () => {
    if (!$(".instagram-media") || $('script[src*="instagram.com/embed"]')) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);
  };

  // A PDF shows in the browser's own viewer. A PowerPoint shows in Microsoft's free online
  // viewer, which only works once the site is online (it has to fetch the file from your site).
  const slidesEmbed = (file, title) => {
    const url = new URL(file, location.href).href;
    const pptx = /\.pptx?$/i.test(file);
    const online = location.protocol.startsWith("http");
    const office = (mode) => `https://view.officeapps.live.com/op/${mode}.aspx?src=${encodeURIComponent(url)}`;
    const label = esc(`${title || "Project"} slides`);
    const frame = !pptx
      ? `<iframe class="slides" src="${esc(url)}" title="${label}"></iframe>`
      : online
      ? `<iframe class="slides" src="${esc(office("embed"))}" title="${label}"></iframe>`
      : `<div class="ph slides"><div><strong>PowerPoint preview</strong><span>It shows here once your site is online. For now, use the link below.</span></div></div>`;
    const open = pptx && online ? office("view") : url;
    return `<div class="slides-block">${frame}<a class="slides-link" href="${esc(open)}" target="_blank" rel="noopener">Open slides &#8599;</a></div>`;
  };

  const ICONS = {
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
    tiktok:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.6 2.6 2.4 4.4 5 5"/></svg>',
    youtube:
      '<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor"/><path d="M10 9l5 3-5 3z" fill="#fff"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor"/><path d="M7.5 10.5v6M7.5 7.3v.01M11.5 16.5v-6m0 3a2.5 2.5 0 0 1 5 0v3" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>',
  };
  const icon = (label) =>
    ICONS[label.toLowerCase()] ||
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>';

  // The menu buttons. Work leads to the homepage's first screen (on the homepage it glides back up to it);
  // pointing at it (or tabbing to it) opens its dropdown of categories.
  const BUTTONS = [
    { label: "Work", href: page === "home" ? "#top" : "index.html", page: "work" },
    { label: "About", href: "about.html", page: "about" },
    { label: "Contact", href: "about.html#contact" },
  ];
  const button = (b) => `<a class="btn" href="${b.href}" ${b.page ? current(b.page) : ""}>${b.label}</a>`;
  // The last item in the Work dropdown: back to the homepage's first screen, where the roles are
  const HOME_LABEL = "Selection Screen";

  /* ---------- Header ---------- */
  const header = $("#site-header");
  if (header) {
    const [work, ...rest] = BUTTONS;
    header.className = "site-header";
    header.innerHTML = `
      <a class="skip" href="#main">Skip to content</a>
      <div class="bar">
        <a class="logo" href="index.html" aria-label="${esc(SITE.name)}, home">${logo()}</a>
        <nav class="nav" aria-label="Main">
          <div class="has-menu">
            ${button(work)}
            <ul class="dropdown">
              ${SITE.categories.map((c) => `<li><a href="${workUrl(c)}">${esc(c.title)}</a></li>`).join("")}
              <li class="dropdown-home"><a href="${work.href}">${HOME_LABEL}</a></li>
            </ul>
          </div>
          ${rest.map(button).join("")}
        </nav>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">
          <span class="burger" aria-hidden="true"></span><span class="sr">Open menu</span>
        </button>
      </div>
      <div class="mobile-menu" id="mobile-menu" hidden>
        <div class="bar">
          <a class="logo" href="index.html" aria-label="${esc(SITE.name)}, home">${logo()}</a>
          <button class="menu-close" type="button">Close</button>
        </div>
        <nav class="mobile-nav" aria-label="Mobile">
          ${button(work)}
          <div class="sub">
            ${SITE.categories.map((c) => `<a href="${workUrl(c)}">${esc(c.title)}</a>`).join("")}
            <a class="sub-home" href="${work.href}">${HOME_LABEL}</a>
          </div>
          ${rest.map(button).join("")}
        </nav>
      </div>`;

    const menu = $("#mobile-menu");
    const toggle = $(".menu-toggle", header);
    const setOpen = (open) => {
      menu.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
      if (open) $(".menu-close", menu).focus();
      else toggle.focus({ preventScroll: true });
    };
    toggle.addEventListener("click", () => setOpen(true));
    $(".menu-close", menu).addEventListener("click", () => setOpen(false));
    $$("a", menu).forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !menu.hidden) setOpen(false);
    });
  }

  /* ---------- Footer ---------- */
  const footer = $("#site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="footer-grid">
        <div>
          <p class="footer-head">Work</p>
          ${SITE.categories.map((c) => `<a href="${workUrl(c)}">${esc(c.title)}</a>`).join("")}
        </div>
        <div class="footer-pages">
          <a href="about.html">About</a>
          <a href="about.html#contact">Contact</a>
        </div>
        <div>
          <p class="footer-head">Connect</p>
          ${SITE.socials.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("")}
        </div>
        <a class="logo footer-logo" href="index.html" aria-label="${esc(SITE.name)}, home">${logo()}</a>
      </div>`;
  }

  /* ---------- Shared bits ---------- */
  $$("[data-name]").forEach((el) => (el.textContent = SITE.name));
  $$("[data-city]").forEach((el) => (el.textContent = SITE.city));

  $$("[data-roles]").forEach((ul) => {
    ul.innerHTML = SITE.roles
      .map((r, i) => {
        const cat = findCat(r.category);
        // Scrolls down the homepage to the role's projects.
        const href = cat ? workUrl(cat) : homeLink("work");
        const color = cat ? catColor(cat) : CAT_COLORS[i % CAT_COLORS.length];
        return `<li><a href="${href}" style="--c:${esc(color)}">${esc(r.label)}</a></li>`;
      })
      .join("");
  });

  // "Role One, Role Two, and Role Three"
  $$("[data-roles-inline]").forEach((el) => {
    const labels = SITE.roles.map((r) => r.label);
    el.textContent =
      labels.length > 2 ? `${labels.slice(0, -1).join(", ")}, and ${labels[labels.length - 1]}` : labels.join(" and ");
  });

  $$("[data-socials]").forEach((ul) => {
    ul.innerHTML = SITE.socials
      .map(
        (s) =>
          `<li><a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}">${icon(s.label)}</a></li>`
      )
      .join("");
  });

  /* ---------- Homepage: each role's projects, under the first screen ---------- */
  // A big title in the role's color, then its projects (see projectFeed above; placeholders until it has some).
  $$("[data-home-work]").forEach((box) => {
    box.innerHTML = homeRoles
      .map((r) => {
        const c = findCat(r.category);
        return `
        <section id="${esc(c.slug)}" style="--c:${esc(catColor(c))}" aria-labelledby="${esc(c.slug)}-title">
          <h2 class="cat-title" style="color:${esc(catColor(c))}"><span id="${esc(c.slug)}-title">${esc(r.label)}</span></h2>
          <div class="feed">${projectFeed(c, "h3")}</div>
        </section>`;
      })
      .join("");
    $$(".cat-title > span", box).forEach(fitTitle);

    // Going to a section further down (clicking a role or a Work category, or arriving from another page at
    // e.g. index.html#data-analyst): pictures above it can load in after the page has set off, and push the section
    // further down, so the page would stop short. As each picture loads, aim at the section again
    // (smoothly if the page is gliding there, instantly on arrival), unless the visitor has scrolled on their own.
    // A section laid out as `layout: "cross"` (Digital Marketer) lands past its big title, on its projects:
    // centered on the screen when they fit, otherwise with their top just under the menu.
    // Every other section lands with its big title just under the menu.
    let target = null;
    let glide = false;
    const aimAt = (smooth) => {
      target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
      glide = smooth;
    };
    const landing = (el) => {
      const menu = header ? header.offsetHeight : 0;
      const set = $(":scope > .feed > .cross-set", el);
      const box = (set || el).getBoundingClientRect();
      const top = box.top + scrollY - menu;
      if (!set) return top;
      const room = innerHeight - menu;
      return box.height + 32 <= room ? top - (room - box.height) / 2 : top - 16;
    };
    const aim = () => target && scrollTo({ top: landing(target), behavior: glide ? "smooth" : "instant" });
    ["wheel", "touchstart", "keydown"].forEach((e) => addEventListener(e, () => (target = null), { passive: true }));
    // Links on this page to a section (the roles, the Work dropdown, the footer) glide to where it lands
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      const el = a && a.hash.length > 1 && document.getElementById(decodeURIComponent(a.hash.slice(1)));
      if (!el || !box.contains(el)) return;
      e.preventDefault();
      history.pushState(null, "", a.hash);
      aimAt(true);
      aim();
    });
    addEventListener("hashchange", () => {
      aimAt(true);
      aim();
    });
    $$("img", box).forEach((img) => img.addEventListener("load", aim));
    addEventListener("load", aim);
    aimAt(false);
    aim();
  });

  // Homepage menu: see-through over the first screen, then white once the first screen has scrolled away.
  const hero = $(".home-hero");
  if (header && hero) {
    // (+2 allows for screens that land a fraction of a pixel off)
    const solid = () => header.classList.toggle("is-solid", hero.getBoundingClientRect().bottom <= header.offsetHeight + 2);
    solid();
    addEventListener("scroll", solid, { passive: true });
    addEventListener("resize", solid);
  }

  /* ---------- Project page ---------- */
  if (page === "project") {
    const q = new URLSearchParams(location.search);
    const cat = findCat(q.get("c")) || SITE.categories[0];
    const list = cat.projects || [];
    const p = list.find((x, i) => projectId(x, i) === q.get("p")) || list[0];
    // Projects with their own write-up page live there instead.
    if (p && p.page) return location.replace(p.page);

    const back = $("[data-back]");
    back.href = backUrl(cat);
    back.innerHTML = "&larr; go back";

    if (p) {
      document.title = `${p.title || "Project"} | ${SITE.name}`;
      // `copy: false`: no words on the page, just the post (or picture), centered, without its Instagram caption.
      // The name stays in the browser tab and for screen readers.
      if (p.copy === false) {
        $(".project-head").classList.add("sr");
        $("main").classList.add("is-bare");
      }
      $("[data-project-title]").textContent = p.title || "Project Title";
      $("[data-project-detail]").textContent = p.copy === false ? "" : p.detail || "";
      $("[data-project-about]").textContent = p.copy === false ? "" : p.about || "";
      const link = $("[data-project-link]");
      if (link && p.link) {
        link.href = p.link;
        link.innerHTML = `${esc(p.linkLabel || "See it online")} &#8599;`;
        link.hidden = false;
      }

      // Instagram post(s) first, then slides. With neither, the project's photo or video shows big.
      // A slot that's still completely empty shows where its Instagram post and slides will go.
      const blocks = [].concat(p.instagram || []).map((url) => instagramEmbed(url, p.copy !== false));
      if (p.slides) blocks.push(slidesEmbed(p.slides, p.title));
      if (!blocks.length && (p.image || p.video))
        blocks.push(`<figure class="project-photo">${media(p)}${p.credit ? `<figcaption>${esc(p.credit)}</figcaption>` : ""}</figure>`);
      if (!blocks.length) {
        blocks.push(
          `<div class="ph" style="aspect-ratio:4 / 5"><div><strong>Instagram post</strong><span>Paste the post's link after instagram: for this project in js/site.js.</span></div></div>`,
          `<div class="slides-block"><div class="ph slides"><div><strong>Slides</strong><span>Put a PDF or PowerPoint in the files folder and add it after slides: for this project in js/site.js.</span></div></div></div>`
        );
      }
      $("[data-project-media]").innerHTML = blocks.join("");
      loadInstagram();
    } else {
      document.title = `${cat.title} | ${SITE.name}`;
      $("[data-project-title]").textContent = "No projects here yet";
    }
  }

  /* ---------- Project write-up pages (their own file, e.g. digital-marketer-project-1.html) ---------- */
  if (page === "write-up") {
    const cat = findCat(document.body.dataset.category);
    if (cat) {
      $$("[data-back]").forEach((a) => {
        a.href = backUrl(cat);
        a.innerHTML = "&larr; go back";
      });
      document.body.style.setProperty("--c", catColor(cat));
    }
    const h1 = $("main h1");
    if (h1) document.title = `${h1.textContent.trim()} | ${SITE.name}`;

    // <div data-instagram="post link"></div> becomes the post; <div data-slides="files/deck.pdf"></div> the slides.
    $$("[data-instagram]").forEach((el) => {
      el.innerHTML = el.dataset.instagram.trim()
        ? instagramEmbed(el.dataset.instagram.trim())
        : `<div class="ph" style="aspect-ratio:4 / 5"><div><strong>Instagram post</strong><span>Paste the post's link between the quotes in data-instagram="" in this page's file.</span></div></div>`;
    });
    $$("[data-slides]").forEach((el) => {
      el.innerHTML = el.dataset.slides.trim()
        ? slidesEmbed(el.dataset.slides.trim(), h1 && h1.textContent.trim())
        : `<div class="ph slides"><div><strong>Slides</strong><span>Put a PDF or PowerPoint in the files folder and type its name between the quotes in data-slides="" in this page's file.</span></div></div>`;
    });
    loadInstagram();

    // Slideshows: one picture at a time, with arrow buttons to flip through them.
    $$("[data-carousel]").forEach((box) => {
      const slides = $$(":scope > .slide", box);
      if (!slides.length) return;
      let at = 0;
      const nav = document.createElement("div");
      nav.className = "carousel-nav";
      nav.innerHTML = `
        <button type="button" data-step="-1" aria-label="Previous picture">&larr;</button>
        <span class="carousel-count" aria-live="polite"></span>
        <button type="button" data-step="1" aria-label="Next picture">&rarr;</button>`;
      if (slides.length > 1) box.appendChild(nav);
      const show = (i) => {
        at = (i + slides.length) % slides.length;
        slides.forEach((s, j) => {
          s.classList.toggle("on", j === at);
          s.inert = j !== at;
        });
        $(".carousel-count", nav).textContent = `${at + 1} / ${slides.length}`;
      };
      $$("button", nav).forEach((b) => b.addEventListener("click", () => {
        box.classList.add("is-live");
        show(at + Number(b.dataset.step));
      }));
      box.classList.add("is-ready");
      show(0);
    });

    // Zoomable pictures, e.g. a full poster: <div data-zoom="files/poster.png" data-alt="What it shows"></div>.
    // The whole picture fits in a frame. People zoom in with the buttons, a double-click, a pinch (phone or trackpad)
    // or ctrl + mouse wheel, then drag to move around. Until it's zoomed in, swiping over it still scrolls the page.
    // Also used by the full-screen viewer below.
    const makeZoom = (box, src, alt, { lazy = true, hint = true } = {}) => {
      box.classList.add("zoom");
      box.innerHTML = `
        <div class="zoom-stage">
          <img src="${esc(src)}" alt="${esc(alt)}" draggable="false" ${lazy ? 'loading="lazy"' : ""}>
        </div>
        <div class="zoom-nav">
          <button type="button" data-zoom-step="-1" aria-label="Zoom out">&minus;</button>
          <button type="button" data-zoom-fit>Fit</button>
          <button type="button" data-zoom-step="1" aria-label="Zoom in">+</button>
        </div>
        ${hint ? '<p class="zoom-hint">Zoom with the buttons, a double-click or a pinch. Drag to move around.</p>' : ""}`;
      const stage = $(".zoom-stage", box);
      const img = $("img", stage);
      // s = how big the picture is drawn (1 = its real size); x, y = where its top-left corner sits in the frame
      let s = 1, x = 0, y = 0, fit = 1;
      const zoomed = () => s > fit * 1.01;
      // Keep the picture covering the frame, or centered in it when it's smaller than the frame
      const keep = (at, size, room) => (size <= room ? (room - size) / 2 : Math.min(0, Math.max(room - size, at)));
      const draw = (smooth) => {
        x = keep(x, img.naturalWidth * s, stage.clientWidth);
        y = keep(y, img.naturalHeight * s, stage.clientHeight);
        img.style.transition = smooth ? "transform .25s ease" : "none";
        img.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
        stage.classList.toggle("is-zoomed", zoomed());
      };
      // Zoom around a point in the frame (its middle unless given), from the whole picture up to its real size
      const zoomTo = (next, smooth, px = stage.clientWidth / 2, py = stage.clientHeight / 2) => {
        next = Math.min(Math.max(1, fit), Math.max(fit, next));
        x = px - ((px - x) * next) / s;
        y = py - ((py - y) * next) / s;
        s = next;
        draw(smooth);
      };
      const fitAll = (smooth) => {
        if (!img.naturalWidth) return;
        fit = Math.min(stage.clientWidth / img.naturalWidth, stage.clientHeight / img.naturalHeight);
        s = fit;
        draw(smooth);
      };
      if (img.complete) fitAll();
      img.addEventListener("load", () => fitAll());
      new ResizeObserver(() => fitAll()).observe(stage);

      $$("[data-zoom-step]", box).forEach((b) =>
        b.addEventListener("click", () => zoomTo(s * 1.6 ** Number(b.dataset.zoomStep), true)));
      $("[data-zoom-fit]", box).addEventListener("click", () => fitAll(true));

      const spot = (e) => {
        const r = stage.getBoundingClientRect();
        return [e.clientX - r.left, e.clientY - r.top];
      };
      stage.addEventListener("dblclick", (e) => (zoomed() ? fitAll(true) : zoomTo(s * 3, true, ...spot(e))));
      stage.addEventListener("wheel", (e) => {
        if (!e.ctrlKey) return; // a trackpad pinch arrives as ctrl + wheel; a plain wheel scrolls the page
        e.preventDefault();
        zoomTo(s * Math.exp(-e.deltaY / 100), false, ...spot(e));
      }, { passive: false });

      // Dragging with one finger or the mouse moves the picture; two fingers pinch to zoom
      const fingers = new Map();
      let spread = 0;
      stage.addEventListener("pointerdown", (e) => {
        fingers.set(e.pointerId, spot(e));
        stage.setPointerCapture(e.pointerId);
      });
      stage.addEventListener("pointermove", (e) => {
        if (!fingers.has(e.pointerId)) return;
        const [px, py] = spot(e);
        const [lx, ly] = fingers.get(e.pointerId);
        fingers.set(e.pointerId, [px, py]);
        if (fingers.size === 2) {
          const [a, b] = [...fingers.values()];
          const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
          if (spread) zoomTo((s * d) / spread, false, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
          spread = d;
        } else if (fingers.size === 1) {
          x += px - lx;
          y += py - ly;
          draw();
        }
      });
      const lift = (e) => {
        fingers.delete(e.pointerId);
        spread = 0;
      };
      stage.addEventListener("pointerup", lift);
      stage.addEventListener("pointercancel", lift);
    };
    $$("[data-zoom]").forEach((box) => makeZoom(box, box.dataset.zoom, box.dataset.alt || ""));

    // Pictures people can tap into: <div data-lightbox> holding <a href="picture.jpg" data-title="Name"> links.
    // Tapping one opens it full screen in the zoom viewer above, with arrows to the others in the group.
    // Close it with the Close button or Esc; the arrow keys flip through them too.
    $$("[data-lightbox]").forEach((group) => {
      const links = $$("a[href]", group);
      if (!links.length) return;
      const box = document.createElement("div");
      box.className = "lightbox";
      box.hidden = true;
      box.setAttribute("role", "dialog");
      box.setAttribute("aria-modal", "true");
      box.innerHTML = `
        <div class="lightbox-bar">
          <p class="lightbox-title" aria-live="polite"></p>
          <button class="btn" type="button" data-close>Close</button>
        </div>
        <div class="lightbox-view"></div>
        <div class="lightbox-nav" ${links.length < 2 ? "hidden" : ""}>
          <button type="button" data-step="-1" aria-label="Previous picture">&larr;</button>
          <button type="button" data-step="1" aria-label="Next picture">&rarr;</button>
        </div>`;
      document.body.appendChild(box);
      let at = 0;
      let opener = null;
      const show = (i) => {
        at = (i + links.length) % links.length;
        const a = links[at];
        const alt = ($("img", a) || {}).alt || "";
        $(".lightbox-title", box).textContent = `${at + 1} / ${links.length} · ${a.dataset.title || alt}`;
        box.setAttribute("aria-label", a.dataset.title || alt);
        makeZoom($(".lightbox-view", box), a.href, alt, { lazy: false, hint: false });
      };
      const close = () => {
        box.hidden = true;
        document.body.style.overflow = "";
        $(".lightbox-view", box).innerHTML = "";
        if (opener) opener.focus();
      };
      links.forEach((a, i) =>
        a.addEventListener("click", (e) => {
          e.preventDefault();
          opener = a;
          box.hidden = false;
          document.body.style.overflow = "hidden";
          show(i);
          $("[data-close]", box).focus();
        }));
      $("[data-close]", box).addEventListener("click", close);
      $$("[data-step]", box).forEach((b) => b.addEventListener("click", () => show(at + Number(b.dataset.step))));
      document.addEventListener("keydown", (e) => {
        if (box.hidden) return;
        if (e.key === "Escape") close();
        else if (e.key === "ArrowLeft") show(at - 1);
        else if (e.key === "ArrowRight") show(at + 1);
      });
    });
  }

  /* ---------- Page titles ---------- */
  const titles = { home: SITE.name, about: `About | ${SITE.name}` };
  if (titles[page]) document.title = titles[page];
})();
