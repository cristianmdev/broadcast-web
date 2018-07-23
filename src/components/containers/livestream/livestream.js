/**
 * @desc Library's
 */
import React, { Component } from 'react';

/**
 * @desc
 */
import './livestream.scss';

/**
 * @desc
 * 
 * @prop handleStatus
 * 
 * 
 */
class LiveStream extends Component{

    /* @ */
    constructor(props){

        /* @ */
        super(props);

        /* @ */
        this.state = {
            status : "offline"
        };

    }

    /**
     * @desc
     */
    handleStatus(newStatus){

        /* @ */
        this.setState({
            status: newStatus
        });

        /* @ */
        this.props.handleStatus && this.props.handleStatus(newStatus);

    }

    /**
     * @desc
     */
    render(){

        /* @ */
        return (
            <section data-role="livestream">

                <button onClick={ () => this.handleStatus(true) }>
                    <i className="fas fa-broadcast-tower" /> ONLINE 
                </button>

                <button onClick={ () => this.handleStatus(false) }>
                    <i className="fas fa-power-off" /> OFFLINE 
                </button>

            </section>
        );

    }

}

export default LiveStream;