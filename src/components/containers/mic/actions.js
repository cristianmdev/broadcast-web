/**
 * @desc
 */
class Actions{

    /**
     * 
     * @param {*} deviceId 
     */

     
    getMic(microphone){

        return new Promise( ( resolve, reject ) => {

            /* @ */
            navigator.mediaDevices.getUserMedia({
                video: false,
                audio: {

                    /* @ Device id */
                    deviceId: microphone.deviceId,

                    /* @ */
                    groupId: microphone.groupId,

                    /* @ Control in volume */
                    autoGainControl : true,

                    /* @ Volume */
                    volume: 1,

                }
            }).then(resolve).catch(reject);

        });

    }

    connect(mediaStream){


        console.log(mediaStream);
        debugger

    }


}


export default new Actions();