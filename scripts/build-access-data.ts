/**
 * Phase 1 stub: writes an empty access JSON so the dev server can boot
 * before phase 2 lands the real CSV → JSON pipeline.
 *
 * Phase 2 replaces this with: CSV parse, parser-coverage assertion,
 * meta.json output (see PRD §5.2).
 */
import { mkdirSync, existsSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const out = resolve(process.cwd(), 'src/data/access.generated.json');
mkdirSync(dirname(out), { recursive: true });

if (!existsSync(out)) {
  writeFileSync(out, '{}\n');
  console.log(`[data:build] phase-1 stub wrote empty file: ${out}`);
} else {
  console.log(`[data:build] phase-1 stub: file exists, leaving as-is`);
}
