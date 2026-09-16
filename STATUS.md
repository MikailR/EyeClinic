# Eye Clinic bakeoff — STATUS

Updated: 2026-09-15 ~10:36 PM ET (America/Toronto)

## Live board
- **Comparison board:** https://mikailr.github.io/EyeClinic/ — **HTTP 200**
- Repo: https://github.com/MikailR/EyeClinic (`main` + `gh-pages`)

## Per-model results

| Model | Build | Branch | Preview | Notes |
|---|---|---|---|---|
| **grok-4.6** | **PASS** | [`grok-4.6`](https://github.com/MikailR/EyeClinic/tree/grok-4.6) | https://mikailr.github.io/EyeClinic/previews/grok-4.6/ | Vite+React+TS, sticky Call/Book, storefront services + both surgeons |
| **fable-5.1** | **PASS** | [`fable-5.1`](https://github.com/MikailR/EyeClinic/tree/fable-5.1) | https://mikailr.github.io/EyeClinic/previews/fable-5.1/ | Same brief; disclosure for full lists |
| **opus-5** | **PASS** | [`opus-5`](https://github.com/MikailR/EyeClinic/tree/opus-5) | https://mikailr.github.io/EyeClinic/previews/opus-5/ | Lightest JS; WhatsApp-bound booking |
| **gpt-6-astra** | **IN PROGRESS** | placeholder | https://mikailr.github.io/EyeClinic/previews/gpt-6-astra/ | `src/data.ts` landed; App/build still generating (code-mode stalls earlier). Will replace placeholder when `dist/` ready |
| **claude-design** | **PASS** | [`claude-design`](https://github.com/MikailR/EyeClinic/tree/claude-design) | https://mikailr.github.io/EyeClinic/previews/claude-design/ | Design MCP explored 3 canvases; storefront blue hero |

## Preview HTTP checks (at STATUS write)
- board → 200
- grok-4.6 / fable-5.1 / opus-5 / claude-design → 200
- gpt-6-astra → 200 (pending placeholder page)

## Notes
- Brief includes authoritative storefront services, both doctors, and Google-confirmed branch hours.
- Pages fixed with `.nojekyll` after an earlier Jekyll build error.
- Local sources: `/workspace/eye-clinic-bakeoff/models/<id>/`
- Comparison critiques: `/workspace/EyeClinic/COMPARISON.md`
