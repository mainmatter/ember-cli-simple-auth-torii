module.exports = {
  name: 'ember-cli-simple-auth-oauth2',

  included: function(app) {
    this._super.included(app);

    this.app.import('bower_components/ember-simple-auth/simple-auth-torii.amd.js', {
      exports: {
        'simple-auth-torii/authenticators/torii': ['default'],
        'simple-auth-torii/initializer':          ['default']
      }
    });
  }
}
