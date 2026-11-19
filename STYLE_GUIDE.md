# LOCK-EM Style Guide

## Brand colors

- Blue: `#003989` — all blue accents, buttons, headings, links, borders, icons, footer, and intervention surfaces.
- Sunny Yellow: `#FFDE59` — indicators, highlights, warnings, and the Hotline 1326 action.
- Surface: `#F7F8FB`
- Dark text: `#0B1240`
- Muted text: `#3C5078`
- Danger: `#B3261E`

## Contrast

The primary text combinations use #0B1240 on #F7F8FB and #F7F8FB on #003989. Muted text uses #3C5078 on #F7F8FB. Sunny Yellow is used as a fill or indicator, not as small text on light surfaces.

## Typography

- IBM Plex Sans: headings and body copy for a neutral, professional cybersecurity tone.
- IBM Plex Mono: dates, URLs, numbers, and codes.

The site loads these fonts from Google Fonts, with local system-font fallbacks.

## Brand assets

- The header pairs `assets/bluelockem.png` followed by `assets/nameblue.png`.
- The footer pairs `assets/yellowlockem.png` followed by `assets/nameyellow.png`.
- Keep the mascot mark first and the matching horizontal wordmark second in both lockups.
- `assets/yellowlockem.png` is used as the mascot mark on the blue Help panel.
- Reusable icons live in `assets/icons.svg`; reference its symbols with `<use>`. Use yellow icons on royal-blue surfaces and royal-blue icons on yellow surfaces.
- Digital Guide threat selectors and section illustrations use `assets/DG1.png` through `assets/DG4.png` for phishing, account takeover, malware, and public Wi-Fi/USB, respectively. The selectors have no card background or shadow.
- Home account-security quick links use `assets/HP1.png` through `assets/HP4.png` in order for 2FA, suspicious text links, unique passwords, and device updates. The desktop quick-link cards are taller to use the available space.
- The Home page's four detailed habit cards use the blue `assets/HP1B.png` through `assets/HP4B.png` icons in the same order.

## Surface style

The interface combines a formal, minimalist layout with restrained neumorphism. Cards and light controls use paired, soft outer shadows on the cool-gray surface; selected controls and callouts use a soft inset shadow. The royal-blue Help panel uses its own dark shadow pair. Borders and explicit selected-state colors preserve control visibility.

The homepage hero uses `assets/homepagepic.jpg` as a full-section background with a blue/neutral gradient overlay behind the headline and copy. Its photo credit links to the Philstar.com article supplied with the image. On mobile, the overlay shifts vertically to maintain readable text while showing more of the image below.

Local Alerts image placeholders temporarily use `assets/homepagepic2.jpg`, cropped to each image's aspect ratio.
The Home page's recent incident cards use the same temporary image, while the "Why Cybersecurity Matters" section displays `assets/why.png` directly without a card frame.
The Home and Local Alerts uses of `assets/homepagepic2.jpg`, plus team photo placeholders, display a "Photo credit: Add source link" marker until their original source URLs are provided. Replace each marker with a linked source credit when known; do not guess attribution.

## Spacing and radii

The layout uses an 8pt grid, 1200px maximum content width, responsive section spacing, 12–14px card corners, 7px button corners, and 44px minimum tap targets.
