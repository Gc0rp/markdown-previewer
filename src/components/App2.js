import React from 'react';
import styled from 'styled-components';

import MarkdownPreview from './MarkdownPreview';
import logo from '../images/edit.png';

const Heading = styled.h1 `
    text-align: center;
    outline: 1px solid red;
`;

const App = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <Heading>
                        Welcome to Markdown Previewer
                    </Heading>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Editor</p>
                            <img src={logo} alt="Logo"/>
                        </div>
                    </div>

                </div>

                <div className="col-lg-6">
                    <p>Previewer</p>
                </div>
            </div>

            <MarkdownPreview />            
        
        </div>
    );
};

export default App;
