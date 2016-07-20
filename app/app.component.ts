import {Component, OnInit} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {StoreLogMonitorComponent} from '@ngrx/store-log-monitor';

import {CounterComponent} from './counter/counter.component';

// Providers
import {STORE_PROVIDERS} from './core/states';

@Component({
  moduleId: module.id,
  selector: 'my-app-component',
  templateUrl: 'app.component.html',
  directives: [
    CounterComponent,
    StoreLogMonitorComponent
  ],
  providers: [
    ROUTER_PROVIDERS, HTTP_PROVIDERS,
    STORE_PROVIDERS
  ]
})
export class AppComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Hello Angular 2 !';
  }
}