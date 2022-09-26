import React from 'react';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Hello world</title>
      </Head>
      {children}
    </>
  );
}
