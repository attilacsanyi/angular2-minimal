import { Component, OnInit } from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

declare var __moduleName: string;
@Component({
    moduleId: __moduleName,
    selector: 'my-test-component',
    template: `<h1>Hello Angular2</h1>`,
    providers: [
        ROUTER_PROVIDERS, HTTP_PROVIDERS
    ]
})
export class TestComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}