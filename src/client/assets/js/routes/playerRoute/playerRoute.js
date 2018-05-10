 
/**
 * @desc
 */
import React from 'react';
import {Route, Switch} from "react-router-dom";

/* @ */
import playerComponent  from '../../views/playerComponent/player-component';
import NotFound404      from '../../views/notFound404Component/not-found-404';

/**
 * @desc
 */
class PlayerRoute extends React.Component{
    render(){
        return (<Switch>
                    <Route exact path="/player" component={playerComponent} key="1" />
                    <Route component={NotFound404} />
                </Switch>);
    }
};

export default PlayerRoute;