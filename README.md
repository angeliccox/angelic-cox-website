# Angelic Cox: personal website

A plain HTML/CSS/JS site with no build step. Open `index.html` in a browser to preview it.

## Pages
| File | What it is |
|---|---|
| `index.html` | Home: the first screen has the "Hi! I'm a…" and "Based in San Francisco Bay Area" handwriting images and your roles over your full-screen hero design (`images/hero.jpg`; phones use `images/hero-paper.jpg` behind the words and show the photo below them). Keep scrolling and every role follows, one after another: a big title in its color, then its projects (placeholders until it has projects). Clicking a role (or its star) glides down to it. The menu stays at the top, turning white once the first screen scrolls away |
| `project.html` | One page for each project (`project.html?c=<category>&p=<project>`): name and year, plus its Instagram post and/or slides |
| `digital-marketer-project-1.html` to `-3.html` | Project write-up pages (Chewy, LeadGenPro, Impossible Foods): title, picture slideshow, then sections of writing and pictures. Copy one for more write-ups and link each from its project's `page:` in `js/site.js` |
| `social-designer-project-1.html` | Showcase page for the EMPIRE mock social media designs (Social Designer), laid out like jamesjunk.co/impact: the name and a short intro, centered, then the designs, two on top and one centered below (`images/empire-*.jpg`). Tapping one opens it full screen, where people can zoom in and flip through them. Copy it for more showcase pages |
| `data-analyst-project-1.html` | Write-up page for the ONGB student absenteeism research poster (Data Analyst). Its pictures are crops of the poster (`images/ongb-poster*.jpg`, and the homepage preview `images/ongb-thumbnail.jpg`); the full-size poster is `files/ongb-poster.png` |
| `about.html` | Intro, "Reach out!" handwriting image, LinkedIn icon, wide photo, and the contact form (`#contact`) |
| `thanks.html` | Where people land after sending the contact form |

The menu has three outlined pill buttons: Work (with a dropdown of categories), About and Contact.
The footer has the categories, About/Contact, Connect (LinkedIn) and a big logo.

## Editing
**Step-by-step guide for adding your photos, videos and text: [HOW-TO-ADD-PHOTOS.md](HOW-TO-ADD-PHOTOS.md)**

- **Name, city, roles, categories, socials:** edit the `SITE` block at the top of `js/site.js`. The menu, footer and every page update from there.
- **Logo:** `images/angelic-cox-logo.png`, set by `logo:` in the `SITE` block. It fits a wide box in the top-left corner (`.logo` in `css/style.css`, 150–230 px wide × 62 px) and shows bigger in the footer.
- **Photos:** put them in the `images/` folder. Each striped placeholder box in the HTML has a comment above it showing the `<img>` tag to swap in.
- **Work projects:** each category in `js/site.js` has project slots (`{ title, detail, summary, tags, image, instagram, slides, page }`); fill in the blanks, delete unused lines, or copy a line to add more. Once a category has filled-in projects, its homepage section shows them like jamesjunk.co: one after another down the page, in the order listed. Each shows its name, its `tags` as little round skill badges, then its picture at its own shape (nothing cropped) with rounded corners. `detail` shows on the project's own page; `summary` is kept for notes but not shown. Until then its homepage section shows two placeholder projects.
- **Digital Marketer layout:** `layout: "cross"` on a category shows its projects in sets of four, each with its name and skill badges under it: the 1st wide on top, centered, then the 2nd wide on the left, the 3rd tall in the middle (the Emo Night poster) and the 4th wide on the right. So list the tall project 3rd. On phones they go one after another.
- **Art categories (Digital Artist):** `layout: "grid"` on a category shows its pieces in sets of four instead: the 1st tall on the left, the 2nd and 3rd stacked in the middle (trimmed to line up with the tall ones), the 4th tall on the right, so list tall pieces 1st and 4th. On phones the tall pair sits side by side above the middle pair. Each has only its `title` as a small caption, e.g. "Mk.gee · Digital painting" (no big name, no skill badges). Remove `layout: "grid"` to go back to the one-after-another layout.
- **Rounded corners:** `--round` at the top of `css/style.css` (20px; 14px on phones).
- **Where links go:** the homepage role words (and stars) scroll down the homepage to that role's projects. Clicking the menu's Work button goes to the homepage's first screen (on the homepage it glides back up to it). Pointing at it opens its dropdown, and each category in the dropdown (and the footer's Work links) glides down the homepage to that category's section (from any other page it opens the homepage there). The dropdown's last item, "Selection Screen", goes back to the first screen. A project's "go back" link returns to its projects on the homepage.
- **Hover effect:** role words on the homepage turn their category's color and grow slightly on hover.
- **Project pages:** add `instagram: "https://www.instagram.com/p/…/"` and/or `slides: "files/my-deck.pdf"` (PDF or PowerPoint in `files/`) to a project to show them on its page. `about: "…"` adds a few sentences next to them. With neither, the project's picture shows instead; `credit: "Photo: …"` goes under it. `link: "https://…"` (named with `linkLabel: "…"`) adds a link to a page somewhere else under the sentences, like the Balu Brigada sticker's link to Unclear Magazine.
- **Colors and fonts:** the variables at the top of `css/style.css`. The fonts match lucyraemcfadin.com: Arial for text, Helvetica Neue for headings.

## Hosting
The code lives on GitHub (github.com/angeliccox/angelic-cox-website). Netlify publishes it to angeliccox.net and republishes automatically after every push to `main`.

The contact form uses Netlify Forms: Site configuration → Forms → Enable form detection, then redeploy. Messages show under Forms in Netlify, and Form notifications can email each one.
