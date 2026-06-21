/* The authoring menu, assembled. Two halves meet here, on the project's own
 * is/for line: the role *names* are read straight from the CSS (the residue —
 * what is), the *meaning* of each is hand-kept below (the grammar — what for).
 * The page joins them; any role in the CSS with no meaning is flagged, so the
 * menu can't quietly drift from the stylesheet it documents. */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const cssDir = path.resolve(here, '../assets/css');

/* Pull every declared custom-property name out of a list of CSS files. */
function declaredNames(files) {
	const names = new Set();
	for (const file of files) {
		const css = fs.readFileSync(file, 'utf8');
		for (const m of css.matchAll(/^\s*(--[\w-]+)\s*:/gm)) names.add(m[1]);
	}
	return names;
}

const semanticFiles = ['colors', 'typography', 'spacing', 'borders'].map((a) =>
	path.join(cssDir, 'profile/semantic', `${a}.css`),
);

/* Names that exist somewhere in the authored CSS (for the "does it resolve?"
 * check) vs names that are profile *roles* (for the drift check). */
const allNames = declaredNames([
	...semanticFiles,
	...['colors', 'typography', 'spacing', 'borders'].map((a) =>
		path.join(cssDir, 'profile/primitives', `${a}.css`),
	),
	path.join(cssDir, 'document/tokens.css'),
]);
const roleNames = declaredNames(semanticFiles);

/* The meaning layer — hand-kept. One line per role, the way you'd write a
 * comment. Grouped by job, not by file: this is the menu, read by an author. */
const colour = {
	Text: [
		['--color-text', 'high-contrast body text'],
		['--color-text-muted', 'low-contrast text: captions, small print, the h2 label'],
		['--color-on-solid', 'text / icon on a neutral solid fill'],
	],
	Surfaces: [
		['--color-background', 'the page canvas'],
		['--color-background-subtle', 'a faint step off the canvas'],
		['--color-surface', 'a raised element background (cards, wells)'],
		['--color-surface-hover', 'that element, hovered'],
		['--color-surface-active', 'that element, active / selected'],
		['--color-solid', 'a neutral solid fill'],
		['--color-solid-hover', 'that fill, hovered'],
	],
	Borders: [
		['--color-border-subtle', 'the faintest separator / hairline'],
		['--color-border', 'the standard border + focus ring'],
		['--color-border-hover', 'a border on hover'],
	],
	Accent: [
		['--color-accent-surface', 'tinted accent background'],
		['--color-accent-surface-hover', 'tinted accent background, hovered'],
		['--color-accent-border', 'accent border / focus ring'],
		['--color-accent-solid', 'brand fill: buttons, links'],
		['--color-accent-solid-hover', 'brand fill, hovered'],
		['--color-accent-on-solid', 'text / icon on the brand fill'],
		['--color-accent-text', 'accent-coloured text'],
	],
};

/* Status: four families, one shape. Expanded into rows so the names are real
 * (and drift-checkable) without writing the meaning out four times. */
const statusFamilies = ['success', 'warning', 'danger', 'info'];
const statusSlots = [
	['surface', 'tinted status background'],
	['border', 'status border'],
	['text', 'status-coloured text'],
	['solid', 'status fill'],
	['on-solid', 'text / icon on the status fill'],
];
const status = statusFamilies.flatMap((fam) =>
	statusSlots.map(([slot, why]) => [`--color-${fam}-${slot}`, `${fam} — ${why}`]),
);

const type = [
	['--font-family-body', 'body copy face'],
	['--font-family-heading', 'heading face'],
	['--font-family-code', 'mono / code face'],
	['--text-size-body', 'base reading size'],
	['--text-size-secondary', 'one step down (captions, kbd, samp)'],
	['--text-size-muted', 'smallest text (small)'],
	['--text-size-lede', 'a lead paragraph'],
	['--text-size-title', 'a title'],
	['--text-size-display', 'the display / h1 size'],
	['--text-size-code', 'inline code size'],
	['--text-lineheight-body', 'body leading'],
	['--text-lineheight-heading', 'heading leading'],
	['--text-lineheight-code', 'code leading'],
	['--text-letterspacing-body', 'body tracking'],
	['--text-letterspacing-heading', 'heading tracking'],
	['--text-inlinesize-body', 'the body measure (line-length cap)'],
	['--text-inlinesize-heading', 'heading measure'],
	['--link-underline-thickness', 'link underline thickness'],
	['--link-underline-offset', 'link underline offset'],
];

const space = [
	['--space-inset-3xs', 'container padding — smallest'],
	['--space-inset-2xs', 'container padding'],
	['--space-inset-xs', 'container padding'],
	['--space-inset-s', 'container padding'],
	['--space-inset-m', 'container padding'],
	['--space-inset-l', 'container padding'],
	['--space-inset-xl', 'container padding'],
	['--space-inset-2xl', 'container padding — largest'],
	['--space-gap-xs', 'row / cluster gap (CSS gap)'],
	['--space-gap-s', 'row / cluster gap'],
	['--space-gap-m', 'row / cluster gap'],
	['--space-gap-l', 'row / cluster gap'],
	['--flow-space-2xs', 'vertical rhythm between prose — tight'],
	['--flow-space-s', 'vertical rhythm between prose'],
	['--flow-space-m', 'vertical rhythm between prose'],
	['--flow-space-xl', 'vertical rhythm between prose — wide'],
];

const borders = [
	['--border-width-default', 'standard hairline border'],
	['--border-radius-control', 'inline controls: code, kbd, link hover'],
	['--border-radius-card', 'blocks: pre, details, cards'],
	['--focus-ring-width', 'the focus outline width'],
	['--focus-ring-offset', 'the focus outline offset'],
];

/* Reach-for-the-primitive: no role by design (the keyword is the vocabulary, or
 * it's a named edge). Listed so the menu is complete, tagged so the drift check
 * doesn't expect them among the roles. */
const primitives = {
	'Type — weight & tracking (no role)': [
		['--font-weight-light', '300'],
		['--font-weight-normal', '400'],
		['--font-weight-medium', '500'],
		['--font-weight-semibold', '600'],
		['--font-weight-bold', '700'],
		['--letter-spacing-tight', 'when body/heading tracking must diverge'],
		['--letter-spacing-wider', 'the widest tracking (the h2 label)'],
	],
	'Space — named edges': [
		['--space-void', 'a deliberate 0'],
		['--space-hairline', '1px, does not scale'],
	],
	'Borders — edges & specials': [
		['--border-radius-void', 'sharp (0)'],
		['--border-radius-circle', 'circle / ellipse'],
		['--border-radius-pill', 'pill'],
		['--border-width-2', 'a 2px edge'],
		['--border-width-4', 'a 4px edge'],
	],
};

/* Document-local: this presentation's own additions, not the shared profile. */
const documentLocal = [
	['--measure', 'the reading-column width (62ch)'],
	['--font-family-serif', "the serif the profile doesn't ship (body re-points at it)"],
	['--font-family-mono', 'document mono face'],
	['--text-label', 'the .label size (colophon, byline)'],
	['--text-size-eyebrow', 'the small-caps h2 label size'],
	['--space-xs', 'document spacing scale'],
	['--space-s', 'document spacing scale'],
	['--space-m', 'document spacing scale'],
	['--space-l', 'document spacing scale'],
	['--space-xl', 'document spacing scale'],
	['--wrapper-max-width', 'the reading-column wrapper'],
	['--wrapper-margin-inline', 'wrapper inline margin'],
	['--wrapper-padding-inline', 'wrapper inline padding'],
];

/* Shape a [name, for] list into rows, checking each name resolves in the CSS. */
const rows = (pairs) =>
	pairs.map(([name, why]) => ({ name, for: why, exists: allNames.has(name) }));

const groups = [
	{ title: 'Colour — Text', roles: rows(colour.Text) },
	{ title: 'Colour — Surfaces', roles: rows(colour.Surfaces) },
	{ title: 'Colour — Borders', roles: rows(colour.Borders) },
	{ title: 'Colour — Accent', roles: rows(colour.Accent) },
	{ title: 'Colour — Status', roles: rows(status), note: 'Four families, one shape. Never the sole signal — pair with an icon or word.' },
	{ title: 'Type', roles: rows(type) },
	{ title: 'Space', roles: rows(space) },
	{ title: 'Borders', roles: rows(borders) },
];

const primitiveGroups = Object.entries(primitives).map(([title, pairs]) => ({
	title,
	roles: rows(pairs),
}));

/* Drift check: profile roles declared in the CSS that the page documents
 * nowhere — across every section it renders, not just the by-job groups. */
const documentLocalRows = rows(documentLocal);
const documented = new Set(
	[...groups, ...primitiveGroups, { roles: documentLocalRows }].flatMap((g) =>
		g.roles.map((r) => r.name),
	),
);
const undocumented = [...roleNames].filter((n) => !documented.has(n)).sort();

export default {
	groups,
	primitiveGroups,
	documentLocal: documentLocalRows,
	undocumented,
	roleCount: roleNames.size,
};
