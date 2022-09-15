import Head from 'next/head';
import { Fragment } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Books Search</title>
        <meta name="description" content="Search books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </Fragment>
  );
}
