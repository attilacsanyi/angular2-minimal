import {NgModule} from '@angular/core';

// Modules
import {SharedModule} from '../shared/shared.module';

// Components
import {HomeComponent} from './home.component';

import {routing} from './home.routing';

@NgModule({
    imports: [SharedModule, routing],
    declarations: [HomeComponent]
})
export class HomeModule { }
