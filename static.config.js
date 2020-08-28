import path from 'path';
import React from 'react';

const basePath = ''; // example: 'dist'

export default {
    basePath,
    getSiteData: async () => ({
        basePath,
    }),
    plugins: [
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages'),
            },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
    ],
    Document: ({
        Html,
        Head,
        Body,
        children,
        state: { routeInfo },
    }) => (
        <Html>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta content="initial-scale=1, minimum-scale=1, width=device-width, user-scalable=0" name="viewport" />
                <meta name="author" content="BaconBao" />
                {(['en-us'].includes(routeInfo.path)) && (
                    <meta language="en-us" />
                )}
                {(['/', 'zh-tw'].includes(routeInfo.path)) && (
                    <meta language="zh-tw" />
                )}
            </Head>
            <Body>{children}</Body>
        </Html>
    ),
};
