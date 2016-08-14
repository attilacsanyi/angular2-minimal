import {NgModule} from '@angular/core';

// Modules
import {BrowserModule}  from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

// Modules
import {MdCardModule} from '@angular2-material/card';
import {MdButtonModule} from '@angular2-material/button';
import {MdInputModule} from '@angular2-material/input';
import {MdIconModule} from '@angular2-material/icon';

// Components
import {CounterComponent} from './counter.component';

import {routing} from './counter.routing';

@NgModule({
  imports: [
    // Angular
    BrowserModule, RouterModule, FormsModule,
    // Material
    MdCardModule, MdButtonModule, MdInputModule, MdIconModule,
    routing
  ],
  declarations: [
    CounterComponent
  ]
})
export default class CounterModule { }
