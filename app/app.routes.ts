import {provideRouter, RouterConfig} from '@angular/router';
import {CounterComponent} from './counter/counter.component';

const routes: RouterConfig = [
    { path: '', redirectTo: 'counter', pathMatch: 'full' },
    { path: 'counter', component: CounterComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
