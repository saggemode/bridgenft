import '../styles/globals.css'
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

import { NFTProvider } from '../context/NFTContext';

function MyApp({ Component, pageProps }) {
  return (
    <NFTProvider>
       <ThemeProvider attribute="class">
      <Component {...pageProps} />
      </ThemeProvider>
    </NFTProvider>
  );
}

export default MyApp
