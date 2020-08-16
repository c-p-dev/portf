const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
    /* ... */
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/_style.scss";`
            }
        }
    },

    chainWebpack: () => {
        [
            {
                test: /\.(png|jpe?g|gif|svg|pdf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            },
            new GoogleFontsPlugin({
                fonts: [
                    { family: "Open Sans" },
                    { family: "Questrial" },
                    { family: "Roboto" },
                    { family: "Patua One" },
                    { family: "Quicksand" }
                ]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: path.resolve(__dirname, "./assets"), to: "dest" },
                    { from: "other", to: "public" }
                ]
            }),


        ];
    }
};
