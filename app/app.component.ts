import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Hello Angular 2 !';
  }
}
