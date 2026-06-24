---
title: 'CSS Profile'
slug: 'home'
description: 'An inquiry into the document''s identity — how a page presents itself, and the grammar of the CSS that decides it.'
date: 2026-05-29
permalink: '/'
layout: 'base.njk'
---

An inquiry into the document's identity — not what a page is, but how it presents itself. That belongs to CSS, the layer laid over a meaning already there; and CSS has a grammar, a few distinctions that decide what a name means and where it belongs. Rarely spoken, because to the people who have it, it's invisible — a whisper passed person to person, never written into a book. This writes it down.

---

It turns on one line. A name can say what a thing *is*, or what it's *for* — a fact about a colour, or the job that colour does — and the two belong on different layers. Hold that line, and a stylesheet stops being a heap of declarations and becomes a language: words, the work they do, the sentences built from them.

A *profile* is one such language, cut for a single presentation — the W3C's own word for a coherent slice of CSS. One vocabulary, and as many presentations over it as you care to write; the contract holds still while they change.

The grammar is the artifact; the stylesheet beneath this page is only the specimen.

> Ceci n'est pas un design system.
>
> <cite>— Magritte, probably</cite>


---

Two ways in, depending on what you arrive with.

[Grammar](/grammar/) is the reasoning — what the distinctions are, when a layer earns its place, how intent stays legible where the cascade would blur it. Read once, in order; you come holding a question.

[Lexicon](/lexicon/) is the language itself, rendered live — the words and the work they do, on the page they describe. Opened anywhere and browsed; you come holding a value, or a meaning.

One is a story, the other a catalogue. Take whichever you came for.

---

## Axioms

A small set of commitments. Not rules — conclusions arrived at.

Some names say what a thing is, others what it's for. They live on different layers, and the whole architecture is keeping those layers honest.

A layer earns its place only when it adds meaning the one beneath it lacks. A name that only renames is indirection wearing a layer's clothes.

The role holds still while the value moves. Light, dark, more contrast, the colours an operating system forces — four realities, one contract, no new mechanism for any of them.

Navigability comes from regularity, not cleverness. A lexicon is usable because every entry is built the same way, never because any one entry is ingenious.

The page has a reader and the source has a reader. Both are visitors. Neither is an afterthought.

---

## Reading

The thinking here was borrowed, not invented. The work was to name what was already there.

On the architecture itself — the layered cascade of ITCSS, the naming of BEM and its BEMIT extension, the tiered design tokens that Brad Frost and the W3C drafts set down. The role-per-step scale is Radix's; the prose rhythm is Every Layout's. A coherent slice of CSS for one presentation is, in the W3C's own term, a *profile*.

On the deeper pattern — that the layering is really encapsulation: a boundary, high cohesion within it, a contract across it. David Parnas named it for software in 1972; Christopher Alexander found the same shape across buildings and towns; Plato called it carving nature at its joints. The grammar of CSS turns out to be a dialect of an older grammar of boundaries.

Sibling to `document`. That page asks what a web page *is* — what's left when everything accumulated is stripped away. This asks how it presents itself: a document's identity is its CSS, and a profile is one identity it can wear. Essence there, identity here; the same discipline, a level down the stack.

[`a pleasant view`](https://www.apleasantview.com) — the practice this is written from. Local, simple, dependable.

## Colophon

Set in the system serif. Nothing fetched from anywhere.

Built with vanilla CSS and custom properties. No framework, no methodology imported wholesale — the cascade is the mechanism.

This isn't a stylesheet you drop in to make a bare page look considered without effort. It starts from what the layers are and lets the structure fall out. The overlap is the surface.

With thanks to Harry Roberts, Stuart Robson, Brad Frost, the Radix team, and the W3C design-tokens group — for the work this rests on. And to everyone whose grammar this only writes down.

[Open the source](https://github.com/apleasantview/css-profile).
