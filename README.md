# Yash's Learning Log

A personal technical publication documenting my journey through
computer science and software engineering.

The goal is to turn what I learn into clear, practical, and reusable
educational content.

## What this project contains

- Technical articles and learning notes
- Data Structures and Algorithms
- Machine Learning concepts and experiments
- Software engineering fundamentals
- Projects and implementation lessons

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

## Project structure

```text
learning-log/
├── index.html
├── style.css          (site-wide design tokens, light and dark mode)
├── script.js          (theme toggle)
├── articles/
│   ├── article.css    (shared styles for every article)
│   ├── article-template.html   (copy this to start a new article)
│   ├── preprocessing-pipeline.html
│   ├── thinking-in-linked-lists.html
│   └── organizing-software-projects.html
└── README.md
```

## Adding a new article

1. Copy `articles/article-template.html` to a new file name.
2. Replace the CUSTOMIZE parts and write the sections.
3. Add a card for it on `index.html` that links to the new file.

## Run locally

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser, or run a local server:

```bash
python -m http.server 8000
```

4. Visit http://localhost:8000.

On Windows, you can use `py -m http.server 8000` if necessary.

## Current status

Homepage and three article pages are built. Next: more weekly articles
and deployment.

## Purpose

Learn deeply. Build practically. Explain clearly.

This project is a record of progress, one concept at a time.