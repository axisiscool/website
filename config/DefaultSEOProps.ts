import type { DefaultSeoProps as DefaultSeoPropsType } from 'next-seo';

const BaseUrl = 'https://axis.moe';
export const DefaultSeoProps: DefaultSeoPropsType = {
  titleTemplate: 'Axis | %s',
  title: 'Home',
  description: 'A Full-Stack Developer from New York.',
  canonical: BaseUrl,
  additionalMetaTags: [
    { name: 'url', content: BaseUrl },
    { name: 'identifier-URL', content: BaseUrl },
    { name: 'shortlink', content: BaseUrl },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'keywords', content: 'axis, axisiscool' },
    {
      name: 'summary',
      content: 'A Full-Stack Developer from New York.'
    },
    { name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
    { name: 'googlebot', content: 'index,follow' },
    { name: 'author', content: 'Axis, axis@axis.moe' },
    { name: 'target', content: 'all' },
    { name: 'audience', content: 'all' },
    { name: 'coverage', content: 'Worldwide' },
    { name: 'distribution', content: 'Global' },
    { name: 'rating', content: 'safe for kids' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'HandheldFriendly', content: 'True' },
    { name: 'revisit-after', content: '7 days' }
  ],
  openGraph: {
    title: 'Axis',
    url: BaseUrl,
    type: 'website',
    locale: 'en_US',
    site_name: 'Axis'
  }
};
