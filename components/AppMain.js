import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import '../styles/AppMain.module.css';

export default (data) => (
    <div>
        <Head>
            <title>
                {data.title}
            </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/zh-tw">zh-tw</Link>
            <Link href="/en-us">en-us</Link>
        </nav>
        <p>
            {data.content}
        </p>
    </div>
);
