import 'services/firebase';
import type { AppProps } from 'next/app';
import { Helmet } from 'react-helmet';
import 'react-credit-cards/es/styles-compiled.css';
import { GlobalProvider } from 'hooks/Global';
import { LoadingProvider } from 'hooks/Loading';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <LoadingProvider>
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
      </LoadingProvider>
      <GlobalStyle />
    </>
  );
}

export default MyApp;
