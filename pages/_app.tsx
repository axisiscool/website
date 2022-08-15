import 'inter-ui/inter.css';
import '../styles/globals.css';

import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { DefaultSeoProps } from '../config/DefaultSEOProps';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo {...DefaultSeoProps} />
    <Component {...pageProps} />
  </>
);

export default App;
