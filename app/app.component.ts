import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {StoreLogMonitorComponent} from '@ngrx/store-log-monitor';

import {CounterComponent} from './counter/counter.component';

import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

// Providers
import {STORE_PROVIDERS} from './core/states';

@Component({
  moduleId: module.id,
  selector: 'my-app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    CounterComponent,
    StoreLogMonitorComponent,
    MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES,
    MdIcon
  ],
  providers: [
    HTTP_PROVIDERS,
    STORE_PROVIDERS,
    MdIconRegistry
  ]
})
export class AppComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Hello Angular 2 !';
  }
}
