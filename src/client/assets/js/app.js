/**
 * @desc Import React
 */
import React        from 'react';
import {render}     from 'react-dom';

/**
 * @desc Import Component's
 */
import Routes from "./routes/routes";

/**
 * @desc 
 */
const App = () => {
    return <Routes />
};


/**
 * @desc 
 */
render(  <App />
         , document.getElementById('root'));