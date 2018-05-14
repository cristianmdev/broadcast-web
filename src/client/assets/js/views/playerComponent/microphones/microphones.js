/* @ */
import React , {Component} from 'react';
import ReactDOM from 'react-dom';

/* @ */
import UserFront from './userFront/user-front';

/* @ */
import './microphones.scss';

/* @ */
class Microphones extends Component{

    /**
      * @desc
    */
    constructor(props){

        /* @ */
        super(props);

        /* @ */
        this.state = {
            mics : []
        };

    }

    componentWillMount(){

        /* @ */
        this.getMics().then(devices => {
            /* @ */
            this.setState({
                mics : devices
            });
        }); 
        
    }

    /**
    * @desc
    */
    getMics(){

        /* @ */
        let mediaDevice = (navigator.mediaDevices || navigator.mediaDevices.enumerateDevices);

        /* @ */
        return mediaDevice.enumerateDevices();

    }

    /**
     * @desc
     */
    getRandomColor(){
        var chars = '0123456789ABCDEF'.split('');
        var hex = '#';
        for (var i = 0; i < 6; i++) {
            hex += chars[Math.floor(Math.random() * 16)];
        }
        return hex;
     }
    
    /**
     * 
     * @param {*} deviceId 
     * @return {Promise} - Stream of microphone.
     */
    getMicStream(deviceId){
        return navigator.getUserMedia({
            "audio"     : true,
            "video"     : false,
            "advanced"  : [
                {"deviceId"  : deviceId},
                {"volume"    : 1}
            ]
            });
    }
    
     /**
    * @desc
    */
    render(){
        return (
            (this.state.mics.length > 0 ? this.state.mics.map((microphone,key) => 

                (microphone.kind == 'audioinput' ? 
                    <div id={"microphone"+key} key={key}>
                        {/*<knob />*/}
                        <UserFront color={this.getRandomColor} microphone={microphone} position={key} />
                    </div>
                    : '' 
                )
            ) : <output>Sin mics por el momento.</output>)
            
        );

    }

}

export default Microphones;