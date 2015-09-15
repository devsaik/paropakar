'use strict';



// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  //baseUrl: 'http://dry-brook-8546.herokuapp.com',
  baseUrl: 'http://localhost:9000',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  /*'e2e/registration.spec.js' ,*/
  specs: [ 'e2e/registration.spec.js', 'e2e/authentication.spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
