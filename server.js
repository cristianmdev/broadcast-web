/**
 * @desc Configurations
 */
import Config_Server    from './src/Config';
import Config_Webpack   from './webpack.config';


/**
 * @desc Import Package's
 */
import Fs                       from 'fs';
import Express                  from 'express';
import Path                     from 'path';
import Webpack                  from 'webpack';
import WebpackDevMiddleware     from 'webpack-dev-middleware';
import HistoryFallBack          from 'connect-history-api-fallback';
import WebpackHotMiddleware     from "webpack-hot-middleware";

/**
 * @desc
 */
var Compiler = Webpack(Config_Webpack);

/**
 * @desc
 */
const App = Express();

/**
 * @desc
 */
App.use(HistoryFallBack());
App.use(WebpackDevMiddleware(Webpack(Config_Webpack)));
App.use(WebpackHotMiddleware(Compiler));


/**
 * @desc Static path's
*/
const PUBLIC           =     {
    '/assets' : '/src/client/assets',
    '/dist'   : '/dist' 
};


/**
 * @desc each all paths public's & assign to server.
 */
for(let pathPublic in PUBLIC){

    /* @ */
    let pathPrivate = PUBLIC[pathPublic];

    /* @ */
    App.use(pathPublic,Express.static(Path.resolve(__dirname, pathPrivate)));

}

/**
 * @desc
 */
App.get('/*', (req,res) => {

    // 
    let path = Path.join(__dirname,'dist');

    /**
     * @desc Response
     */
    Fs.readFile(`${path}/index.html`,(err, data) => {
        res.statusCode = 200;
        res.setHeader( 'content-type', 'text/html' );
        res.send(data);
        res.end();
    });

});


/**
 * @desc Listen
 */
App.listen(Config_Server.port, () => {

    /* @ */
    let base_url = `${Config_Server.schema}://${Config_Server.domain}:${Config_Server.port}`;

    /* */
    console.log(`
        Paths Public's                 
        ===================
        ${base_url}/assets
        ${base_url}/dist

        ***
        LOG
        ***

        *
        * 
        * 
        Server running in: ${base_url}`);

});