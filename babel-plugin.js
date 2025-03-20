const fs = require('fs');
const babelCore = require('@babel/core');

function plugin() {
    return {
        name: 'babel',
        setup(build) {
            build.onLoad({ filter: /\.(js|ts)$/ }, async (args) => {
                const source = await fs.promises.readFile(args.path, 'utf8');
                const { code } = babelCore.transformSync(source, {
                    filename: args.path,
                    presets: [ '@babel/preset-env', '@babel/preset-typescript' ],
                });
                return { contents: code, loader: 'js' };
            });
        },
    }
}

module.exports = { plugin };
