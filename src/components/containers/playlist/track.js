/*
 * @desc Import React
 */
import React, { Component, Fragment }    from 'react';

/*
* @desc Import all Components of player

import Progress from './track-progress';


/**
 * @desc
 */
import './track.scss';

/**
 * @desc Container of Dashboard.
 */
class Track extends Component{

    /* @ */
    constructor(props){

        /* @ */
        super(props);

        /* @ */
        let { artist = "Desconocido.", album = "Desconocido.", title = "Desconocido." } = props.data;

        /* @ */
        this.state = {
            artist, album, title,
            ...props
        };

    }

    /**
     * @desc 
     */
    componentWillReceiveProps(nextProps){

    }

    /**
     * @desc 
     */
    render(){
        return (
            <Fragment>
                <div data-role="playlist-track">
                    <nav>
                        <button data-role="delete">
                            <i className="fas fa-trash" /> 
                        </button>
                        <button data-role="play-plause">
                            <i className="fas fa-play" /> 
                        </button>
                    </nav>

                    <h1>{ this.state.artist }</h1>
                    <h2>{ this.state.title }</h2>

                    {/*<Progress />*/}

                </div>
            </Fragment>
        );
    }

};


/**
 * @desc Connectamos el dashboard a redux.
 */
export default Track;