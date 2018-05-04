/*
 * @desc Import React
 */
import React, {Component}       from 'react';

/*
* @desc Import all Components of player
*/
import OnLive       from './onLive/on-live';
/*import Mics         from './Mics';
import ListQueue    from './ListQueue';
import Spectre      from './Spectre';
import Artists      from './Artist';
import Albums       from './Albums';
import Songs        from './Songs';*/

/*
 * @desc
 */
class PlayerComponent extends Component{

    /* @ */
    constructor(props){

        super(props);
        
        /* @ */
        this.state = {
            general     : {
                "status"    : "",
            },
            mics        : {}
        };

    }

    /* @ */
    render(){
        
        /* @ */
        return (<main id="playerComponent">
                <section>
                    <OnLive />
                </section>
                {/*<section>
                    <Mics />
                </section>
                <section>
                    <ListQueue />
                    <Spectre />
                </section>
                <section>
                    <Artists />
                    <Albums />
                    <Songs />
                </section>*/}
            </main>
        );

    }

}

export default PlayerComponent;