
import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

// Enable PROD mode
// enableProdMode();

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms()
]);