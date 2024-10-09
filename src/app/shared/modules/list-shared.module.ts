import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ListItemActionsComponent } from '../components/list-item-actions/list-item-actions.component';

@NgModule({
    declarations: [],
    imports: [
        DatePipe,
        ListItemActionsComponent,
        MatButtonModule,
        MatCardModule,
        MatPaginatorModule,
        MatTableModule,
        RouterModule
    ],
    exports: [
        DatePipe,
        ListItemActionsComponent,
        MatButtonModule,
        MatCardModule,
        MatPaginatorModule,
        MatTableModule,
        RouterModule
    ]
})
export class ListSharedModule { }
