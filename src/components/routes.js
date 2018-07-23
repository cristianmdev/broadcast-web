
/**
 * @desc
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/**
 * @desc Routes
 */
import Dashboard from './containers/dashboard/dashboard';
import NotFound404 from './containers/not-found-404/not-found-404';

/**
 * @desc 
 */
class Routes extends Component{
	
	/**
	 * @desc
	 */
	render(){

		/* @ */
		return (
			<Router>
				<Switch>
					<Route path="/dashboard" component={ Dashboard } key="1" />
					<Route path="/*" component={ NotFound404 } />
				</Switch>
			</Router>
		);

	}
}

export default Routes;