import {ModuleWithProviders}  from '@angular/core';
import {RouterModule} from '@angular/router';

export const routing: ModuleWithProviders = RouterModule.forRoot([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'counter', loadChildren: 'app/counter/counter.module' },
]);
