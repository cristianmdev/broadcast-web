/* @ */
import React , {Component} from 'react';
import ReactDOM from 'react-dom';

/* @ */
import UserFront from './userFront/user-front';

/* @ */
class OnLive extends Component{

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

    getRandomColor(){
        var chars = '0123456789ABCDEF'.split('');
        var hex = '#';
        for (var i = 0; i < 6; i++) {
            hex += chars[Math.floor(Math.random() * 16)];
        }
        return hex;
     }
    
    /**
    * @desc
    */
    render(){
        return (
            (this.state.mics.length > 0 ? this.state.mics.map((val,key) => 

                (val.kind == 'audioinput' ? 
                    <div key={key}>
                        <h1>{(val.label != '' ? val.label : 'Mic N°'+key)}</h1>
                        {/*<knob />*/}
                        <UserFront color={this.getRandomColor} />
                        <button value="" />
                    </div>
                    : '' 
                )
            ) : <output>Sin mics por el momento.</output>)
            
        );

    }

}

export default OnLive;