// Generated using webpack-cli https://github.com/webpack/webpack-cli
const { merge }  = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

__webpack_base_uri__ = '';

const stylesHandler = 'style-loader';



const config = {
    entry: './src/index.js',
    output: {
        // path: path.resolve(__dirname, 'dist'),
        filename:'transformed.js',
        path: __dirname+'/build'
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
        //     favicon:'./public/favicon.ico',
        //     manifest:'./public/manifest.json',
            template: './public/index.html',

        //     filename:'index.html',
        //     inject:'body',
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            // {
            //     test: /\.css$/i,
            //     use: [stylesHandler,'css-loader'],
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
              }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

module.exports = ( webpackConfigEnv, argv ) => {
    if (isProduction) {
        config.mode = 'production';
        
    } else {
        config.mode = 'development';
    }

    const defaultConfig = singleSpaDefaults({
        orgName: "root",
        projectName: "app",
        webpackConfigEnv,
        argv,
    });
    
    return merge(defaultConfig,{
        module:config.module,
        resolve:config.resolve
    });
    // return merge(defaultConfig,{ 
    //     ...config
    // });
};
