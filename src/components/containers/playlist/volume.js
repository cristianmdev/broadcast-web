/*
 * @desc Import React
 */
import React, { Component, Fragment }    from 'react';

/*
* @desc Import all Components of player
*/
import Slider from 'react-rangeslider'


/**
 * @desc
 */
import './volume.scss';
import 'react-rangeslider/lib/index.css'

/**
 * @desc Container of Dashboard.
 */
class Volume extends Component{

    /* @ */
    constructor(props){

        /* @ */
        super(props);

        /* @ */
        this.state = {
            value: 1,
            ...props
        };

    }

    /**
     * @desc 
     */
    componentWillReceiveProps(nextProps){

        /* @ */
        if(!isNaN(nextProps.volume)){

            /* @ */
            this.setState({
                value: nextProps.volume
            });

        }

    }

    /* @ */
    handleChangeValue(newValue){

        /* @ */
        this.setState({
            value: newValue
        })

    }

    /**
     * @desc 
     */
    render(){
        return (
            <Fragment>
                <div data-role="playlist-volume">

                    <nav>
                        <button>
                            <i className="fas fa-backward" />
                        </button>
                        <button>
                            <i className="far fa-play-circle" />
                        </button>
                        <button>
                            <i className="fas fa-forward" />
                        </button>
                    </nav>

                    { /* @ */ }
                    <div data-role="widget-volume">
                        <i className="fas fa-volume-off" />
                        <Slider
                            min={ 0 }
                            max={ 100 }
                            value={ this.state.value }
                            orientation='horizontal'
                            onChange={ newValue => this.handleChangeValue( newValue ) }
                        />
                        <i className="fas fa-volume-up" />
                    </div>
                </div>

            </Fragment>
        );
    }

};


/**
 * @desc Connectamos el dashboard a redux.
 */
export default Volume;