# AgentMon · Beyond Evolving

A Chinese-language, 17-slide product presentation imported from the supplied AgentMon deployment package. It uses plain HTML, CSS, and JavaScript; no build step, dependencies, backend, or API keys are required.

## Preview locally

In VS Code, choose **Terminal → Run Task → Preview website**, then visit **http://127.0.0.1:8000**. Save changes and refresh the browser to see updates.

- Select **静音开始** to begin without music, or **开始发布 · 开启音乐** to start with music.
- Use the arrow buttons or Left/Right arrow keys to change slides. On touchscreens, swipe horizontally.
- Select **目录** (or press **O**) to jump to a slide; **Escape** closes the directory or screenshot viewer.
- Select the screenshot tabs and enlarge button to inspect the product screenshots.
- The music and fullscreen buttons control optional presentation features. Browser permissions may limit them.

Stop the preview with **Terminal → Terminate Task** when finished. Opening [index.html](index.html) directly also works.

## Edit the presentation

- [index.html](index.html) contains the slide text, layout, embedded styles, and presentation JavaScript. Each slide is a `<section class="slide …">` element. Update its `data-title` when changing its title so the directory stays accurate.
- [assets/](assets/) contains the AgentMon SVG diagrams, JPG screenshots, and music files. Keep this folder alongside the homepage.
- The audio script embeds the packaged MP3 as a data URL; the HTML also includes local and external MP3 sources. These are preserved from the supplied package. If replacing or removing the music, update the audio script, `<audio>` sources, and music labels together.
- [.vscode/tasks.json](.vscode/tasks.json) defines the local preview server.
- [.nojekyll](.nojekyll) tells GitHub Pages to serve the static files directly.

The original starter's separate content, stylesheet, script, and sample illustrations have been removed. The supplied AgentMon package outside this repository is unchanged. Earlier website versions remain available in Git history.

The imported homepage has two small integration changes: the AgentMon mark is used as the browser-tab icon, and overlays can scroll so the start buttons remain reachable in short windows. The presentation content and supplied assets are otherwise preserved.

## Publish with GitHub Pages

1. Review the changes locally and commit the updated website.
2. Push the commit to the GitHub repository's publishing branch.
3. In the repository's **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/ (root)**, then save if not already configured.
4. Check the deployment in **Actions**, then open the URL shown in Pages settings.

Replacing the website content does not rename the GitHub account or repository, or change the website address. For **https://agentmon.github.io**, the owner must be an account or organization named **agentmon**, and the repository must be named **agentmon.github.io**. The package uses relative asset paths, so the content itself does not need a domain change.

The repository retains its existing published history. The initial starter commit keeps its original author metadata; new website commits use the repository's configured author identity. Normal pushes to the publishing branch trigger GitHub Pages deployment without rewriting the remote history.

## Before making it public

- Confirm permission to publicly distribute the bundled **Butter-Fly** music. Being included in a package does not establish a license.
- Review every slide, screenshot, and diagram for confidential business information or personal data.
- Check the linked Feishu project documents: confirm they are intended for public sharing and accessible to the intended audience. They may require sign-in or permission.
- Do not add credentials, private documents, or other secrets. Public repository files and committed history are publicly accessible.
- Test navigation, screenshots, music, and the mobile layout before publishing.

Publishing this presentation updates the website content only. Renaming the repository, changing the website address, and changing GitHub Pages settings are separate operations.