import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        RouterModule
    ],
    exports: [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        RouterModule
    ]
})
export class PageSharedModule { }
