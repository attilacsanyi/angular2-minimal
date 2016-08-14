import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {NgModule} from '@angular/core';

// Modules
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdButtonModule} from '@angular2-material/button';
import {MdIconModule} from '@angular2-material/icon';
import {CounterModule} from './counter/counter.module';
import {HomeModule} from './home/home.module';

// Components
import {AppComponent} from './app.component';
import {StoreLogMonitorComponent} from '@ngrx/store-log-monitor';

// Providers
import {STORE_PROVIDERS} from './core/states';

import {routing} from './app.routing';

@NgModule({
    imports: [
        // Angular
        BrowserModule, HttpModule,
        // Material
        MdToolbarModule, MdButtonModule, MdIconModule,
        HomeModule, CounterModule,
        routing,
    ],
    declarations: [
        AppComponent,
        StoreLogMonitorComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        STORE_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
