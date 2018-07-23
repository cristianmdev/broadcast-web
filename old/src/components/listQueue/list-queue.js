/*
 * @desc Import React
 */
import React, {Component}       from 'react';

/**
 * @desc
 */
import Button from '../../../widgets/button/button';

/**
 * @desc
 */
class ListQueue extends Component{

    constructor(props){
        super(props);

        this.state = {
            tracks : [{
                name: 'Hola mundo',
                duration: '0:30'
            }]
        };
    }


    render(){
        return (<div role="list-queue">
                    <h1>Cola de audio</h1>
                    <ul>
                    {
                        this.state.tracks.map((track,key) => {
                            return (<li key={key}>
                                <h1>{track.name}</h1>
                                <time>{track.duration}</time>
                                <nav>
                                    <Button onClick={() => this.trackRemove()} icon="trash" tooltip="Eliminar"></Button>
                                    <Button onClick={() => this.trackPlay()} icon="pencil" tooltip="Reproducir"></Button>
                                </nav>
                            </li>);   
                        })
                    }
                    </ul>
                </div>);
    }

}

export default ListQueue;