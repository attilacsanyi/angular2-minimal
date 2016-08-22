import {NgModule, ModuleWithProviders} from '@angular/core';

// Angular
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Material
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdButtonModule} from '@angular2-material/button';
import {MdIconModule} from '@angular2-material/icon';
import {MdCardModule} from '@angular2-material/card';
import {MdInputModule} from '@angular2-material/input';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [
        // Angular
        CommonModule, RouterModule, FormsModule, HttpModule,

        // Material
        MdToolbarModule, MdButtonModule, MdIconModule,
        MdCardModule, MdInputModule,
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
