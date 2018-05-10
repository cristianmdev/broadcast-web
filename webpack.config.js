/**
 * @desc
 */
import Path                     from 'path';
import Webpack                  from 'webpack';
import WebpackHTMLPlugin        from 'html-webpack-plugin';
import WebpackLiveReload        from 'webpack-livereload-plugin';

/**
 * @desc
 */
const PATH_CLIENT   = Path.join(__dirname,`/src/client`);
const PATH_DIST     = Path.join(__dirname,`dist`);

/**
 * @desc 
*/
export default {

    mode : "development",

    /**
     * @desc Entry file of develepment 
     */
    entry : Path.join(PATH_CLIENT,"/assets/js/app.js"),

    /**
     * @desc Output of react build in development to dist.
     */
    output: {
        path            : Path.join(PATH_DIST,"/assets/js/"),
        filename        : 'bundle.js'
    },

    /**
     * @desc
     */
    module : {

        rules : [
            {/* @ ES6+ */
                use             : 'babel-loader',
                test            : /\.js$/,
                exclude         : /node_modules/
            },
            {/* @ Css */
                use             : ['style-loader','css-loader'],
                test            : /\.css$/,
                exclude         : /node_modules/
            },
            {/* @ Super Css */       
                test            : /\.scss$/,
                use             : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader',
                        options: {sourceMap : true}
                    },
                    {
                        loader : 'sass-loader',
                        options: {sourceMap : true}
                    }
                ],
            },
            { /* @ Html */
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]

    },


    /**
     * @desc
     */
    plugins : [
        new WebpackHTMLPlugin({
            template : Path.join(PATH_DIST,"index.html")
        }),
        new WebpackLiveReload()
    ],

    watch: true

};