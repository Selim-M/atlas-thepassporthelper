# Atlas

Personal travel OS for multi-passport holders. See where your combined
passports can take you, on what terms.

See `PRD.md` for the full v1 specification.

## Quick start

```sh
npm install
cp .env.example .env.local   # then fill in VITE_MAPTILER_KEY
npm run dev
```

`npm run dev` runs `data:build` first; the app cannot start without
`src/data/access.generated.json`.

## Environment

- `VITE_MAPTILER_KEY` — MapTiler API key for map tiles. Free tier covers
  100k tile requests / month. Sign up at https://maptiler.com.

`.env.local` is gitignored. Never commit a real key.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Build dataset + run Vite dev server on :5173 |
| `npm run build` | Build dataset + typecheck + production build |
| `npm run preview` | Preview the production build locally |
| `npm run data:build` | Parse the CSV and emit `src/data/access.generated.json` |
| `npm run data:validate` | Cross-check ISO codes between dataset and GeoJSON |
| `npm run test` | Run unit tests once |
| `npm run test:ui` | Run unit tests with the Vitest UI |
| `npm run typecheck` | TypeScript check, no emit |
| `npm run lint` | ESLint |

## Updating the dataset

The visa dataset is sourced from
[`ilyankou/passport-index-dataset`](https://github.com/ilyankou/passport-index-dataset).
To refresh:

1. Replace `data/passport-index-tidy-iso3.csv` with the latest tidy ISO-3 CSV.
2. Run `npm run data:build` — it will fail if any new requirement string
   isn't covered by `parseStatus()` in `src/lib/access.ts`. Add the new
   case and re-run.
3. Run `npm run data:validate` — it will surface any ISO-3 codes that
   don't map to a polygon. Add an override to `CODE_OVERRIDES` in
   `src/lib/countries.ts` if needed.

## Build status

- [x] Phase 1 — Scaffold + shell
- [ ] Phase 2 — Data layer
- [ ] Phase 3 — Map canvas
- [ ] Phase 4 — Passport panel
- [ ] Phase 5 — Hover + drawer
- [ ] Phase 6 — Polish
