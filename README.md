# TANGO project page

Static research project website, with a video cover and a dedicated real-world demonstration gallery. Layout adapted from [Transformer Transformer](https://transformer-transformer.github.io/) and [Nerfies](https://nerfies.github.io/).

## Local preview

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765. No build step is required; the page is compatible with GitHub Pages.

## Editing

- `index.html`: authors, project links, section content and demo captions.
- `static/css/index.css`: responsive layout and TANGO colors.
- `static/js/index.js`: background playback, reduced-motion support, demo playback coordination, and section navigation.
- `static/videos/*.mov`: original source videos, retained unchanged.
- `static/videos/web/*.mp4`: H.264/AAC web copies with fast-start metadata (approximately 12 MB total).
- `static/images/video-posters/*.jpg`: preview frames, displayed before playback.

The cover groups the title, author names, and venue, with Arxiv/video links in the header. The cover loops `long_horizon_nav.mp4` silently. The five gallery videos have native playback, seeking, sound, and fullscreen controls. All five gallery videos autoplay muted and loop when visible, and can play simultaneously. Videos pause offscreen or when the tab is hidden and resume when visible again. Visitors who prefer reduced motion get a still cover and can start gallery videos with their native controls.

The header links to the arXiv paper and project video. Author names and links and the search-indexing setting are retained.

Page order: Overview → Full video → Method (including deployment) → Demonstrations → Conclusion → BibTeX.

The BibTeX entry uses the arXiv title and author order and cites the work at CoRL 2026. The Copy button copies the entry to the clipboard.
