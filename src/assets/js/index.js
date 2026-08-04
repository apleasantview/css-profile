/* Entry point, the same shape as index.css: the pipeline compiles this file and
 * nothing else, so behaviour lives in named modules beside it and is called
 * from here. One line per thing the page can do. */

import { switches } from './switches.js';

switches();
