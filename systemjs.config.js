/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'app', // 'dist',

    '@angular': 'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs': 'node_modules/rxjs',

    'moment': 'node_modules/moment/moment.js',

    // https://github.com/ngrx/devtools
    //'@ngrx/devtools': 'node_modules/@ngrx/devtools',

    // https://github.com/ngrx/store
    //'@ngrx/core': 'node_modules/@ngrx/core',
    //'@ngrx/store': 'node_modules/@ngrx/store',

    '@ngrx': 'node_modules/@ngrx',

    // https://medium.com/front-end-hacking/getting-started-using-angular-material-2-in-an-angular-2-angular-cli-application-bbeecdf6bfe2#.dg3n1qkzi
    '@angular2-material': 'node_modules/@angular2-material'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },

    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },

    '@ngrx/core': { main: 'index.js', defaultExtension: 'js' },
    '@ngrx/store': { main: 'index.js', defaultExtension: 'js' },
    '@ngrx/store-devtools': { main: 'index.js', defaultExtension: 'js' },
    '@ngrx/store-log-monitor': { main: 'index.js', defaultExtension: 'js' }
  };

  // put the names of any of your Material components here
  var materialPkgs = [
    'core',
    'button',
    'card',
    'icon',
    'toolbar',
    'input',
  ];

  materialPkgs.forEach((pkg) => {
    packages[`@angular2-material/${pkg}`] = { main: `${pkg}.js` };
  });

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  // No umd for router yet
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);
})(this);
