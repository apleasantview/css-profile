#!/usr/bin/env node
/* Audit the profile against its own grammar.
 *
 * Three checks, each one a rule made executable:
 *
 *   imports    Every @import resolves. Import order is cascade order, so a
 *              silently-missing file is a silently-missing layer.
 *
 *   arrow      Every var() a consumer spends is declared somewhere. This is the
 *              dependency arrow stated as an assertion: consumers reach into the
 *              package, so anything they reach for had better be there.
 *
 *   unspent    Semantic roles nothing spends. Not a failure — a question. A role
 *              earns its place when the mapping is a decision that could diverge,
 *              not when it happens to be used today. But an unspent role is where
 *              drift starts, so the list is worth reading rather than suppressing.
 *
 * The lexicon runs a fourth check of its own: src/_data/vocabulary.js flags any
 * role declared in the CSS that the vocabulary page documents nowhere.
 *
 * Run:  npm run audit
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(here, 'src', 'assets', 'css');
const CONTENT = path.join(here, 'src', 'content');

const DECL = /^\s*(--[\w-]+)\s*:/gm;
const USE = /var\((--[\w-]+)/g;
const IMPORT = /@import\s+'([^']+)'/g;

function walk(dir, ext = '.css') {
	const out = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) out.push(...walk(full, ext));
		else if (entry.name.endsWith(ext)) out.push(full);
	}
	return out.sort();
}

const matchAll = (text, re) => [...text.matchAll(new RegExp(re.source, re.flags))].map((m) => m[1]);

const sheets = walk(ROOT);
const read = (f) => fs.readFileSync(f, 'utf8');
const rel = (f) => path.relative(here, f).split(path.sep).join('/');

/* 1. imports */
const broken = [];
for (const f of sheets) {
	for (const target of matchAll(read(f), IMPORT)) {
		if (!fs.existsSync(path.resolve(path.dirname(f), target))) {
			broken.push(`${rel(f)} -> ${target}`);
		}
	}
}

/* 2. arrow */
const declared = new Set(sheets.flatMap((f) => matchAll(read(f), DECL)));
const missing = new Map();
for (const f of sheets) {
	if (!/[\\/](document|components)[\\/]/.test(f)) continue;
	for (const name of matchAll(read(f), USE)) {
		if (!declared.has(name)) {
			if (!missing.has(name)) missing.set(name, []);
			missing.get(name).push(rel(f));
		}
	}
}

/* 3. unspent */
const semanticDir = path.join(ROOT, 'profile', 'semantic');
const roles = new Set(walk(semanticDir).flatMap((f) => matchAll(read(f), DECL)));
const spent = new Set([
	...sheets.flatMap((f) => matchAll(read(f), USE)),
	...walk(CONTENT, '.html').flatMap((f) => matchAll(read(f), USE)),
]);
const unspent = [...roles].filter((r) => !spent.has(r)).sort();

/* Report */
let failed = false;

console.log(`imports  ${broken.length ? 'FAIL' : 'ok'}`);
broken.forEach((b) => console.log(`         ${b}`));
failed ||= broken.length > 0;

console.log(`arrow    ${missing.size ? 'FAIL' : 'ok'}`);
[...missing.entries()].sort().forEach(([name, files]) => console.log(`         ${name}  (${files.join(', ')})`));
failed ||= missing.size > 0;

console.log(`unspent  ${unspent.length} role(s)`);
unspent.forEach((name) => console.log(`         ${name}`));

process.exit(failed ? 1 : 0);
