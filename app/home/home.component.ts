import { Component, OnInit } from '@angular/core';

import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    directives: [
        MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES
    ]
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}