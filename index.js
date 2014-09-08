module.exports = {
  name: 'Ember CLI Simple Auth torii',

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth.amd.js', {
      exports: {
        'simple-auth-torii/authenticators/torii': ['default'],
        'simple-auth-torii/initializer':          ['default']
      }
    });
  }
}
