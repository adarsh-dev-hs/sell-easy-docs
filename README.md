# SellEasy Docs

Product and engineering documentation for SellEasy, built with [Fumadocs](https://fumadocs.dev) (Next.js + MDX).

```bash
npm install
npm run dev      # http://localhost:3002
npm run build
```

| Path | Contents |
|---|---|
| `content/docs/product/` | Product docs: overview, personas, concepts, journeys, feature guide, roles, metrics, roadmap |
| `content/docs/engineering/` | Engineering docs: setup, architecture, data model, backend, API reference, frontend, operations |
| `content/docs/**/meta.json` | Sidebar order. Folders with `"root": true` become the sidebar tabs |
| `src/components/mdx.tsx` | MDX components available in every page (Callout, Cards, Steps, Tabs, TypeTable, Files, Mermaid…) |
| `src/components/mermaid.tsx` | Mermaid renderer. ```` ```mermaid ```` blocks are converted to it by `remarkMdxMermaid` |

Writing a page: add an `.mdx` file with `title` and `description` frontmatter, then list it in the folder's `meta.json`.
