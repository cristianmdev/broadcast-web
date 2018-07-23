/**
 * @desc Dependencias
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

/**
 * @desc 
 */
import Routes from './components/routes';

/* @ */
import Store from "./store";

/**
 * @desc Import 
 */
render(
    <Provider store={ Store }>
        <Routes />
    </Provider>,
    document.querySelector('#root')
);
