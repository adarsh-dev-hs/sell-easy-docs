import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // The repo root has its own package.json; keep Turbopack scoped to this app.
  turbopack: { root: path.dirname(fileURLToPath(import.meta.url)) },
};

export default withMDX(config);
