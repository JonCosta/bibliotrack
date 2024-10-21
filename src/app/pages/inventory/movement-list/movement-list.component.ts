import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as mockData from "../../../../assets/mock/movements.json";
import Movement from '../../../core/models/movement';
import { ListSharedModule } from '../../../shared/modules/list-shared.module';

@Component({
  selector: 'app-movement-list',
  standalone: true,
  imports: [
    ListSharedModule
  ],
  templateUrl: './movement-list.component.html',
  styleUrl: './movement-list.component.scss'
})
export class MovementListComponent {

    displayedColumnList: string[] = ['movementDate', 'type', 'quantity', 'book_name', 'createdBy_name', 'actions'];
    isLoading: boolean = false;
    movementList: Movement[] = [];
    tableDataSource = new MatTableDataSource<Movement>([]);

    @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
    @ViewChild(MatSort) sort: MatSort = new MatSort();

    ngOnInit() {
        this.loadMovementListFromMock();
    }

    ngAfterViewInit() {
        this.tableDataSource.paginator = this.paginator;
        this.tableDataSource.sort = this.sort;
    }

    private loadMovementListFromMock() {
        if (!mockData) return;
        this.isLoading = true;
        let tempBookList: Movement[] = [];
        mockData.movements.forEach(movement => {
            let newMovement = new Movement(movement);
            tempBookList.push(newMovement);
        });
        
        this.movementList = tempBookList;
        this.tableDataSource = new MatTableDataSource(this.movementList);
        this.isLoading = false;
    }

}