/*
 * @desc Import React
 */
import React, { Component, Fragment } from 'react';
import Store from '../../../store';

/**
 * @desc
 */
import Mic from '../mic/mic';

/**
 * @desc Style's
 */
import './mics.scss';

/**
 * @desc Widget of Microphones.
 */
class Mics extends Component {

    /**
     * @desc
     */
    constructor(props){

        // Construyendo el ambito.
        super(props);

        // Estado del microfono.
        this.state = {
            Mics: [],

        };

    }

    /**
     * @desc Before Mount this component.
     */
    componentDidMount() {

        /* @ */
        this.getDevices()
            .then( (mics) => this.updateMics(mics))
            .catch( () => this.notMics() ); 
        
    }

    /**
    * @desc Get Devices of system
    * @return {Promise} - Return a promise with a result in MediaDeviceInfo 
    */
    getDevices() {

        return new Promise( ( resolve, reject ) => {

            /* @ Evaluación de errores. */
            try{

                /* @ */
                let mediaDevice = (navigator.mediaDevices || navigator.mediaDevices.enumerateDevices);

                /* @ */
                mediaDevice.enumerateDevices()
                           .then( devices   => this.filterDevicesByMics(devices) )
                           .then( mics      => resolve(mics) )
                           .catch( e => reject(e) )
                           .catch( e => reject(e) );

            }catch( e ) {

                /* @ Interrumpimos por inconvenientes tecnicos. */
                reject( e );

            }

        });

    }

    /**
     * @param {*} devices 
     */
    filterDevicesByMics( devices ){

        /* @ */
        return new Promise( ( resolve, reject ) => {
            
            /* @ */
            try{

                /* @ */
                let result = [];
                
                /* @ */
                devices.forEach( device => {
                
                    /* @ */
                    if(device.kind == "audioinput" && device.deviceId != 'communications' && device.deviceId != 'default')
                        result.push(device);

                });

                /* @ */
                resolve(result);

            }catch(e){

                /* @ */
                reject(e);

            }

        });

    }


    /**
     * @desc
     */
    updateMics(mics){

        /* @ */
        this.setState({
            Mics: mics,
        });

        Store.dispatch({
            type: "ADD"
        });
    }

    /**
     * @desc Generate Layout's for the mics.
     */
    generateMicsLayouts(){

        /* @ */
        return this.state.Mics.length > 0 && this.state.Mics.map( ( microphone, key ) => {

            /* @ Verificamos que sea un input */
            if(microphone.kind == 'audioinput'){
                return <Mic id={"microphone_"+microphone.id} key={key} position={key} microphone={microphone} />
            } 
            
        }) 

    }

    /**
    * @desc
    */
    render(){
    
        return ( 
            <div data-role="mics">
                {this.state.Mics.length > 0 && this.generateMicsLayouts()}
                {this.state.Mics.length < 1 && <output>Sin mics por el momento.</output>}
            </div>
        );

    }
    
};


/* @ */
export default Mics;