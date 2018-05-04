/**
 * @desc
 */
import React from 'react';
import { 
        BrowserRouter as Router, 
        BrowserHistory as history,
        Route, Switch
} from "react-router-dom";

/**
 * @desc All Components of Routes
 */
import PlayerRoute from './playerRoute/playerRoute';
import NotFound404 from '../components/notFound404Component/not-found-404';


/**
 * @desc 
 */
class Routes extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<Router history={history}>
                    <Switch>
                        <Route path="/player" component={PlayerRoute} key="1" />
                        <Route component={NotFound404} />
                    </Switch>
                </Router>);
    }


}
    
export default Routes;