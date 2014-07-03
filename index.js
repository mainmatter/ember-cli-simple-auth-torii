var path = require('path');
var fs   = require('fs');

function EmberCLISimpleAuthTorii(project) {
  this.project = project;
  this.name    = 'Ember CLI Simple Auth Torii';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLISimpleAuthTorii.prototype.treeFor = function included(name) {
  var treePath = path.join('node_modules/ember-cli-simple-auth-torii', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLISimpleAuthTorii.prototype.included = function included(app) {
  this.app = app;

  this.app.import('vendor/ember-simple-auth/simple-auth-torii.amd.js', {
    exports: {
      'simple-auth-torii/authenticators/torii': ['default'],
      'simple-auth-torii/initializer':          ['default']
    }
  });
};

module.exports = EmberCLISimpleAuthTorii;
