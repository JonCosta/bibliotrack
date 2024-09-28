import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        MatButtonModule,
        RouterModule
    ],
    exports: [
        MatButtonModule,
        RouterModule
    ]
})
export class PageSharedModule { }
