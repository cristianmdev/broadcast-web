/**
 * @desc 
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';

class notFound404Component extends Component{

    /* @ */
    constructor(props){
        super(props);
    }

    /* @ */
    render(){
        return (<main>
                    <p>No se encuentra!</p>
                    <Link to="/player">Ir al Player</Link>
                </main>);
    }

}

export default notFound404Component;