// news-image-20261125 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a newspaper front page
// summing up Wednesday 25 November 2026, drawn from that day's reporting.
// The program copies it to /output/entry.png, deterministically:
// the same bytes in, the same bytes out, on every run. The picture
// itself was drawn in this session with a PIL script (build-news25.py):
// masthead, lead story, 2x2 grid and an ALSO strip, all from the
// reporting of 25 November 2026.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
