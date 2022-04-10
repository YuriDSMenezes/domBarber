import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { Helmet } from 'react-helmet';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
        <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp
