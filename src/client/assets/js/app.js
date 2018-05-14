/**
 * @desc Import React
 */
import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';

/**
 * @desc Store
 */
import Store from './store';

/**
 * @desc Import Component's
 */
import Routes from "./routes/routes";

/**
 * @desc 
 */
class App extends React.Component{

    /**
     * @desc 
     */
    constructor(props){
        super(props);
    }

    /**
     * @desc 
     */
    render(){
        return  <Routes />;
    }

};


/**
 * @desc 
 */
ReactDOM.render(<Provider store={Store}>
                    <App />
                </Provider>, document.getElementById('root'));