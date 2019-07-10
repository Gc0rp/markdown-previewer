import React from 'react';
import styled from 'styled-components';

import MarkdownPreview from './MarkdownPreview';
const Container = styled.div `
    width: 100%;
    border: 1px solid red;
    height: auto;
`;

const Heading = styled.h1 `
    text-align: center;
`;

const App = () => {
    return(
        <Container>
            <Heading>
                Welcome to Markdown Previewer
            </Heading>
            <MarkdownPreview />
        </Container>
    );
};

export default App;
