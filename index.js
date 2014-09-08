module.exports = {
  name: 'Ember CLI Simple Auth torii',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth.amd.js', {
      exports: {
        'simple-auth-torii': [
          'authenticators/torii',
          'initializer'
        ]
      }
    });
  }
}
