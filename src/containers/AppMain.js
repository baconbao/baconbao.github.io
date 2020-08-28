import React from 'react';
import { Head } from 'react-static';

export default (data) => (
    <div>
        <Head htmlAttributes={{ lang: undefined }}>
            <title>
                {data.title}
            </title>
        </Head>
        <p>
            {data.content}
        </p>
        <img src="./images/baconbao.png" alt="example" width="100" />
    </div>
);
