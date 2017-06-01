// Overrides node's require()
require('babel-register');

// Transpiles code using require()
require('babel-core').transform('code', {
  presets: ['react', 'es2015']
});

// require('./templates/VideoPage.js');

// Load hypernova webserver
const hypernova = require('hypernova/server');

hypernova({
    devMode: true,

    getComponent(name) {
        console.log('getting component', name);
        // Security issue, make sure only loads files
        return require('./templates/VideoPage').default;
    },

    port: 3030,

});
