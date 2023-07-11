import React from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                    <meta name="author" content="BaconBao" />
                    <meta name="google-site-verification" content="uEUOEZWK4hbuXKG4fN2BseuNSZ3h5L7Mu__O2PX2dpY" />
                    <link rel="alternate" hrefLang="en" href="https://baconbao.github.io/en-us/" />
                    <link rel="alternate" hrefLang="zh" href="https://baconbao.github.io" />
                    <link rel="alternate" hrefLang="x-default" href="https://baconbao.github.io" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
