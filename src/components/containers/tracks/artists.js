/**
 * @desc Library's
 */
import React, { Component } from 'react';

/**
 * @desc
 */
import './artists.scss';

/**
 * @desc
 */
class Artists extends Component{

    /* @ */
    constructor(props){

        /* @ */
        super(props);

        /* @ */
        this.state = {
            artists : props.data
        };

    }

    /**
     * @desc
     */
    addArtist(){

    }

    /**
     * @desc
     */
    render(){

        /* @ */
        let { artists } = this.state;

        /* @ */
        return (
            <section data-role="artists">

                { /* @ */ }
                <div data-role="header">
                    <i className="icon icon-user"></i>
                    ARTISTAS
                    <button onClick={ () => this.addArtist() } />
                </div>

                { /* @ */ }
                <div data-role="search">
                    <input type="search" placeholder="Ej: Ac/Dc" />
                </div>

                { /* @ */ }
                <div data-role="list">
                    {
                        artists.length > 0 && artists.map( (artist, key) => {
                            return <Artist profile={ artist } key={ key } />;
                        })
                    }
                    {
                        artists.length === 0 && <output>No hay artistas cargados.</output>
                    }

                </div>

            </section>
        );

    }

}

export default Artists;