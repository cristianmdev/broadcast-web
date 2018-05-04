/**
 * @desc
 */
import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

/* @ */
import playerComponent from '../../components/playerComponent/player-component';
import NotFound404 from '../../components/notFound404Component/not-found-404';

/**
 * @desc
 */
class PlayerRoute extends Component{

    //
    constructor(props){
        super(props);
    }

    // 
    render(){

        return (<Switch>
                    <Route exact path="/player" component={playerComponent} key="1" />
                    <Route component={NotFound404} />
                </Switch>);

    }
    
};

export default PlayerRoute;