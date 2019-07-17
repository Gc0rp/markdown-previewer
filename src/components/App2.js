import React from 'react';
import styled from 'styled-components';

import MarkdownPreview from './MarkdownPreview';

const Heading = styled.h1 `
    text-align: center;
    font-family: 'Shadows Into Light', cursive;
    font-size: 42px;
`;

const App = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <Heading>
                        <strong>Welcome to Markdown Previewer</strong>
                    </Heading>
                </div>
            </div>

            <MarkdownPreview />            
        
        </div>
    );
};

export default App;
