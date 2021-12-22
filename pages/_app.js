import '../styles/globals.css'
import config from 'react-reveal/globals';
import {CssBaseline} from "@mui/material";
import Head from 'next/head';
import {ThemeProvider} from '@mui/material/styles';
import {CacheProvider} from '@emotion/react';

import createEmotionCache from '../utils/createEmotionCache';
import theme from '../theme/theme';

config({ ssrFadeout: true });

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {

  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

  return ( <CacheProvider value={emotionCache}>
    <Head>
      <title>Crazy Whales</title>
      <meta name="viewport" content="initial-scale=1, width=device-width"/>
      {/*<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>*/}
      {/*<link rel="icon" href="/favicon.ico" type="image/x-icon"/>*/}
    </Head>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline/>

      {/*<Header/>*/}
      <Component {...pageProps} />
      {/*<Footer/>*/}

    </ThemeProvider>
  </CacheProvider>)
}

export default MyApp
