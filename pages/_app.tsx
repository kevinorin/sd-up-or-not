import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from '@apollo/client';
import Header from '../components/Header';
import client from '../apollo-client.js';

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <div className='h-screen overflow-y-scroll bg-slate-300'>
          <Header />
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp
