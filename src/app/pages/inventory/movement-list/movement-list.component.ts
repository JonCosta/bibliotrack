import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';
import * as mockData from "../../../../assets/mock/movements.json";
import Movement from '../../../core/models/movement';
import MovementFilter from '../../../core/types/MovementFilter';
import { ListSharedModule } from '../../../shared/modules/list-shared.module';
import { MovementFiltersComponent } from '../movement-filters/movement-filters.component';

@Component({
    selector: 'app-movement-list',
    standalone: true,
    imports: [
        ListSharedModule,
        MovementFiltersComponent
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

    ngAfterViewInit() {
        this.configureTablePaginator();
        this.configureTableSort();
    }

    onFilterUpdated(selectedFilters: MovementFilter) {
        console.log(selectedFilters);
        this.loadMovementListFromMock(selectedFilters);
    }

    private loadMovementListFromMock(selectedFilters?: MovementFilter) {
        if (!mockData) return;
        this.isLoading = true;
        let tempBookList: Movement[] = [];
        mockData.movements.forEach(movement => {
            let newMovement = new Movement(movement);
            tempBookList.push(newMovement);
        });

        this.movementList = tempBookList;
        if (selectedFilters) {
            this.filterMovementsBySelectedOptions(selectedFilters);
        }

        this.tableDataSource = new MatTableDataSource(this.movementList);
        this.configureTablePaginator();
        this.configureTableSort();
        this.isLoading = false;
    }
    
    private filterMovementsBySelectedOptions(selectedFilters: MovementFilter) {
        if (selectedFilters.startDate !== null && selectedFilters.endDate !== null) {
            const startMoment = moment(selectedFilters.startDate);
            const endMoment = moment(selectedFilters.endDate);
            this.movementList = this.movementList.filter(movement => {
                const movementMoment = moment(movement.movementDate);
                return movementMoment.isBetween(startMoment, endMoment);
            });
        }

        if (selectedFilters.type) {
            this.movementList = this.movementList.filter(movement => movement.type == selectedFilters.type);
        }

        if (selectedFilters.book) {
            this.movementList = this.movementList.filter(movement => {
                return movement.book !== null && movement.book.id == selectedFilters.book
            });
        }
    }

    private configureTablePaginator() {
        this.tableDataSource.paginator = this.paginator;
    }

    private configureTableSort() {
        this.tableDataSource.sortingDataAccessor = (item, property) => {
            switch (property) {
                case 'book_name': return item.book?.name || '';
                case 'createdBy_name': return item.createdBy?.name || '';
                case 'movementDate': return moment(item.movementDate).format();
                case 'type': return item.type?.toString() || '';
                case 'quantity': return item.quantity || 0;
                default: return item.id || 0;
            }
        };
        this.tableDataSource.sort = this.sort;
    }

}
