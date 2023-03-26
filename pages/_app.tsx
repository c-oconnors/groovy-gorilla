import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import Header from '../components/Header';

function MyApp({ Component, pageProps: { session, ...pageProps } }) 
  {
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    );

  }

export default MyApp;
