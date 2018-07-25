/*eslint no-undef: 0 */

import { join } from "path";

export default {
    entry: "./src/index",
    output: {
        path: join(__dirname, "dist"),
        libraryTarget: "umd",
        library: "htmlToFormattedText"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
