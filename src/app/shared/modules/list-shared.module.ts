import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ListItemActionsComponent } from '../components/list-item-actions/list-item-actions.component';
import { EnumPipe } from '../pipes/enum.pipe';

@NgModule({
    declarations: [],
    imports: [
        DatePipe,
        EnumPipe,
        ListItemActionsComponent,
        MatButtonModule,
        MatCardModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        RouterModule
    ],
    exports: [
        DatePipe,
        EnumPipe,
        ListItemActionsComponent,
        MatButtonModule,
        MatCardModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        RouterModule
    ]
})
export class ListSharedModule { }
