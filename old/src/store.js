/**
 * @author Cristian Mari
 * @date   22/4/2018
 */
import {createStore} from 'redux';

// @ 
import Shared from './reducers/shared';

// @ Reducer's of Station
import Mics from './reducers/station/micsReducer/micsReducer';
//import Playlist from 'reducers/station/playlist';
//import Artists from 'reducers/station/artists';
//import Albums from 'reducers/station/albums';
//import Songs from 'reducers/station/albums';

// ---------

// @ Reducer's of Player
//import Player from 'reducers/station/player';

// ---------

/**
 * @name Reducer
 * @desc Container of all reducer's of application.
 */
const Reducer = (prevState,action) => {
    switch(action){
        // @ Mics Reducer
        case "Mics": 
            new Mics(prevState);
        break;
        /*
        case "Mics": 
            new Mics();
        break;*/
    }
}



export default createStore(Reducer,Shared);