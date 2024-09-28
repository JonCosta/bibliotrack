import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        MatTableModule,
        DatePipe,
        MatMenuModule,
        MatButtonModule,
        RouterModule,
        MatIconModule
    ],
    exports: [
        MatTableModule,
        DatePipe,
        MatMenuModule,
        MatButtonModule,
        RouterModule,
        MatIconModule
    ]
})
export class ListSharedModule { }
