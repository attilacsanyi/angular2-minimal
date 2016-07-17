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
    'ng2-bootstrap': 'node_modules/ng2-bootstrap/ng2-bootstrap',
    'moment': 'node_modules/moment/moment.js',
    
    // https://github.com/ngrx/devtools
    //'@ngrx/devtools': 'node_modules/@ngrx/devtools',
    
    // https://github.com/ngrx/store
    //'@ngrx/core': 'node_modules/@ngrx/core',
    //'@ngrx/store': 'node_modules/@ngrx/store',
    
    '@ngrx': 'node_modules/@ngrx'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'node_modules/ng2-bootstrap': { defaultExtension: 'js' },
    '@ngrx/core': { main: 'index.js', defaultExtension: 'js' },
    '@ngrx/store': { main: 'index.js', defaultExtension: 'js' },
    //'@ngrx/devtools': { main: 'dist/index.js', defaultExtension: 'js' }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
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
