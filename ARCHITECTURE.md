# Architecture
**This document describes the high-level architecture of this project**

If you want to familiarize yourself with the code base and *generally* how it works, this is a good place to be.

## High Level TLDR

Docusaurus is the static site generator we use. It works by transforming markdown files(`.md`) and markdown with react(`.mdx`) to html. You put the markdown files in specific folders to denote specific sections. There are some configuration files to specify how Docusaurus acts and some React files for specific landing pages.

## Code Map

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

### `src/`

This is the source files for our wiki. It includes subfolders that contain our custom css and our home page.

---

### `src/css/`

This is the place to put our custom css.

---

### `src/pages/`

This is the place to put custom React pages. We currently have our homepage in there.

### 

