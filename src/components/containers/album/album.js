/**
 * @desc Library's
 */
import React, { Component } from 'react';

/**
 * @desc
 */
import 'album.scss';

/**
 * @desc
 */
const Album = ({ profile }) => {

    /* @ */
    let avatar = profile.picture ? profile.picture : 'default.png';

    /* @ */
    return (
        <div>

            { /* @ */ }
            <figure style={{backgroundImage: "url("+avatar+")"}} />

            { /* @ */ }
            <h1>{ profile.name }</h1>

        </div>
    );


}

export default Album;