import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as mockData from "../../../../assets/mock/publishers.json";
import Publisher from '../../../core/models/publisher';
import { DialogService } from '../../../core/services/dialog.service';
import { SnackbarService } from '../../../core/services/snackbar.service';
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

    publisherList: Publisher[] = [];
    displayedColumnList: string[] = ['name', 'createdAt', 'updatedAt', 'actions'];
    isLoading: boolean = false;
    tableDataSource = new MatTableDataSource<Publisher>([]);

    @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
    @ViewChild(MatSort) sort: MatSort = new MatSort();

    constructor(
        private dialogService: DialogService,
        private snackbarService: SnackbarService
    ) { }

    ngOnInit() {
        this.loadListFromMock();
    }

    ngAfterViewInit() {
        this.tableDataSource.paginator = this.paginator;
        this.tableDataSource.sort = this.sort;
    }

    handleClickEdit(id: number) {

    }

    confirmDeletePublisher(id: number) {
        const dialogRef = this.dialogService.createConfirmationDialog(
            "Delete Publisher",
            "Are you sure you wish to delete this publisher?"
        );

        dialogRef.afterClosed().subscribe(isConfirmed => {
            if (isConfirmed) {
                this.deletePublisher(id)
            }
        });
    }

    private loadListFromMock() {
        if (!mockData) return;
        this.isLoading = true;
        this.publisherList = [];
        mockData.publishers.forEach(mockPublisher => {
            let publisher = new Publisher(mockPublisher);
            this.publisherList.push(publisher);
        });
        sortObjectsByName(this.publisherList);
        this.tableDataSource = new MatTableDataSource(this.publisherList);
        this.isLoading = false;
    }

    private deletePublisher(id: number) {
        this.snackbarService.showLoadingSnackbar("Deleting publisher...");
        setTimeout(() => {
            this.publisherList = this.publisherList.filter(publisher => publisher.id !== id);
            this.tableDataSource = new MatTableDataSource(this.publisherList);
            this.snackbarService.showSuccessSnackbar("The publisher has been deleted");
        }, 3000);
        
    }

}
