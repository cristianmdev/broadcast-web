/*
 * @desc Import React
 */
import React, { Component }    from 'react';

/** 
 * @desc Import all Components of player
 */
import Microphones  from '../mics/mics';
import Playlist     from '../playlist/playlist';

/**
 * @desc 
 */
import Artists      from "../artists/artists";
import Albums       from '../albums/albums';
import LiveStream   from '../livestream/livestream';
/*
import Spectre    from '../widgets/dashboard/Spectre';
import Songs        from '../widgets/dashboard/Songs';*/

/**
 * @desc
 */
import './dashboard.scss';

/**
 * @desc Container of Dashboard.
 */
class DashboardView extends Component{

    /* @ */
    constructor(props){

        /* @ */
        super(props);

        /* @ */
        this.state = {
            user: {},
            status: false,
        };

    }

    /**
     * @desc 
     */
    handleConnectMicrophone(MicrophoneStream){

        /* @ */
        Actions.createMediaStreamSource(MicrophoneStream);

    }
    
    render(){
        return (
            <main id="dashboard">   

                { /* @ */ }
                <LiveStream />

                { /* @ */ }
                <Microphones />
                
                { /* @ */ }
                <Playlist />

                { /* @ */ }
                <section data-role="media">

                    { /* @ */ }
                    <Artists data={ [] } />

                    { /* @ */ }
                    <Albums data={ [] } />
    
               </section>
            </main>
        );
    }

};


/**
 * @desc Connectamos el dashboard a redux.
 */
export default DashboardView;