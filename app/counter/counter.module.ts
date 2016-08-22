import {NgModule} from '@angular/core';

// Modules
import {SharedModule} from '../shared/shared.module';

// Components
import {CounterComponent} from './counter.component';

import {routing} from './counter.routing';

@NgModule({
  imports: [SharedModule, routing],
  declarations: [CounterComponent]
})
export default class CounterModule { }
