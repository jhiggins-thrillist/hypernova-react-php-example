// Overrides node's require()
require('babel-register');

// Transpiles code using require()
require('babel-core').transform('code', {
    presets: ['es2015', 'react'],
    compact: true,
    plugins: ['transform-runtime']
});

const hook = require('css-modules-require-hook');
hook({
    generateScopedName: '[name]__[local]___[hash:base64:5]',
});

// require('./templates/VideoPage.js');

// Load hypernova webserver
const hypernova = require('hypernova/server');

hypernova({
    devMode: true,

    getComponent(name) {
        console.log('getting component', name);
        // Security issue, make sure only loads files
        return require('./src/templates/' + name).default;
    },

    port: 3030,

});
