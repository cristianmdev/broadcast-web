/**
 * @desc Library's
 */
import React, { Component } from 'react';

/**
 * @desc
 */
import './albums.scss';

/**
 * @desc
 */
class Albums extends Component{

    /* @ */
    constructor(props){

        /* @ */
        super(props);

        /* @ */
        this.state = {
            albums : props.data
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
        let { albums } = this.state;

        /* @ */
        return (
            <section data-role="albums">

                { /* @ */ }
                <div data-role="header">
                    <i className="fas fa-compact-disc"></i>
                    ALBUMS
                    <button onClick={ () => this.addAlbums() } >
                        <i className="fas fa-plus-circle" />
                    </button>
                </div>

                { /* @ */ }
                <div data-role="search">
                    <input type="search" placeholder="Ej: Septimo Dia, Influencia." />
                </div>

                { /* @ */ }
                <div data-role="list">
                    {
                        albums.length > 0 && albums.map( (artist, key) => {
                            return <Artist profile={ artist } key={ key } />;
                        })
                    }
                    {
                        albums.length === 0 && <output>No hay albums cargados.</output>
                    }

                </div>

            </section>
        );

    }

}

export default Albums;