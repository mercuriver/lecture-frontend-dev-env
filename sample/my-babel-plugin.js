module.exports = function myBabelPlugin() {
    return {
        visitor: {
            // Identifier(path) {
            //     const name = path.node.name;
            //     console.log('Identifier() name:', name);
            //     path.node.name = name.split('').reverse().join('');
            // }
            VariableDeclaration(path) {
                const kind = path.node.kind;
                console.log('VariableDeclaration() kind:', kind);

                if (kind === 'const') {
                    path.node.kind = 'var';
                }
            }
        },
    };
}