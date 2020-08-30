import React from 'react';
import { Root, Routes } from 'react-static';
import { Router } from 'components/Router';

import './app.css';

const App = () => {
    const { Suspense } = React;
    return (
        <Root>
            <div className="content">
                <Suspense fallback={<em>Loading...</em>}>
                    <Router>
                        <Routes path="*" />
                    </Router>
                </Suspense>
            </div>
        </Root>
    );
};

export default App;
