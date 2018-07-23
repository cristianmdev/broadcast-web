/* @ */
import React , {Component} from 'react';
import ReactDOM from 'react-dom';

/* @ */
import Button from '../../../../widgets/button/button';

/* @ */
class userFront extends Component{

    /**
     * 
     * @param {*} props 
     */
    constructor(props){
        super(props);
    }

    /**
     * @desc
     */
    connect(){
        if(this.props.onConnect){
            this.props.onConnect(this.props.microphone,this.props.position);
        }
    }

    /**
     * @desc
     */
    render(){
        return (<div style={{backgroundColor: this.props.color()}}>
                    <figure></figure>
                    <h1>{(this.props.microphone.label != '' ? this.props.microphone.label : 'Mic N°'+this.props.position)}</h1>
                    <Button icon="on" onClick={ () => this.connect() }>Enchufar</Button>
                </div>);
    }

}

/* @ */
export default userFront;
