/**
 * @desc
 * @author Cristian Mari
 */

 /**
  * @desc Library's :D
  */
import React , { Component } from 'react';
import Knob from 'react-canvas-knob';

/**
 * @desc
 */
import './user-front.scss';

/**
 * @desc
 */
class userFront extends Component {

    /**
     * @param {*} props 
     */
    constructor( props ) {
        
        /* @ */
        super( props );
        
        /* @ */
        this.state = {
 
            volume : 100

        };

    }

    /* @ */
    handleChangeVolume(newVolume){

        /* @ */
        this.setState({
            volume: newVolume
        });

    }


    /**
     * @desc
     */
    render() {

        /* @ */
        return (
            <div style={{ borderBottom: "5px solid "+this.props.color, borderRadius:"2px" }} className="mic-userfront">
                
                {/* @ Volume of Mic */}
                <Knob
                    className={"knob"}
                    min={ 1 }
                    max={ 100 }
                    step={ 1 }
                    thickness={ 0.05 }
                    angleArc={ 300 }
                    bgColor={ "#4f4f4f" }
                    fgColor={ "#fff" }
                    width={ 100 }
                    height={ 100 }
                    angleOffset={ -150 }
                    value={ this.state.volume }
                    lineCap={"round" }
                    onChange={ newVolume => this.handleChangeVolume(newVolume) }
                />

                {/* @ Avatar */}
                <figure style={{ backgroundImage: "url(https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/17342688_144365109419906_6581568137018010992_n.jpg?_nc_cat=0&oh=11464594d58602d61213c7db9fca5d30&oe=5BE6B106)" }}></figure>

                {/* @ Name */}
                <h1>Cristian Mari</h1>

                {/* @ Position */} 
                <h2>Microfono #{this.props.position} Conectado.</h2>

                {/* @ Dispositivo */}
                <h3>{ this.props.microphone.label ? this.props.microphone.label : 'Dispositivo desconocido.' }</h3>

                { /* @ */ }
                <button onClick={ () => this.props.connectMicrophone && this.props.connectMicrophone() }>
                    <i className="fas fa-microphone" /> Conectar Microfono
                </button>

                <div style={{"clear":"both","display":"block"}} />

            </div>
        );
        
    }

}

/* @ */
export default userFront;
