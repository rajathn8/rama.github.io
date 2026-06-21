# Rama H. S. Rao — Personal Portfolio

Personal website for **Rama H. S. Rao, CEng** — Senior Project & Highway Engineer, FCIHT, FIHE.

🌐 **Live site:** https://rajathn8.github.io/rama.github.io/

## What's here

A single-page static portfolio designed for recruiters and hiring managers:

- Hero with availability, photo, headline credentials and one-click CTAs (CV download, email, phone, LinkedIn)
- About / core competencies / technical tools
- Full career timeline (12 roles, TfL → London boroughs → consultancies)
- Selected projects gallery (42 images) with lightbox
- Credentials & certifications (each linked to its source PDF)
- SEO infrastructure: JSON-LD `Person` schema, Open Graph, Twitter card, sitemap, robots

## Project structure

```
.
├── index.html                       # Main page
├── styles.css                       # All styling
├── script.js                        # Gallery + lightbox
├── 404.html
├── robots.txt
├── sitemap.xml
├── cv/
│   ├── Rama-Rao-CV.pdf              # Downloadable CV (recruiter-ready)
│   ├── Rama-Rao-CV.docx             # Word original
│   └── cv.html                      # HTML source used to generate the PDF
├── assets/
│   ├── rama-portrait.jpg            # Hero portrait
│   ├── icons/favicon.svg
│   ├── projects/                    # 42 project images
│   └── certifications/              # 9 certificate PDFs/JPG
├── certifications/                  # Original source certificates
├── linkedin_screenshots/            # Source LinkedIn snapshots
└── Rama Portfolio.docx              # Original portfolio source
```

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Publishing on GitHub Pages

1. Push to `main`.
2. In the repo settings → **Pages**, choose **Deploy from a branch** → `main` / `/ (root)`.
3. Site goes live at https://rajathn8.github.io/rama.github.io/ within a minute.

### Custom domain (optional)

For a cleaner URL like `ramarao.co.uk`, add a `CNAME` file containing the domain, point a DNS `CNAME` to `rajathn8.github.io`, then enable HTTPS in Pages settings.

## Maximising recruiter visibility

After deploying, consider:

- **Google Search Console** — add and verify the site, submit `sitemap.xml`.
- **Bing Webmaster Tools** — same.
- **LinkedIn profile** — add the live URL to the Contact info and the Featured section.
- **CV header** — put the URL in the CV (already in the PDF).
- **Email signature** — include the URL.

## Regenerating the CV PDF

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=cv/Rama-Rao-CV.pdf \
  "file://$(pwd)/cv/cv.html"
```

## Credits

Built by Rajath Rao for Rama Rao. Content © Rama H. S. Rao.
