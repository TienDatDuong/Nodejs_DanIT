# Copilot / Agent Instructions for Nodejs_DanIT

This small repository is a TypeScript-based Express app that is compiled to `dirt/` and run with Node.js. The guidance below focuses on concrete, discoverable patterns and exact commands to get productive quickly.

- **Project entry files**: `app.ts` (source), compiled output `dirt/app.js` (runtime).
- **TypeScript config**: `tsconfig.json` — `outDir` is `dirt`, `module` is `commonjs`, `esModuleInterop` is `true`.
- **Package manifest**: `package.json` — dependencies include `express@5.0.1`; devDeps include `typescript`, `@types/node`, `@types/express`.

What to know (big-picture)
- The repo is a single-process Express service. Request handling lives in `app.ts` and is compiled to `dirt/app.js`.
- The codebase targets CommonJS modules and uses `require(...)` in the TypeScript source (see `app.ts`). Keep transformations consistent with `tsconfig.json`.
- Source maps are enabled (`sourceMap: true`) so the compiled JS includes `.map` references.

Developer workflows (concrete)
- Build (one-shot): compile TypeScript to `dirt/`:

```powershell
npx tsc
```

- Run compiled app:

```powershell
node dirt/app.js
```

- Continuous development (watch + run): open two terminals. In one run the TypeScript watcher, in the other restart Node when files change (no watcher provided in repo):

```powershell
# terminal 1
npx tsc -w
# terminal 2 (restart manually after rebuild, or use your tool of choice)
node dirt/app.js
```

Project-specific conventions
- Output directory is `dirt/` (not the common `dist/`). Always look there for runtime artifacts.
- Source uses CommonJS `require` in `.ts` file — do not refactor to ES `import` unless you update `tsconfig.json`/build scripts accordingly.
- `package.json` has no `build` or `start` scripts; CI or local run relies on the `npx tsc` + `node dirt/app.js` sequence.

Integration points & externals
- Express is the only declared runtime dependency. No database or network services are present in the repo.
- The repo includes source maps in compiled output which helps debugging node stacks back to `app.ts`.

Quick examples for edits
- If you add a new route in `app.ts`, recompile with `npx tsc` and test with `node dirt/app.js`.
- If converting files to use `import`/`export`, update `tsconfig.json` and ensure `esModuleInterop` is preserved for compatibility.

Files to inspect when making changes
- `app.ts` — primary application code (route handlers, server listen).
- `tsconfig.json` — compiler options and `outDir: dirt`.
- `dirt/app.js` — runtime artifact used by Node.
- `package.json` — dependencies and scripts (currently minimal).

If something in this doc is unclear or you'd like more detail (tests, CI, or suggested npm scripts), tell me which area to expand and I will iterate.
