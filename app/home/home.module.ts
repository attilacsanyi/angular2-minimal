import {NgModule} from '@angular/core';

// Modules
import {MdCardModule} from '@angular2-material/card';
import {MdListModule} from '@angular2-material/list';

// Components
import {HomeComponent} from './home.component';

import {routing} from './home.routing';

@NgModule({
    imports: [
        // Material
        MdCardModule, MdListModule,
        routing,
    ],
    declarations: [
        HomeComponent,
    ]
})
export class HomeModule { }
