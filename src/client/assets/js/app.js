/**
 * @desc Import React
 */
import React        from 'react';
import ReactDOM     from 'react-dom';

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
        return <Routes />;
    }

};


/**
 * @desc 
 */
ReactDOM.render(<App />, document.getElementById('root'));