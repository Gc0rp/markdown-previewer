import React from 'react';
import styled from 'styled-components';

const Area = styled.div `
    display: flex;
`;

const UserText = styled.textarea `
    background-color: #3C140C;
    color: white;
    border: none;
    width: 50%;
`;

const GeneratedOutput = styled.div `
    width: 50%;
    background-color: blue;
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
};

export default MarkdownPreview;