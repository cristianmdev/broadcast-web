/*
 * @desc Import React
 */
import React, { Component, Fragment }    from 'react';

/*
* @desc Import all Components of player
*/
import Track from './track';
import Volume from './volume';


/**
 * @desc
 */
import './playlist.scss';

/**
 * @desc Container of Dashboard.
 */
class PlaylistView extends Component{

    /* @ */
    constructor(props){

        /* @ */
        super(props);

        /* @ */
        this.state = {
            queue: [{
                artist: "Los Pericos",
                title: "Anonimos"
            },{
                artist: "Los Pericos",
                title: "Anonimos"
            },{
                artist: "Los Pericos",
                title: "Anonimos"
            },{
                artist: "Los Pericos",
                title: "Anonimos"
            },{
                artist: "Los Pericos",
                title: "Anonimos"
            },{
                artist: "Los Pericos",
                title: "Anonimos"
            },{
                artist: "Los Pericos",
                title: "Anonimos"
            },{
                artist: "Los Pericos",
                title: "Anonimos"
            },{
                artist: "Los Pericos",
                title: "Anonimos"
            },{
                artist: "Los Pericos",
                title: "Anonimos"
            },{
                artist: "Los Pericos",
                title: "Anonimos"
            },{
                artist: "Los Pericos",
                title: "Anonimos"
            },{
                artist: "Los Pericos",
                title: "Anonimos"
            },{
                artist: "Los Pericos",
                title: "Anonimos"
            },{
                artist: "Los Pericos",
                title: "Anonimos"
            }],
            volume: 100,
            status: false,
        };

    }

    /**
     * @desc 
     */
    componentWillMount(){

        

    }
    
    render(){
        return (
            <div data-role="playlist">

                <div data-role="playlist-tracks">
                    {
                        this.state.queue.length > 0 && this.state.queue.map( ( track, index ) => {
                            return <Track data={ track } key={ index } />;
                        })
                    }
                </div>

                <Volume value={ this.state.volume } />

                <i className="icon icon-list"></i>

            </div>
        );
    }

};


/**
 * @desc Connectamos el dashboard a redux.
 */
export default PlaylistView;