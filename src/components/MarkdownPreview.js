import React from 'react';
import styled from 'styled-components';

const Area = styled.div `
    display: flex;
`;

const UserText = styled.textarea `
    background-color: #3C140C;
    width: 50%;
    color: white;
    border: none;
`;

const GeneratedOutput = styled.textarea `
    background-color: blue;
    width: 50%;
    color: white;
    border: none;
`;


const MarkdownPreview = () => {
    return(
        <Area>
            <UserText />
            <GeneratedOutput />
        </Area>
    );
}

export default MarkdownPreview;