/** 
 * @author Cristian Mari
 * @date   22/4/2018
 * @desc   Hanlder of Devices for MediaRecoder
*/

import Actions from './actions';

class MicsReducer {
    constructor(prevState,action){

        /* ...middlewares */

        switch(action){
            case 'LISTEN' :
                Actions.listen().then(mics => {
                    prevState.Mics = mics;
                })
            break;
        }

    }

}

// @ 
export default MicsReducer;