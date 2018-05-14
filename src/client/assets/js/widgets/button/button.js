/* @ */
import React , {Component} from 'react';
import ReactDOM from 'react-dom';


/**
 * @desc
 */
class Button extends Component{

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
    render(){

        // 
        switch(this.props.type){

            default : 
                return (<button onClick={this.props.onClick}>
                            {this.props.icon ? <i className={"icon icon-"+this.props.icon}></i> : ''}
                            {this.props.children}
                        </button>);
            break;

        }

    }


}

export default Button;