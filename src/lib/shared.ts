import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'SellEasy Docs';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// Set this once the docs live in a GitHub repo to enable the GitHub link and "Open in GitHub", e.g.
// { user: 'adarsh-dev-hs', repo: 'sell-easy-docs', branch: 'main' }
export const gitConfig: { user: string; repo: string; branch: string } | null = {
  user: 'adarsh-dev-hs',
  repo: 'sell-easy-docs',
  branch: 'main',
};

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
