---
title: 'Orientation'
slug: 'orientation'
---

There is no diagram of this project, because the folder *is* the diagram.

## The cascade, on disk

Import order is cascade order, and the numbered folders make that order visible on disk — read the tree top to bottom and you read the cascade in the sequence the browser applies it.

<div style="margin-block: var(--space-m)">

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

</div>

---

## The directories

The tree divides once, and that cut matters most: `profile/` is the **package**, everything after it merely **spends** that vocabulary.

The dependency arrow runs one way — consumers reach into the package, the package never reaches back. See [[package-vs-presentation]].

<div style="margin-block: var(--space-m);">

- **`profile/`** — the package. The shared vocabulary: primitives, roles, themes, the accessibility floor. The part that would ship if anything did, and the one directory everything else is written against. Its own internal climb, from raw value to role, is the [[is-vs-for]] cut. {.card}
- **`resets/`** — brackets the front: normalised browser defaults, borrowed and [[admitted-not-assumed]] like vendors — the floor the authored CSS sits on. {.card}
- **`document/`** — the presentation. One site's way of spending that vocabulary: base styles, blocks, layout, the dressing seam in `tokens.css`. A worked example — mine — that you'd delete and rewrite for your own. {.card}
- **`components/`** — shared UI, built from the vocabulary: navigation, breadcrumbs, footer. Consumer code like `document/`, but reusable chrome rather than one page's presentation. {.card}
- **`vendors/`** — third-party CSS, admitted as-is. Last in the cascade by design: an enhancement nothing depends on, so it can never quietly become load-bearing. Reserved and presently empty, which is the point — a place kept for the borrowed without letting it set the terms. {.card}

</div>

---

## A folder you can open

No build step rearranges any of this. What you read on disk is what the cascade does, in the order it does it — nothing is compiled away into output a tool emits and no one opens again.

The structure stays legible because it was kept legible: the numbered folders, the one-way dependency, the cut between package and consumer are there to be read, not only to run.

This makes the folder an artefact of the inquiry — though not the kind an investigation leaves behind by accident, the residue it sheds on the way to somewhere else. This one was made on purpose. The question was how a document comes to present itself, and the answer turns out to be a structure you can hold and walk through. The inquiry, in the end, is a folder — made to be opened.
