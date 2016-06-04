import {Component, OnInit} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

declare var __moduleName: string;
@Component({
  moduleId: __moduleName,
  selector: 'my-app-component',
  templateUrl: 'app.component.html',
  providers: [
    ROUTER_PROVIDERS, HTTP_PROVIDERS
  ]
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}