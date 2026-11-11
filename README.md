# Lola’s project website

A responsive, no-build website for **https://lola0228.github.io**. Made with plain HTML, CSS, and JavaScript. No subscriptions, packages, external fonts, or API keys are required.

**This is a local starter, not a published website yet.** The text and artwork are placeholders. All included SVG illustrations were created for this starter; no stock-photo service is used.

## 1. Preview your website

Open this folder in VS Code. Choose **Terminal → Run Task → Preview website**. Then visit **http://127.0.0.1:8000** in your browser. The preview task uses Python 3, which is available on this computer.

Save your changes and refresh the browser to see them. Stop the preview with **Terminal → Terminate Task** when finished.

You can also open [index.html](index.html) directly in a browser. The site does not use a server, fetch requests, or JavaScript modules, so this works too.

## 2. Change the words

Most content is in **[content.js](content.js)**:

| Section | What to edit |
| --- | --- |
| `site` | Name, browser-tab title, description, footer |
| `hero` | Main heading, introduction, large picture and caption |
| `intro` | Short sentence below the introduction |
| `work` | Gallery heading and introduction |
| `gallery` | Pictures, titles, categories, and captions |
| `about` | Project introduction and paragraphs |
| `notes` | Short updates and their labels |
| `contact` | Contact text and optional public email address |

Change text **inside the quotation marks**. Keep the surrounding commas and brackets. Use `\"` if a sentence needs a double quotation mark. Write `\n` to add a line break to the small hero note. Text is displayed as plain text, not HTML.

Some decorative wording and navigation labels live in [index.html](index.html). Colors, fonts, and layout live in [styles.css](styles.css); start with the variables at the top.

## 3. Add your pictures

1. Copy your pictures into the **assets/images** folder.
2. Use simple lowercase names such as `my-project-01.jpg` (avoid spaces).
3. In `gallery`, change an entry’s `image` to `assets/images/my-project-01.jpg`.
4. Change its `title`, `category`, `alt`, and `caption`.
5. To change the large top picture, also update `hero.image` and `hero.imageAlt`.

Use JPG, PNG, WebP, or SVG. Images around 1200–1800 pixels wide are usually enough; aim for less than 500 KB each where practical. The grid crops images to consistent shapes; opening a picture shows the full image. Use `alt` to describe the actual picture for people who cannot see it.

To add another picture, copy an entire gallery entry (from `{` through `},`) and update its fields. To remove one, delete the entire entry. Category filter buttons are created automatically. Click a picture for the enlarged view; use the arrow keys to browse and Escape to close.

## 4. Publish with GitHub Pages when ready

1. Sign in to **https://github.com** as **lola0228**.
2. Create a **public** repository named exactly **lola0228.github.io**, if it does not already exist. A public repository can use GitHub Pages on the free plan.
3. On the repository page, choose **Add file → Upload files**. Drag in the **contents** of this folder, not the outer folder. Include `index.html`, `styles.css`, `content.js`, `script.js`, and the entire `assets` folder. Commit the upload. The homepage must be at the repository root, not in an extra nested folder.
4. Include `.nojekyll` if possible. Finder hides dotfiles by default; **Command + Shift + .** toggles them. This file tells GitHub to serve the site without Jekyll processing. The starter also works without it because it has no Jekyll-specific content.
5. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/ (root)**, then **Save**.
6. Wait for the deployment to finish. GitHub displays the published URL: **https://lola0228.github.io**. The first deployment can take several minutes; check the **Actions** tab if it does not finish successfully.

You can create the repository without a README if it is new, since this folder already includes one. If it already contains files, review any replacements before committing. You do not need a custom domain.

To update later, upload the changed files again and commit them. GitHub Pages republishes automatically. Alternatively, use VS Code’s Source Control once you are comfortable with Git.

## Before going public

- Replace sample content and artwork as desired.
- Test on a phone and click every navigation link and gallery filter.
- Add a public email under `contact.email`, or leave it empty to hide the email button.
- Only publish pictures you have permission to share.
- Remove personal information from photos and image metadata where needed.
- Everything in the public repository is public. Never put passwords, API keys, private documents, or private photographs in it. Removing a committed file later does not remove it from Git history.

GitHub Pages hosts static websites, not a backend or a database. This starter has no analytics, cookies, submission form, or visitor-data collection. The optional email button opens the visitor’s own email application.

## Project map

- [index.html](index.html) — accessible page structure and navigation
- [content.js](content.js) — editable words, picture paths, and contact details
- [styles.css](styles.css) — responsive layout and visual design
- [script.js](script.js) — content rendering, filters, mobile menu, picture viewer
- assets/images/ — local illustrations and your future pictures
- [.vscode/tasks.json](.vscode/tasks.json) — local preview task

No build step is needed. All website URLs are relative, so the starter can also be hosted under a repository subpath.