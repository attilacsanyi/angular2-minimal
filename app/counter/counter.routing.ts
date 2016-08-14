import {RouterModule} from '@angular/router';

import {CounterComponent} from './counter.component';

export const routing = RouterModule.forChild([
  { path: 'counter', component: CounterComponent }
]);
