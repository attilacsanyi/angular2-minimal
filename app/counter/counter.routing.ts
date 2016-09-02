import {ModuleWithProviders}  from '@angular/core';
import {RouterModule} from '@angular/router';

import {CounterComponent} from './counter.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: CounterComponent }
]);
