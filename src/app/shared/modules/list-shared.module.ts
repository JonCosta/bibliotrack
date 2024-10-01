import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ListItemActionsComponent } from '../components/list-item-actions/list-item-actions.component';

@NgModule({
    declarations: [],
    imports: [
        MatTableModule,
        DatePipe,
        MatButtonModule,
        RouterModule,
        ListItemActionsComponent
    ],
    exports: [
        MatTableModule,
        DatePipe,
        RouterModule,
        ListItemActionsComponent

    ]
})
export class ListSharedModule { }
