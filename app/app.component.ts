import {Component, OnInit} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  selector: 'my-app-component',
  templateUrl: 'app/app.component.html',
  providers: [
    ROUTER_PROVIDERS, HTTP_PROVIDERS
  ]
})
export class AppComponent implements OnInit {
  
  title: string;
  
  constructor() { }

  ngOnInit() {
    this.title = 'Hello Angular 2 !';
  }
}