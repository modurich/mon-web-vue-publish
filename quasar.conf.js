/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v1.quasar.dev/quasar-cli/quasar-conf-js

const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = function(/* ctx */) {
    return {
    // https://v1.quasar.dev/quasar-cli/supporting-ts
        // supportTS: false,

        // https://v1.quasar.dev/quasar-cli/prefetch-feature
        // preFetch: true,

        // app boot file (/src/boot)
        // --> boot files are part of "main.js"
        // https://v1.quasar.dev/quasar-cli/boot-files
        boot: [
            'i18n',
            'lodash',
            { path: 'polyfill', server: false },
            { path: 'inlinesvg', server: true },
            'style',
            'component'
        ],

        // https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
        css: [
            'app.sass',
            'app_legacy.sass',
            'mbadge.css',
            'modu_layout.scss'
        ],

        // https://github.com/quasarframework/quasar/tree/dev/extras
        extras: [
            // 'ionicons-v4',
            // 'mdi-v5',
            // 'fontawesome-v6',
            // 'eva-icons',
            // 'themify',
            // 'line-awesome',
            // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

            'roboto-font', // optional, you are not bound to it
            'material-icons' // optional, you are not bound to it
        ],

        vendor: {
            disable: true
        },

        // Full list of options: https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
        build: {
            vueRouterMode: 'hash', // available values: 'hash', 'history'

            // transpile: false,

            // Add dependencies for transpiling with Babel (Array of string/regex)
            // (from node_modules, which are by default not transpiled).
            // Applies only if "transpile" is set to true.
            // transpileDependencies: [],

            // rtl: false, // https://v1.quasar.dev/options/rtl-support
            // preloadChunks: true,
            // showProgress: false,
            // gzip: true,
            // analyze: true,

            // Options below are automatically set depending on the env, set them if you want to override
            // extractCSS: false,
            extendWebpack(cfg) {
                cfg.node = false; // node의 모듈들을 브라우저로 polyfill 하게되면 번들 사이즈가 너무 커진다 / 근데 이게없으면 caver.js 모듈을 쓸수가없음;;
                cfg.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /node_modules/,
                    options: {
                        formatter: require('eslint').CLIEngine.getFormatter('stylish')
                        // emitError: true,
                        // emitWarning: false,
                        // quiet: false

                    }
                });

                cfg.module.rules.push({
                    test: /\.txt$/i,
                    use: 'raw-loader'
                });

                cfg.module.rules.push({
                    resourceQuery: /blockType=i18n/,
                    type: 'javascript/auto',
                    loader: '@intlify/vue-i18n-loader'
                });
            },
            // https://v1.quasar.dev/quasar-cli/handling-webpack
            // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
            chainWebpack(chain) {
                chain.plugin('eslint-webpack-plugin')
                    .use(ESLintPlugin, [{ extensions: ['js', 'vue'] }]);
            }
        },

        // Full list of options: https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
        devServer: {
            https: false,
            port: 8080,
            open: true // opens browser window automatically
        },

        // https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
        framework: {
            // iconSet: 'material-icons', // Quasar icon set
            lang: 'ko-kr', // Quasar language pack
            config: {
                screen: {
                    bodyClasses: true
                },
                notify: {
                    timeout: 2500,
                    classes: 'f-14-b-wt m-notify'
                }
            },

            // Possible values for "importStrategy":
            // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
            // * 'all'  - Manually specify what to import
            importStrategy: 'auto',

            // For special cases outside of where "auto" importStrategy can have an impact
            // (like functional components as one of the examples),
            // you can manually specify Quasar components/directives to be available everywhere:
            //
            // components: [],
            // directives: [],

            // Quasar plugins
            plugins: [
                'Meta',
                'Dialog',
                'Cookies',
                'Notify'
            ]
        },

        // animations: 'all', // --- includes all animations
        // https://v1.quasar.dev/options/animations
        animations: [],

        // https://v1.quasar.dev/quasar-cli/developing-ssr/configuring-ssr
        ssr: {
            pwa: false
        },

        // https://v1.quasar.dev/quasar-cli/developing-pwa/configuring-pwa
        pwa: {
            workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
            workboxOptions: {
                skipWaiting: true,
                clientsClaim: true,
                navigateFallbackDenylist: [
                    /\.[a-zA-Z0-9]{2,5}$/
                ],
                // navigateFallbackWhitelist: [],
                // navigateFallback: '/index.html',
                exclude: [
                    /\.br$/,
                    /\.gz$/,
                    /\.map$/,
                    /\.txt$/,
                    /\.png$/,
                    /\.jpg$/,
                    /\.jpeg$/,
                    /\.gif$/,
                    /\.woff$/,
                    /\.woff2$/,
                    /\.eot$/,
                    /\.otf$/,
                    /\.xml$/,
                    /^.*badge\/.*$/,
                    /^.*js\/trading_view\/.*$/
                ],
                maximumFileSizeToCacheInBytes: 3145728
            }, // only for GenerateSW
            manifest: {
                name: '몬스탁',
                short_name: '몬스탁',
                description: '몬스탁',
                display: 'standalone',
                orientation: 'portrait',
                background_color: '#ffffff',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'icons/icon-128x128.png',
                        sizes: '128x128',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-144x144.png',
                        sizes: '144x144',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-256x256.png',
                        sizes: '256x256',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-384x384.png',
                        sizes: '384x384',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/app_maskable_icon.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable'
                    }
                ]
            }
        },

        // Full list of options: https://v1.quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
        cordova: {
            // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
        },

        // Full list of options: https://v1.quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
        capacitor: {
            hideSplashscreen: true
        },

        // Full list of options: https://v1.quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
        electron: {
            bundler: 'packager', // 'packager' or 'builder'

            packager: {
                // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

                // OS X / Mac App Store
                // appBundleId: '',
                // appCategoryType: '',
                // osxSign: '',
                // protocol: 'myapp://path',

                // Windows only
                // win32metadata: { ... }
            },

            builder: {
                // https://www.electron.build/configuration/configuration

                appId: 'mon-vue-publish'
            },

            // More info: https://v1.quasar.dev/quasar-cli/developing-electron-apps/node-integration
            nodeIntegration: true,

            extendWebpack(/* cfg */) {
                // do something with Electron main process Webpack cfg
                // chainWebpack also available besides this extendWebpack
            }
        }
    };
};
