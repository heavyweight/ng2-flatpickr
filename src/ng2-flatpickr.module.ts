import { NgModule } from '@angular/core';
import {Ng2FlatpickrDirective} from './ng2-flatpickr.directive';
import {Ng2FlatpickrComponent} from './ng2-flatpickr.component';


@NgModule({
    imports: [
    ],
    declarations: [
        Ng2FlatpickrDirective,
        Ng2FlatpickrComponent,
    ],
    exports: [
        Ng2FlatpickrComponent,
        Ng2FlatpickrDirective,
    ]
})



export class Ng2FlatpickrModule {}
