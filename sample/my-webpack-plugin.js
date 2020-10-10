const { compilation } = require("webpack");

class MyWebpackPlugin {
    apply(compiler) {
        // compiler.hooks.done.tap('My Plugin', stats => {
        //     console.log('MyPlugin: done');
        // })

        compiler.plugin('emit', (compilation, callback) => {
            const source = compilation.assets['main.js'].source();
            // console.log(source);
            compilation.assets['main.js'].source = () => {
                const banner = [
                    '/**', 
                    ' * 테스트',
                    ' */'
                ].join('\n');
                return `${banner}\n\n${source}`
            }
            callback();
        })
    }
}

module.exports = MyWebpackPlugin;