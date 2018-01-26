// const webpack = require('webpack')
const glob = require('glob') // global css
const path = require('path') // global css
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
// const workboxPlugin = require('workbox-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const next = '.next/dist'
// TODO: change into workbox-webpack-plugin
const { ANALYZE } = process.env

module.exports = {
  webpack: (config) => {

    /* exclude server only package.
    config.plugins.push(
      new webpack.IgnorePlugin(/koa/)
    )
    */
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
      ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
      ,
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    config.plugins.push(
      /*
      new workboxPlugin({
        verbose: true,
        globDirectory: next,
        globPatterns: ['*'],
        // globPatterns: ['./!**!/!*.{html,js,css}'],
        swDest: path.join(next, 'service-worker.js'),
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: new RegExp('http://localhost'),
            handler: 'staleWhileRevalidate'
          }
        ]
      })
      */
      new SWPrecacheWebpackPlugin({
       verbose: true,
       staticFileGlobsIgnorePatterns: [/\.next\//],
       runtimeCaching: [
         {
           // handler: 'fastest',
           handler: 'networkFirst',
           urlPattern: /^https?.*/
         }
       ]
      })
    )
    return config
  }
}
