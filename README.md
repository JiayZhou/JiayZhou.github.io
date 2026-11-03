# Jiayi Zhou's Personal Homepage

Welcome to my personal academic homepage! 🎓

## About
This is the source code for my personal homepage, showcasing my research work, publications, and academic journey as an MPhil student at Hong Kong University of Science and Technology.

## Features
- 🌓 Dark/Light theme toggle
- 📱 Responsive design
- 📄 Publication filtering (Featured/All)
- 🔗 Quick navigation
- 🎨 Clean, academic design

## Live Site
Visit my homepage at: [https://jiayzhou.github.io](https://jiayzhou.github.io)

## Technologies Used
- Pure HTML5/CSS3/JavaScript
- Font Awesome icons
- Google Fonts
- Responsive design

## Local Development

This is a static website. No Node.js, npm packages, Ruby, or Jekyll build is required.

1. Open this repository folder in VS Code.
2. With Python 3 installed, select **Terminal > Run Task > Preview homepage**.
   Alternatively, run this command from the repository root:

   ```sh
   python -m http.server 8000 --bind 127.0.0.1
   ```

3. Visit [http://127.0.0.1:8000](http://127.0.0.1:8000), edit files, and refresh
   the browser to see changes. The preview does not automatically reload.
4. Stop the preview with **Terminal > Terminate Task**, or press `Ctrl+C` if
   you started it from a terminal.

### Files to Edit

- [index.html](./index.html): homepage content and inline layout styles.
- [assets/css/](./assets/css/): shared stylesheets. The homepage currently loads
  `style-no-dark-mode.css`, `publications-no-dark-mode.css`, and `font.css`.
- [assets/js/](./assets/js/): JavaScript behavior.
- [assets/img/](./assets/img/): images.
- [blog-template.html](./blog-template.html): starting point for blog pages.

Fonts and icon libraries use external CDNs, so their appearance may depend on
an internet connection. Use the HTTP preview rather than opening HTML files
directly so that browser requests for local data work correctly.

Saving files only changes the local copy. To update the published site, commit
and push the intended changes to GitHub; pushing may require signing in.

---
Last updated: July 2025
