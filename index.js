// Overrides node's require()
require('babel-register');

require('./templates/VideoPage.js');

// Transpiles code using require()
require('babel-core').transform('code', {
  presets: ['react']
});

// Load hypernova webserver
const hypernova = require('hypernova/server');

hypernova({
    devMode: true,

    getComponent(name) {

        // Security issue, make sure only loads files
        return require('./templates/' + name + '.js');
    },

    port: 3030,

});
