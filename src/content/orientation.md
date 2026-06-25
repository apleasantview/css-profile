---
title: 'Orientation'
slug: 'orientation'
---

There is no diagram of this project, because the folder *is* the diagram. Import order is cascade order, and the numbered folders make that order visible on disk — read the tree top to bottom and you read the cascade in the sequence the browser applies it.

```
css/
│
├── profile/          01 · the package — assembles itself
│   ├── primitives/       colors · typography · spacing · borders
│   ├── semantic/         colors · typography · spacing · borders
│   ├── themes/           dark · contrast · forced-colors
│   └── accessibility/    skip-link · sr-only
│
├── resets/           02 · normalised browser defaults
│
├── document/         03 · the presentation — spends the vocabulary
│   ├── tokens.css        the dressing seam
│   ├── base.css
│   ├── blocks/           headings · code · table · lists · details
│   ├── layout/           page · wrapper
│   └── utils/            flow · label · card
│
├── components/       04 · shared UI — built from the vocabulary
│
└── vendors/          05 · third-party CSS — admitted as-is (reserved)
```

The tree divides once, and that cut matters most. Everything through `profile/` is the **package**: the shared vocabulary, the part that would ship if anything did. Everything after is **consumer code** — `document/`, `components/`, the borrowed resets and vendors — spending that vocabulary on one particular site. The dependency arrow runs one way: consumers reach into the package, the package never reaches back. That asymmetry is the whole boundary — see [[package-vs-presentation]].

Inside the package the four folders are a climb, each layer naming what the one below it could not. `primitives/` holds raw facts — `blue-600`, a measured value. `semantic/` gives them jobs — `accent`, a role. `themes/` bends those roles for dark or high-contrast. That ascent from value to role to context is the one distinction the project rests on, [[is-vs-for]], and each rung is kept only because it adds meaning the rung below lacks, [[earn-its-place]]. The `accessibility/` floor sits inside the package because it is always on, shared by every presentation — non-negotiable, so foundational.

The authored CSS is bracketed by code that isn't ours: `resets/` before, normalising the browser; `vendors/` after, third-party styles dropped in as-is. Both are [[admitted-not-assumed]] — they get the last word only inside their own scope, never under the foundation. Vendors land last on purpose: an enhancement nothing depends on, so it can never quietly become load-bearing. The slot is reserved and presently empty, which is itself the point — the cascade keeps a place for the borrowed without letting it set the terms.

No build step rearranges any of this. What you read on disk is what the cascade does, in the order it does it. The inquiry, in the end, is a folder you can open.
