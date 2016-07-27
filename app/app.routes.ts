import {provideRouter, RouterConfig} from '@angular/router';
import {CounterComponent} from './counter/counter.component';
import {HomeComponent} from './home/home.component';

const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    { path: 'home', component: HomeComponent },
];

export const appRouterProviders = [
    provideRouter(routes)
];
