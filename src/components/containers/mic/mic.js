/*
 * @desc Import React
 */
import React, { Component }       from 'react';

/**
 * @desc
 */
import UserFront from './user-front/user-front';

/**
 * @desc Actions
 */
import Actions from './actions';

/**
 * @desc Style's
 */
import './mic.scss';

/**
 * @desc Component of Microphones.
 */
class Mic extends Component {

    /**
     * @desc
     * @param {*} props
     */
    constructor( props ) {

        /* @ */
        super(props);

        /* @ */
        this.state = {
            color: '#333',
            ...props
        };

    }

    /**
     * @desc 
     */
    componentWillMount() {

        /* @ Assign Unico*/
        this.setState({
            ...this.state,
            color: this.generateRandomColor()
        });

    }

     /**
     * @desc Generate a string in hexadecimal.
     * @return {String} Hexadecimal
     * @example #6f5f81
     */
    generateRandomColor() {

        /* Map of values need's */
        let chars = '0123456789ABCDEF'.split(''),
            hex = '#';
        
        /* each the map of chars */
        for(let i = 0; i < 6; i++) {

            /* random char */
            hex += chars[Math.floor(Math.random() * 16)];
        
        }

        /* @ hexadecimal */
        return hex;

    }

    /**
     * @desc Conecta el microphono al audioContext
     */
    connectMicrophone(){
        
        /* @ */
        Actions.getMic(this.state.microphone)
                .then( mediaStream => Actions.connect(mediaStream) );

    }

    /**
     * @desc 
     */
    render() {

        let { microphone, position } = this.state;

        /* @ */
        return (
            <div id={ "microphone_" + position } key={ position }>
                <UserFront connectMicrophone={ () => this.connectMicrophone() } color={ this.generateRandomColor() } microphone={ microphone } position={ position } /> 
            </div>
        );

    }

}

export default Mic;