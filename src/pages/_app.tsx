import 'services/firebase';
import type { AppProps } from 'next/app';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import 'react-credit-cards/es/styles-compiled.css';
import '../styles/react-day-picker-personalized.css';
import { GlobalProvider } from 'hooks/Global';
import { LoadingProvider } from 'hooks/Loading';
import { CartProvider } from 'hooks';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
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
        <script src="https://assets.pagseguro.com.br/checkout-sdk-js/rc/dist/browser/pagseguro.min.js"></script>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <LoadingProvider>
        <GlobalProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </GlobalProvider>
      </LoadingProvider>
      <GlobalStyle />
    </HelmetProvider>
  );
}

export default MyApp;
