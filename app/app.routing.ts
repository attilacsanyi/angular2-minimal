import {RouterModule} from '@angular/router';

export const routing = RouterModule.forRoot([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'counter', loadChildren: 'app/counter/counter.module' },
]);
