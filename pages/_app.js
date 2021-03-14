import Head from 'next/head';
import '../styles/globals.css'

import { Provider } from "react-redux";
import store from '../store/store';

export default function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
      </Head>
      <Provider store={ store }>
        <Component {...pageProps} />
      </Provider>
    </>
  ) 
}
