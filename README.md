# Portfolio site

Plain HTML/CSS/JS, no build step. Open any `.html` file directly, or serve the folder locally.

## Fill in your content

- **index.html** — name, photo, role/year, social links, bio paragraphs
- **coursework.html** — same sidebar + semester/course list
- **projects.html** — filter category labels + project tiles (name, date, cover image, link)
- **projects/project-template.html** — duplicate this per project for the detail page linked from each tile
- **resume.html** — drop your PDF at `assets/resume.pdf` (auto-embeds) and update the "updated" date
- **images/profile.jpg** — your headshot (referenced as a TODO comment in index.html / coursework.html)
- **images/projects/** — cover images + detail-page images for each project

Every editable spot is marked with an HTML `<!-- TODO -->` comment.

## Design tokens

All colors/fonts live at the top of `css/styles.css` under `:root` — change them once to reskin every page.
