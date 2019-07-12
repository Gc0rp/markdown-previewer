import React from 'react';
import styled from 'styled-components';

import MarkdownPreview from './MarkdownPreview';

const Container = styled.div `
   outline: 1px solid red;
   height: 100%;
`;

const Heading = styled.h1 `
    text-align: center;
`;

const App = () => {
    return(
        <div className="container-fluid no-gutters">
            <Heading>
                Welcome to Markdown Previewer
            </Heading>
            <div className="row">
                <div className="col-lg-4">
                    <p>Editor</p>
                </div>
            </div>
            <MarkdownPreview />
        </div>
    );
};

export default App;
