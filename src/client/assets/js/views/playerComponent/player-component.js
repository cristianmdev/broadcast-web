/*
 * @desc Import React
 */
import React, {Component}       from 'react';
import Store                    from '../../store';
/*
* @desc Import all Components of player
*/
import Microphones  from './microphones/microphones';
import ListQueue    from './listQueue/list-queue';
/*import Spectre      from './Spectre';
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
            Mics        : {}
        };

    }

    componentWillMount(){
        
        //
        Store.subscribe(() => {
            this.setState({
                Mics: Store.getState().Mics
            })
        });
                
        
    }

    /* @ */
    render(){
        
        /* @ */
        return (<main id="playerComponent">
                <section id="playerMicrophones">
                    <Microphones />
                </section>
                <section>
                    <ListQueue />
                    {/*<Spectre />*/}
                </section>
                {/*<section>
                    <Artists />
                    <Albums />
                    <Songs />
                </section>*/}
            </main>
        );

    }

}

export default PlayerComponent;