import 'inter-ui/inter.css';
import '../styles/globals.css';

import { DefaultSeo } from 'next-seo';
import { DefaultSeoProps } from '../config/DefaultSEOProps';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo {...DefaultSeoProps} />
    <Component {...pageProps} />
  </>
);

export default App;
