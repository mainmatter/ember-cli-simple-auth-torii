module.exports = {
  name: 'Ember CLI Simple Auth torii',

  included: function(app) {
    app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth-torii.amd.js', {
      exports: {
        'simple-auth-torii/authenticators/torii': ['default'],
        'simple-auth-torii/initializer':          ['default']
      }
    });
  }
}
