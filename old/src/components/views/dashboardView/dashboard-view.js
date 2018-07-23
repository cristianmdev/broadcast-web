/*
 * @desc Import React
 */
import React, {Component}       from 'react';
import Store                    from '../../store';
/*
* @desc Import all Components of player
*/
import Microphones  from '../../components/microphones/microphones';
import ListQueue    from '../../components/listQueue/list-queue';
/*import Spectre      from './Spectre';
import Artists      from './Artist';
import Albums       from './Albums';
import Songs        from './Songs';*/

/*
 * @desc
 */
class DashboardView extends Component{

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

    /**
     * @desc Previo a construir el componente.
     */
    componentWillMount(){
        
        // Actializaciòn del store.
        Store.subscribe(() => {
            this.setState({
                Mics: Store.getState().Mics
            })
        });
                
    }


    
    /* @ */
    render(){
        
        /* @ */
        return (
            <widget type="player">
                <Microphones />
                <ListQueue />
                {/*<section>
                    <Artists />
                    <Albums />
                    <Songs />
                </section>*/}
            </widget>
        );

    }

}

export default DashboardView;