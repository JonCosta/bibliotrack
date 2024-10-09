import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as mockData from "../../../../assets/mock/publishers.json";
import Publisher from '../../../core/models/publisher';
import { ListSharedModule } from '../../../shared/modules/list-shared.module';
import { sortObjectsByName } from '../../../shared/utils/utils';

@Component({
    selector: 'app-publisher-list',
    standalone: true,
    imports: [
        ListSharedModule
    ],
    templateUrl: './publisher-list.component.html',
    styleUrl: './publisher-list.component.scss'
})
export class PublisherListComponent {

    displayedColumnList: string[] = ['name', 'createdAt', 'updatedAt', 'actions'];
    isLoading: boolean = false;
    tableDataSource = new MatTableDataSource<Publisher>([]);

    @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
    @ViewChild(MatSort) sort: MatSort = new MatSort();

    constructor() { }

    ngOnInit() {
        this.loadListFromMock();
    }

    ngAfterViewInit() {
        this.tableDataSource.paginator = this.paginator;
        this.tableDataSource.sort = this.sort;
    }

    handleClickEdit(id: number) {
        console.log("Edit clicked", id);

    }

    handleClickDelete(id: number) {
        console.log("Delete clicked", id);

    }

    private loadListFromMock() {
        if (!mockData) return;
        this.isLoading = true;
        let publisherList: Publisher[] = [];
        mockData.publishers.forEach(mockPublisher => {
            let publisher = new Publisher(mockPublisher);
            publisherList.push(publisher);
        });
        sortObjectsByName(publisherList);
        this.tableDataSource = new MatTableDataSource(publisherList);
        this.isLoading = false;
    }

}
