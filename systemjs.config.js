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

    '@ngrx': 'node_modules/@ngrx',

    '@angular2-material': 'node_modules/@angular2-material'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },

    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };

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
    'radio',
    'menu',
    'button',
    'button-toggle',
    'list',
    'sidenav',
    'checkbox',
    'toolbar',
    'slider',
    'input',
    'grid-list',
    'icon',
    'tabs',
    'progress-bar',
    'card',
    'progress-circle',
    'slide-toggle',
    'tooltip',
  ].forEach((pkg) => {
    packages[`@angular2-material/${pkg}`] = { main: `${pkg}.js`, defaultExtension: 'js' };
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
