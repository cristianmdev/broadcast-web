/**
 * @desc 
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class notFound404Component extends Component{

    /* @ */
    constructor(props){
        super(props);
    }

    /* @ */
    render(){
        return (<main>
                    <h1>Lista de Url's Disponibles!</h1>
                    <Link to="/dashboard">Ir al Dashboard</Link>
                </main>);
    }

}

export default notFound404Component;