import React from 'react';
import styled from 'styled-components';

import MarkdownPreview from './MarkdownPreview';

const Heading = styled.h1 `
    text-align: center;
    font-family: 'Shadows Into Light', cursive;
    font-size: 42px;
`;

const ScreenTile = styled.div `
    text-align: right;
    // outline: 1px solid red;
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
            
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6" style={{display: "flex"}}>
                            <i className="material-icons">edit</i> 
                            <p>Editor</p> 
                        </div>

                        <ScreenTile className="col-lg-6">
                            <button type="button" className="btn btn-default">
                                <i className="material-icons"> fullscreen </i>
                            </button>
                        </ScreenTile>                       
                    </div>

                </div>

                <div className="col-lg-6">
                    <p>Previewer</p>
                    <i class="material-icons">
computer
</i>
                </div>
            </div>

            <MarkdownPreview />            
        
        </div>
    );
};

export default App;
