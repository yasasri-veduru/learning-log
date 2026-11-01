# Yash's Learning Log

A personal technical publication documenting my journey through
computer science and software engineering.

The goal is to turn what I learn each week into clear, practical, and
reusable educational content.

**Live site:** _add your Vercel link here_

## What's inside

The site is organized as a weekly log. Each week collects the notes I
wrote that week.

| Week | Articles |
|------|----------|
| [Week 1: Foundations](weeks/week-1.html) | [Building a reliable preprocessing pipeline](articles/preprocessing-pipeline.html), [Thinking in linked lists](articles/thinking-in-linked-lists.html), [Understanding how projects are organized](articles/organizing-software-projects.html) |

It also has a Projects section. The first project is an
**ESP32 Battery Health Management System**: an IoT prototype that tracks
battery usage, estimates remaining battery life, and raises a temperature
alert. It has been built and tested in simulation, and the physical build
is in progress.

Topics covered so far: Machine Learning, Data Structures and Algorithms,
and Software Engineering fundamentals.

## Features

- Weekly log with a page for each week
- Long-form articles with a contents box, code examples, and references
- Light and dark mode that follows the visitor's system setting and
  remembers their choice
- Responsive layout for desktop, tablet, and phone
- Keyboard-friendly navigation, including a skip link
- Shareable link previews (Open Graph tags)

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- No frameworks and no build step

## Project structure

```text
learning-log/
├── index.html          (homepage: weekly log, topics, about, projects)
├── style.css           (site-wide design tokens, light and dark mode)
├── script.js           (theme toggle)
├── articles/
│   ├── article.css     (shared styles for every article and week page)
│   ├── article-template.html   (copy this to start a new article)
│   ├── preprocessing-pipeline.html
│   ├── thinking-in-linked-lists.html
│   └── organizing-software-projects.html
├── weeks/
│   └── week-1.html     (lists the articles written that week)
└── README.md
```

## Adding new content

**A new article**

1. Copy `articles/article-template.html` to a new file name.
2. Replace the CUSTOMIZE parts and write the sections.
3. Add its card to that week's page in `weeks/`.

**A new week**

1. Copy `weeks/week-1.html` to `weeks/week-2.html` and update the title,
   description, and article cards.
2. In `index.html`, copy the Week 1 card in the weekly log section and
   change the number, text, and link.

## Run locally

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser, or run a local server:

```bash
python -m http.server 8000
```

4. Visit http://localhost:8000.

On Windows, you can use `py -m http.server 8000` if necessary.

## Deployment

The site is plain static files, so there is nothing to build. It is
deployed on Vercel from this repository: every push to `master` publishes
the latest version automatically.

To deploy your own copy, import the repository on Vercel, set the
framework preset to **Other**, leave the build command and output
directory empty, and click Deploy. GitHub Pages also works with the
**Deploy from a branch** option.

## Current status

Homepage, the Week 1 page, three articles, and the first project are
live. Next: a new weekly article each week, more project write-ups, and
dates on each week.

## Purpose

Learn deeply. Build practically. Explain clearly.

This project is a record of progress, one concept at a time.