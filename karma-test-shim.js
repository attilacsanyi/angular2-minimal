// /*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () {
};

function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {
  return /\.spec\.js$/.test(path);
}

function isBuiltFile(path) {
  var builtPath = '/base/app/';
  return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}

var allSpecFiles = Object.keys(window.__karma__.files)
  .filter(isSpecFile)
  .filter(isBuiltFile);

// Load our SystemJS configuration.

var packages = {
  'app': { main: 'main.js', defaultExtension: 'js' },
  'rxjs': { defaultExtension: 'js' },
};

// Add angular packages to SystemJS config
[
  'common',
  'compiler',
  'core',
  'forms',
  'http',
  'platform-browser',
  'platform-browser-dynamic',
  'router',
  'router-deprecated',
  'upgrade'
].forEach((pkg) => {
  packages[`@angular/${pkg}`] = { main: 'index.js', defaultExtension: 'js' };
});

// Add @ngrx packages to SystemJS config
[
  'core',
  'store',
  'store-devtools',
  'store-log-monitor',
].forEach((pkg) => {
  packages[`@ngrx/${pkg}`] = { main: 'index.js', defaultExtension: 'js' };
});

// Add @angular2-material packages to SystemJS config
[
  'core',
  'button',
  'card',
  'icon',
  'toolbar',
  'input',
].forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = { main: `${pkg}.js`, defaultExtension: 'js' };
});

System.config({
  baseURL: '/base',
  map: {
    'app': 'app',

    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',

    '@ngrx': '/base/node_modules/@ngrx',

    '@angular2-material': '/base/node_modules/@angular2-material',
  },
  packages: packages
});

Promise.all([
  System.import('@angular/core/testing'),
  System.import('@angular/platform-browser-dynamic/testing')
]).then(function (providers) {
  var testing = providers[0];
  var testingBrowser = providers[1];

  testing.setBaseTestProviders(
    testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

}).then(function () {
  // Finally, load all spec files.
  // This will run the tests directly.
  return Promise.all(
    allSpecFiles.map(function (moduleName) {
      return System.import(moduleName);
    }));
}).then(__karma__.start, __karma__.error);