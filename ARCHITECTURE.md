# Architecture

**This document describes the high-level architecture of this project**

If you want to familiarize yourself with the code base and _generally_ how it works, this is a good place to be.

## High Level TLDR

Docusaurus is the static site generator we use. It works by transforming markdown files(`.md`) and markdown with react(`.mdx`) to html. You put the markdown files in specific folders to denote specific sections. There are some configuration files to specify how Docusaurus acts and some React files for specific landing pages.

## Code Map

_The order is a loose grouping of sections and importance_

### Code Map Legend

`<file name>` for a file name

`<folder name>/` for a folder

`<folder name>/<file name>` for a file within a folder

`<folder name>/<another folder name>/` for a folder within a folder

---

### `.docusaurus/`

This is where all the docusaurus files are kept and where they work. **DO NOT TOUCH**

---

### `.github/`

This is the templates for github. This includes templates for pull requests and issues.

---

### `docusaurus.config.js`

This is the master configuration for the wiki. This includes everything from section definitions and linking to specific side bars to defining what goes on the nav bar and footer. If you want to learn how the wiki is specifically layed out, this is the file to read.

---

### `src/`

This is the source files for our wiki. It includes subfolders that contain our custom css and our home page.

---

### `src/css/`

This is the place to put our custom css.

---

### `src/pages/`

This is the place to put custom React pages. We currently have our homepage in there.

---

### `static/`

This is the place for all static files. This includes images in a subfolder.

---

### `static/img/`

This is the subfolder for all images.

---

### `build/`

This is where all the built files are put. The markdown files go through the build process and get turned into html, this is where the files end up. You can update the files that go here by running `yarn build`

---

### `academics/`

This is the wiki section about academics. You would put files here that relate to academics and aren't about courses.

---

### `careers/`

This is the wiki section relating careers. You would put files here that relate to careers, coop, or internships.

---

### `courses/`

This is the wiki section relating to courses. You would put files here that relate to specific courses or courses in general.

---

### `css/`

This is the wiki section relating to University of Windsor Computer Science Society. You would put files here that relate to UWin CSS.

---

### `newsletter/`

This is the wiki section relating to UWindsor CSS' monthly newsletter. You would put files here that are specific dated entries in our newsletter.

---

### `resources/`

This is the section relating to resources for students. You would put files here that relate to resources for students.

---
