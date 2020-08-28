import React from 'react';
import { Root, Routes, useSiteData } from 'react-static';
import { Link, Router } from 'components/Router';

import './app.css';

const App = () => {
    const { basePath } = useSiteData();
    const modifiedBasePath = (basePath === '') ? '/' : `/${basePath}/`;
    return (
        <Root>
            <nav>
                <Link to={`${modifiedBasePath}`}>Home</Link>
                <Link to={`${modifiedBasePath}zh-tw`}>zh-tw</Link>
                <Link to={`${modifiedBasePath}en-us`}>en-us</Link>
            </nav>
            <div className="content">
                <React.Suspense fallback={<em>Loading...</em>}>
                    <Router>
                        <Routes path="*" />
                    </Router>
                </React.Suspense>
            </div>
        </Root>
    );
};

export default App;
