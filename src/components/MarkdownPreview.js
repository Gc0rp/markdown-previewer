import React from 'react';
import styled from 'styled-components';



const UserText = styled.textarea `
    background-color: #3C140C;
    color: white;
    border: none;
    width: 100%;
    padding: 10px;
    min-height: 50vh;
    margin: 15px auto;
`;

const GeneratedOutput = styled.div `
    width: 100%;
    background-color: blue;
    color: white;
    border: none;
    min-height: 50vh;
    margin: 15px auto;
`;

const MarkdownPreview = () => {
    return(
        <div className="row">
            <div className="col-lg-6">
                
                <UserText />
                
            </div>

            <div className="col-lg-6">
                <GeneratedOutput>
                    <h1>Test</h1>
                </GeneratedOutput>
            </div>

        </div>
            
    );
};

export default MarkdownPreview;