import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        MatButtonModule,
        MatIconModule,
        RouterModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        RouterModule
    ]
})
export class PageSharedModule { }
