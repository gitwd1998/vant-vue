const url = require('url');
const queryString = require('querystring');
const path = require('path');


process.env.VUE_APP_VERSION = require('./package.json').version
module.exports = {
    // 部署应用包时的基本 URL，用法和 webpack 本身的 output.publicPath 一致，这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径。
    publicPath: '/',//Type: String, Default: "/"

    // 构建输出目录 npm run build，当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为 “vue-cli-service build --no-clean”)。
    outputDir: 'dist',//Type: String, Default: "dist"

    // 静态资源目录（js css img fonts)，注意：从生成的资源覆写 filename 或 chunkFilename 时，assetsDir 会被忽略。
    assetsDir: 'assets',//Type: String,Default: ""

    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath: 'index.html',//Type: String, Default: "index.html"

    // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
    filenameHashing: true,//Type: Boolean, Default: true

    // 是否开启 eslint 保存检测，有效值（ true || false || 'error' ）
    lintOnSave: true,//Type: Boolean, Default: true

    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: false,//Type: Boolean, Default: false

    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    transpileDependencies: [],//Type: Array, Default: []

    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: true,//Type: Boolean, Default: true

    // 在 multi-page（多页）模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。
    pages: undefined,//Type: Object, Default: undefined

    // 设置生成的 HTML 中<link rel = "stylesheet"> 和<script> 标签的 crossorigin 属性。
    crossorigin: undefined,//Type: Object, Default: undefined

    // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
    integrity: false,//Type: Boolean, default: false

    // Webpack相关配置 Type: Object||Function
    // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
    // 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },

    // Webpack相关配置 Type: Function
    chainWebpack: config => {
        // 会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
    },

    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin 将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
        extract: false,//Type: boolean || Object, Default: 生产环境下是 true，开发环境下是 false
        // 开启 CSS source maps 设置为 true 之后可能会影响构建的性能。
        sourceMap: false,//Type: boolean, Default: false
        // css预设器配置项
        // 启用 CSS modules for all css / pre-processor files，默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 true 后你就可以去掉文件名中的.module 并将所有的 *.(css | scss | sass | less | styl(us) ?) 文件视为 CSS Modules 模块。
        // module: true,//css.module被废弃了，用css.requireModuleExtension替代
        requireModuleExtension: true,//Type: Boolean, Default: false
        // 向 CSS 相关的 loader 传递选项 Type: Object, Default: {}
        // loaderOptions: {
        //     css: {
        //         // 这里的选项会传递给 css-loader
        //     },
        //     postcss: {
        //         // 这里的选项会传递给 postcss-loader
        //     },
        //     sass: {
        //         // 这里的选项会传递给 sass-loader
        //     },
        //     less: {
        //         // 这里的选项会传递给 less-loader
        //     },
        //     stylus: {
        //         // 这里的选项会传递给 stylus-loader
        //     }
        // },
    },

    // webpack-dev-server相关配置 Type: Object
    devServer: {
        // 使用 npm run serve 之后是否自动在浏览器中打开项目
        open: true,
        // 域名
        host: '0.0.0.0',
        // 端口号
        port: '8888',
        // 当为true时浏览器会给出一些警告
        https: false,
        // 热更新
        hot: true,
        // 是否全屏显示编译的警告或错误信息
        overlay: {
            warnings: true,
            errors: true,
        },
        // 如果前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。Type: Object || String
        proxy: {
            '/api': {
                // 接口域名
                target: process.env.VUE_APP_BAES_URL,
                // 是否跨域
                changeOrigin: true,
                ws: true,
                // 重写路径 
                pathRewrite: {
                    "^/api": "/"
                }
            },
        },
        before: app => {
            app.get('/api', (req, res) => {
                console.log('哈哈哈哈哈', req, res)
                // res.json(goods);
            });
        },
    },

    pwa: {
        // PWA 插件的选项
    },

    pluginOptions: {
        // 第三方插件配置
    }
}