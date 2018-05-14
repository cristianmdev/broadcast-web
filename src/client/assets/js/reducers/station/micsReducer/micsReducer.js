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

    listen(){
        return new Promise((resolve,reject) => {

            // Buscamos los permisos del microfono
            Actions.getDevices()
                   .then(Actions.filterMics)
                   .catch(reject);

        });
    }

}

// @ 
export default MicsReducer;