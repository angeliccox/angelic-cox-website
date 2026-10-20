# How to add your photos (and everything else)

Every grey striped box on your site is a placeholder. This guide shows you how to swap each one for your own photo, video or text.

## Where each photo goes

| Photo | Where it shows | Shape | File you edit |
|---|---|---|---|
| Logo ✅ | Top-left corner, and bigger in the footer | Long and thin, see-through background | `images/angelic-cox-logo.png` |
| Hero design ✅ | Fills the homepage's first screen, with the words on top | 2560 × 1440 JPG, plus a paper-only copy for phones | just replace `images/hero.jpg` and `images/hero-paper.jpg` || "Hi, I'm a…" image ✅ | Homepage, left side: your handwriting | Trimmed close, about 640 px wide | `images/hi-im-a.png` |
| "Based in SF Bay Area" image ✅ | Homepage, right side: your handwriting | Trimmed close, about 1000 px wide | `images/base-in.png` |
| "Reach out!" image ✅ | About page, under your intro: your handwriting | Trimmed close, about 760 px wide | `images/reach-out.png` |
| About photo ✅ | About page, next to your intro (black & white) | Any shape, shown whole; about 1600 px wide | `images/about-photo.png` |
| Project photos/videos | The homepage, under the first screen | Your photo's own shape | `js/site.js` |
| Instagram posts & slide decks | A project's own page (opens when someone clicks the project) | — | `js/site.js` + `files/` folder |
| Project write-up pictures | A project's write-up page: slideshow and sections | Any shape | the write-up's own file, e.g. `digital-marketer-project-1.html` |

---

## Step 1: Get your photos ready

1. **File type:** use **JPG** for photos. Use **PNG** or **SVG** for your logo and the three handwriting images ("Hi! I'm a…", "Based in San Francisco Bay Area", "Reach out!"), so they can have a see-through background. Use **MP4** for videos.
2. **iPhone photos** are often `.HEIC`, which browsers can't show. Export them as JPG first. On iPhone you can go to Settings → Camera → Formats → **Most Compatible** to always shoot JPG.
3. **Name your files** in lowercase with no spaces, using dashes instead, for example `hero.jpg`, `about.jpg` and `lookbook-1.jpg`.
   Hosting sites care about capitals: `Hero.JPG` and `hero.jpg` count as two different files there.
4. **Shrink big files.** Aim for under 1 MB each so the site loads fast. [squoosh.app](https://squoosh.app) or [tinypng.com](https://tinypng.com) do this for free.
   - Hero design: 2560 × 1440 px
   - Work hover photos: about 2400 px wide
   - Everything else: about 1200–1600 px wide
   - Videos: short (under 10 seconds) and a few MB at most

## Step 2: Put them in the `images` folder

Drag your files into the **`images`** folder inside `angelic-cox-website`.

```
angelic-cox-website/
├── images/          ← your photos go here
│   ├── logo.png
│   ├── hero.jpg
│   ├── hero-paper.jpg
│   ├── about.jpg
│   └── ...
├── files/           ← slide decks (PDF / PowerPoint) go here
├── index.html
├── about.html
└── js/site.js
```

## Step 3: Open the site folder in VS Code

**File → Open Folder… → `angelic-cox-website`**. Click a file in the left sidebar to open it.
To find something in a file, press **Ctrl + F** and type the word this guide tells you to look for.

## Step 4: Hook up each photo

### 4a. Logo (`js/site.js`) ✅ done

Your ANGELIC ★ COX logo is in as `images/angelic-cox-logo.png`, made in Figma and trimmed close around the letters. It shows in the top-left corner on every page, in the phone menu, and bigger in the footer.

- **To make it bigger or smaller in the corner:** open `css/style.css`, search for `It fits inside this box`, and change `clamp(150px, 13vw, 230px)` (smallest width, how fast it grows with the screen, largest width).
- **To use a new logo file:** export it from Figma as PNG at 2× with a see-through background, trim it (Image → Trim… → Transparent Pixels in Photoshop), and save it over `images/angelic-cox-logo.png`. Or put in a new file and change `logo: "images/angelic-cox-logo.png",` near the top of `js/site.js`.

### 4b. Homepage hero design (`images/hero.jpg`) ✅ done

Your Photoshop design (you on folded paper, 2560 × 1440) is in. The site uses two files made from it:
- **`images/hero.jpg`** is your design as a smaller JPG (722 KB instead of the 6.4 MB PNG), with you moved 80 px to the left so you sit in the middle of the roles. On laptops and monitors it fills the whole screen, behind the menu too, with the roles and handwriting images on top.
- **`images/hero-paper.jpg`** is just the paper from the left side of your design. On phones (and tall tablets) it's the background behind the words, and your photo shows underneath them, trimmed around you and fading in at the top.

**How it fits different screens:** the design is zoomed until it covers the screen, and stays pinned to the bottom so you stay on the bottom edge. Wide screens lose a little paper off the top; squarer screens lose a little off the sides. You stay in view either way.

**To change the design later:**
1. Keep the canvas at **2560 × 1440 px**, with you sitting on the bottom edge, your face about **1210 px from the left**. That's a little left of the middle, which centers you between the roles.
2. **Leave "Hi! I'm a…", the roles and "Based in…" out of the design.** The site places those on top by itself, so they stay clickable and in the right place on every screen.
3. File → Export → Export As… → **JPG**, Quality about **80%**. Name it **`hero.jpg`** and replace the one in `images/`.
4. Hide your photo layer and export the paper alone the same way, named **`hero-paper.jpg`**, for phones.
5. If you moved yourself left or right, open `css/style.css`, search for `object-position: 47%` and change 47% to where you now stand: 50% is the middle, smaller is further left.

You don't need to edit `index.html`.

### 4b-2. Homepage "Hi! I'm a…" image (`index.html`) ✅ done

Your handwriting is in as `images/hi-im-a.png`. That's your `Hi im a.png` trimmed close around the letters, since the original was a 2560 × 1440 canvas with lots of empty space, which made the words tiny.

> **Keep the line `<ul class="roles" data-roles></ul>`** right under it in `index.html`. That's where the site puts your roles and stars. If it gets deleted, they disappear.

**To swap in new handwriting later:** in Photoshop, go to **Image → Trim… → Transparent Pixels** before exporting, so the PNG is cropped close around the letters. Save it over `images/hi-im-a.png`.

### 4b-3. Homepage "Based in San Francisco Bay Area" image (`index.html`) ✅ done

Your handwriting is in as `images/base-in.png`, on the right side of the homepage (under the words on phones).

> The `class="stage-based"` part of its line is what puts it on the right. `class="stage-hi"` would put it on top of "Hi, I'm a…" instead.

The two handwriting images are sized so their letters match and they sit level with each other, the same distance from each edge. To make both bigger or smaller, open `css/style.css`, search for `mirror each other`, and change `13vw` and `19.5vw` by the same proportion (for example `15vw` and `22.5vw`).

**To swap in new handwriting later:** use a PNG with a see-through background, trimmed close around the letters (in Photoshop, Image → Trim… → Transparent Pixels), about **1000 px wide**. Save it over `images/base-in.png`.

### 4c. About page photo (`about.html`) ✅ done

Your photo is in as `images/about-photo.png`, to the right of your intro (under it on phones). It shows **whole, in its own shape**, nothing cropped, so any shape of photo works.

- **To swap it later:** save the new photo over `images/about-photo.png`. Make it about **1600 px wide** so it stays sharp on high-resolution screens; JPG works too, but then change `about-photo.png` in `about.html` (search for `ABOUT PHOTO`) to the new name.
- **Black & white:** the site turns it black & white. To show a color photo in color, open `css/style.css`, search for `.about-photo {`, and delete `filter: grayscale(1);` from that line.

### 4c-2. About page "Reach out!" image (`about.html`) ✅ done

Your handwriting is in as `images/reach-out.png`, under your intro and above the LinkedIn icon. I trimmed the empty space from its edges so the letters show at full size.

**To swap in new handwriting later:** use a PNG with a see-through background, trimmed close around the letters (Image → Trim… → Transparent Pixels), about **760 px wide**. Save it over `images/reach-out.png`.

### 4d. Categories (`js/site.js`)

Search for `categories:`. You can rename your categories there (the first one is "Digital Marketer"):
- **`title`** is the name people see in the Work dropdown and the footer, e.g. `"Styling"`.
- **`slug`** is the short web address name: lowercase with dashes, e.g. `"styling"`.
  If you change a slug, change the matching `category:` in the `roles` list above it too, so the homepage words still lead to the right projects.
- **Contact form:** the "Reason for Inquiry" checkboxes in `about.html` list the kinds of work too. Search for `name="reason[]"` and rename them to match (change both the `value="…"` and the words after it).
- **`color`** (optional) picks the category's color, e.g. `color: "#be185d",`. It's used for its big title on the homepage, and for the color its projects turn when someone points at them. Without it, categories take turns being orange, pink, blue, green and purple. Pick a dark enough color to read easily on white; [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/) tells you (aim for 4.5 : 1 or higher).

### 4e. Project photos and videos (`js/site.js`)

Each category's section on the homepage shows its projects under its big title.

Every category comes with empty project slots, one line each. Fill in the blanks between the quotes:

```js
{ title: "", detail: "", image: "", instagram: "", slides: "", page: "" },
```

becomes, for example:

```js
{ title: "Spring Lookbook", detail: "2026", image: "images/lookbook-1.jpg", instagram: "", slides: "", page: "" },
```

- **`title`** is the project name. It shows under the photo.
- **`detail`** (optional) shows in grey next to the name, e.g. the year.
- **`image`** is the photo people click. For a video instead, change `image:` to `video:` and use an MP4 (it plays silently on a loop).
- **`instagram`** and **`slides`** (optional) show on the project's own page; see 4g.
- **`page`** (optional) is a full write-up page for the project, with a slideshow and sections of writing; see 4h. When it's filled in, clicking the project opens the write-up.
- Clicking a project opens **its own page**: the name and year on the left, and on the right whatever you've linked. With nothing linked, the photo shows big there.
- **Need more slots?** Copy a line and paste it below; keep the comma at the end of each line. Empty lines don't show on the site.

### 4g. Project pages: link an Instagram post and/or slides

Every project slot has its own page. While a slot is empty, its page shows two placeholder boxes, **Instagram post** and **Slides**, so you can see where they'll go. On that page you can show **an Instagram post**, **a slide deck**, or **both** (Instagram on top, slides under it). You choose per project by filling in its line in `js/site.js`:

```js
{ title: "Spring Lookbook", detail: "2026", image: "images/lookbook-1.jpg", instagram: "https://www.instagram.com/p/ABC123xyz/", slides: "files/spring-lookbook.pdf", page: "" },
```

Leave either one as `""` if you don't need it. The `image` is still the picture people click on the homepage.

**Adding an Instagram post**
1. Open the post on Instagram (in a browser or the app).
2. Copy its link: in the browser, copy the address bar; in the app, tap **⋯ → Copy link**. It looks like `https://www.instagram.com/p/ABC123xyz/`.
3. Paste it between the quotes after `instagram:`.
4. The post has to be **public** to show. Instagram draws it, with its own "View profile" and "View more on Instagram" buttons.
5. To show more than one post, use a list: `instagram: ["https://www.instagram.com/p/AAA/", "https://www.instagram.com/p/BBB/"],`

**Adding slides (PowerPoint or PDF)**

Any project in any category can have slides.
1. **Make a cover image** for the homepage. In PowerPoint, click your first slide, then **File → Export → Change File Type → PNG** and choose **Just This One**. Save it into `images/`, e.g. `images/deck-cover.png`.
2. **Pick PDF or PowerPoint for the deck itself.**
   - **PDF (recommended):** **File → Export → Create PDF/XPS**. The slides show right on the project page in every browser, and look exactly like your deck.
   - **PowerPoint (`.pptx`):** works too, but only once your site is online. Microsoft's free viewer then shows the slides on the page. On your own computer you'll see a grey box with a link instead.
3. **Put the deck in the `files` folder**, named in lowercase with dashes, e.g. `files/brand-strategy.pdf`.
4. **Add it to a project slot** in `js/site.js`: type the path between the quotes after `slides:`, and the cover after `image:`:
   ```js
   { title: "Brand Strategy Deck", detail: "2026", image: "images/deck-cover.png", instagram: "", slides: "files/brand-strategy.pdf", page: "" },
   ```
   An **"Open slides ↗"** link under the slides opens them full-screen in a new tab.

> **Before you upload:** anyone can open or download files you put on your site. PowerPoint files keep your **speaker notes**, but PDFs don't. Exporting to PDF is the easy way to leave private notes out.
> Big decks load slowly. In PowerPoint, **File → Compress Pictures** helps; aim for under about 20 MB.

### 4h. Project write-up pages (e.g. `digital-marketer-project-1.html`)

For a project you want to tell start to finish, it gets its own page file: a big title, a **slideshow** of pictures with arrow buttons and captions, then sections (**Overview**, **Process**, **Results**) with writing, pictures, big numbers, an Instagram post and slides. It uses the same fonts as the rest of the site.

The first Digital Marketer project, the **Chewy Paid Media Performance Report**, is already filled in: its tile opens **`digital-marketer-project-1.html`**. Its slide pictures are `images/chewy-report-slide-…jpg`, and the full report is `files/chewy-paid-media-report.pdf`. The second, **LeadGenPro: From Spend to Strategy**, opens **`digital-marketer-project-2.html`**, with slide pictures `images/leadgenpro-slide-…jpg` and the full deck `files/leadgenpro-presentation.pdf`. The third, **Impossible Foods: Making Plant-Based Meat Normal**, opens **`digital-marketer-project-3.html`**, with slide pictures `images/impossible-foods-slide-…jpg`. The fourth, **Emo Night at 924 Gilman**, has no write-up: its card (the poster, `images/emo-night-poster.jpg`) opens a simple page with the Instagram post and the short `about:` text from its line in `js/site.js`. To change anything on any of them, or to fill in a copy for a new project, open the file in VS Code:

1. **Title:** change `Project Title` (between `<h1>` and `</h1>`) and the line under it (`Digital Marketing · 2026`).
2. **Slideshow:** each grey box is one slide. Swap the whole `<div class="ph" …> … </div>` line for `<img src="images/my-photo.jpg" alt="Short description">`, and write the caption between `<figcaption>` and `</figcaption>`. Copy a whole `<figure class="slide"> … </figure>` block for more slides.
3. **Writing:** replace the sample sentences between each `<p>` and `</p>`. Copy a `<p> … </p>` line for another paragraph. Rename a heading between `<h2>` and `</h2>`.
4. **Pictures in the sections:** swap each grey box the same way as the slideshow. A `<div class="write-up-row">` puts two or three pictures side by side.
5. **Big numbers (Results):** change each number and the label under it. They show in the category's color.
6. **Instagram post:** paste a public post's link between the quotes in `data-instagram=""`.
7. **Slides:** put a PDF or PowerPoint in `files/` and type its name between the quotes in `data-slides=""`, e.g. `data-slides="files/my-deck.pdf"`.
8. **Don't need a part?** Delete it. Each part has a note above it in the file saying where it starts and ends.
9. **On the homepage,** the project still uses its line in `js/site.js`: fill in its `title` (shown under the tile) and `image` (the picture people click). Projects go one after another down the page, in the order of the lines (move a line up or down to reorder). Each shows its name, then its skills: each word in `tags` (e.g. `tags: ["Excel", "Instagram analytics"]`) shows as a little round badge. Then comes its picture, at its own shape with nothing cropped, with rounded corners. `detail` (e.g. "Role · Type · Year") shows on the project's own page; `summary` is kept for your notes but not shown right now.

**To add another write-up:** copy `digital-marketer-project-1.html`, rename the copy (lowercase, dashes, e.g. `digital-marketer-project-2.html`), then type that name after `page:` on the project's line in `js/site.js`. For a project in a different category, also change `data-category="digital-marketer"` near the top of the copied file to that category's `slug`, so its "← all …" links go back to the right page.

## Step 5: Check your work

Save the file (**Ctrl + S**), then double-click `index.html` to open your site in the browser. If it's already open, press **F5** to refresh.

**A photo isn't showing?**
- Check that the file name matches **exactly**, including capitals and `.jpg` vs `.jpeg` vs `.png`.
- Make sure the file is inside the `images` folder and the path starts with `images/`.

**The menu, footer or homepage words disappeared?**
Something got broken in `js/site.js`, almost always a missing **comma** or **quote mark**. Press **Ctrl + Z** to undo back to when it worked, then try again.

---

## The "etc.": your own words and links

| What | Where | What to look for |
|---|---|---|
| Name, city | `js/site.js`, top | `name:`, `city:` |
| Homepage words ("Hi! I'm a…") | `js/site.js` | `roles:` (each one's `category:` must match a category `slug`) |
| LinkedIn link | `js/site.js` | `socials:` (your profile link). It shows under **Connect** in the footer and as the icon under "Reach out!" |
| About intro sentence | `about.html` | `Hiii I'm`. It fills in your name, roles and city by itself. To write your own sentence, replace everything between `<h1 class="about-text">` and `</h1>`. |
| Contact form "Reason for Inquiry" boxes | `about.html` | `Reason for Inquiry`. Change both the `value="…"` and the text after it on each line. |

## Step 6: Put the updated site online

Every time you change something, upload the **whole** `angelic-cox-website` folder to your host again, including the `images` and `files` folders. For Netlify Drop, that means dragging the folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

**To get contact form messages (Netlify):** in your site on Netlify, go to **Site configuration → Forms → Enable form detection**, then upload the folder again. New messages show under **Forms**, and you can have Netlify email them to you (**Forms → Form notifications**).
On other hosts (GitHub Pages, Cloudflare Pages) the form needs a free service such as [Formspree](https://formspree.io): sign up, then put the address it gives you in the form's opening tag as `action="https://formspree.io/f/…"`.
