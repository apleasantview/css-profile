---
title: 'CSS Profile'
slug: 'home'
description: 'An inquiry into the document''s identity — how a page presents itself, and the grammar of the CSS that decides it.'
date: 2026-05-29
permalink: '/'
---

An inquiry into the document's identity — not what a page is, but how it comes to present itself.

<div style="margin-block: var(--space-m);">

> Ceci n'est pas un design system.
>
> <cite>— Magritte, probably</cite>

</div>


`CSS Profile` is not a framework to install but a grammar to read. What you take away is the thinking; the code on disk is only one worked example — mine — to keep or rewrite for your own.

What you see has been taught as a thousand rules while the grammar and lexicon have always been whispered, passed down. Never written down, until now.

---

## Identity

The identity is the question — how a page presents itself — and a profile is the answer. A document's identity is its CSS, the layer laid over a meaning already there. Give that layer a grammar and it stops being a heap of declarations: a name marks what a thing *is* — `blue-600` — or what it's *for* — `accent` — and the two belong on different layers. Keep them apart, and the stylesheet becomes a language — words, the work they do, the sentences built from them.

## Profile

A *profile* is one such language — the W3C's own word for a coherent slice of CSS. It is an identity a document can wear, and it can wear more than one.

The grammar is the artefact; the stylesheet beneath this page is only the specimen. From the inside, that identity is a contract — a single locked directory, `profile/`, that everything else is written against. The identities change; the contract does not. The whole inquiry, in the end, is a folder you can open.

---

## The Boasian Trilogy

Franz Boas set the rule for describing a language: not one book but three — a grammar, a dictionary, and a collection of texts, the language as it's actually spoken. This has all three.

[[grammar]] is the reasoning — what the distinctions are, when a layer earns its place, how intent stays legible where the cascade would blur it. Read once, in order; you come holding a question.

[[lexicon]] is the dictionary — the words and the work they do, rendered live on the page they describe. Opened anywhere and browsed; you come holding a value, or a meaning.

[[texts]] are the language spoken — the vocabulary composed into a whole page, every tag and block in use. Seen whole; you come holding a doubt, and watch it answered.

A story, a catalogue, and the thing itself. Take whichever you came for.

---

## Axioms

A small set of commitments. Not rules — conclusions arrived at.

Some names mark what a thing is, others what it's for. They live on different layers, and keeping those layers honest is the whole architecture.

A layer earns its place only when it adds meaning the one beneath it lacks. A name that only renames is indirection wearing a layer's clothes.

The role holds still while the value moves. Light, dark, more contrast, the colours an operating system forces — four realities, one contract, no new mechanism for any of them.

Navigability comes from regularity, not cleverness. A lexicon is usable because every entry is built the same way, never because any one entry is ingenious.

The page has a reader and the source has a reader. Both are visitors. Neither is an afterthought.

---

## Reading

The thinking here was borrowed, not invented. The work was to name what was already there.

On the architecture itself — the layered cascade of ITCSS, the naming of BEM and its BEMIT extension, the tiered design tokens that Brad Frost and the W3C drafts set down. The role-per-step scale is Radix's; the prose rhythm is Every Layout's. A coherent slice of CSS for one presentation is, in the W3C's own term, a *profile*.

On the deeper pattern — that the layering is really encapsulation: a boundary, high cohesion within it, a contract across it. David Parnas named it for software in 1972; Christopher Alexander found the same shape across buildings and towns; Plato called it carving nature at its joints. The grammar of CSS turns out to be a dialect of an older grammar of boundaries.

[`document`](https://apv-document.netlify.app/) — asks what a web page *is* in essence: what's left when everything accumulated is laid bare.

[`a pleasant view`](https://www.apleasantview.com/) — the practice this is written from. Local, simple, dependable.

## Colophon

Set in the system serif. Nothing fetched from anywhere.

Built with vanilla CSS and custom properties. No framework, no methodology imported wholesale — the cascade is the mechanism.

This isn't a stylesheet you drop in to make a bare page look considered without effort. It starts from what the layers are and lets the structure fall out. The overlap is the surface.

With thanks to Harry Roberts, Stuart Robson, Brad Frost, the Radix team, and the W3C design-tokens group — for the work this rests on. And to everyone whose grammar this only writes down.

[Open the source](https://github.com/apleasantview/css-profile).
