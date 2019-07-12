import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from './store';
import App from './components/App2';

import globalStyleSheet from './constants/css/globalStyleSheet';


const GlobalStyle = createGlobalStyle`${globalStyleSheet}`;


ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <GlobalStyle />
            <Provider store={store}>
                <App />
            </Provider>
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);
