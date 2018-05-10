/* @ */
import React , {Component} from 'react';
import ReactDOM from 'react-dom';

/* @ */
class userFront extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (<div style={{backgroundColor: this.props.color()}}>
                <h1>Primer layout react</h1>
            </div>);
    }

}

/* @ */
export default userFront;
