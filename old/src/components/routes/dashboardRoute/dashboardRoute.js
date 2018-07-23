 
/**
 * @desc
 */
import React from 'react';
import {Route, Switch} from "react-router-dom";

/* @ */
import DashboardRoute  from '../../components/playerComponent/player-component';
import NotFound404      from '../../components/notFound404Component/not-found-404';

/**
 * @desc
 */
class DashboardRoute extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path="/dashboard" component={DashboardRoute} key="1" />
                <Route component={NotFound404} />
            </Switch>
        );
    }
};

export default DashboardRoute;