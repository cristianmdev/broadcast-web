/**
 * @desc 
 */
import { createStore } from 'redux'


/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
const Reducers = (state,action) => {

    switch(action){

        case 'ADD': 
            console.log(state);
            debugger;
        break;

    }


};

const store = createStore(Reducers);

/* @ */
export default store;