import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as mockData from "../../../../assets/mock/authors.json";
import Author from '../../../core/models/author';
import { DialogService } from '../../../core/services/dialog.service';
import { SnackbarService } from '../../../core/services/snackbar.service';
import { ListSharedModule } from '../../../shared/modules/list-shared.module';
import { sortObjectsByName } from '../../../shared/utils/utils';

@Component({
    selector: 'app-author-list',
    standalone: true,
    imports: [
        ListSharedModule
    ],
    templateUrl: './author-list.component.html',
    styleUrl: './author-list.component.scss'
})
export class AuthorListComponent {

    authorList: Author[] = [];
    displayedColumnList: string[] = ['name', 'createdAt', 'updatedAt', 'actions'];
    isLoading: boolean = false;
    tableDataSource = new MatTableDataSource<Author>([]);

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

    confirmDeleteAuthor(id: number) {
        const dialogRef = this.dialogService.createConfirmationDialog(
            "Delete Author",
            "Are you sure you wish to delete this author?"
        );

        dialogRef.afterClosed().subscribe(isConfirmed => {
            if (isConfirmed) {
                this.deleteAuthor(id)
            }
        });
    }

    private loadListFromMock() {
        if (!mockData) return;
        this.isLoading = true;
        this.authorList = [];
        mockData.authors.forEach(mockAuthor => {
            let author = new Author(mockAuthor);
            this.authorList.push(author);
        });
        sortObjectsByName(this.authorList);
        this.tableDataSource = new MatTableDataSource(this.authorList);
        this.isLoading = false;
    }

    private deleteAuthor(id: number) {
        this.snackbarService.showLoadingSnackbar("Deleting author...");
        setTimeout(() => {
            this.authorList = this.authorList.filter(author => author.id !== id);
            this.tableDataSource = new MatTableDataSource(this.authorList);
            this.snackbarService.showSuccessSnackbar("The author has been deleted");
        }, 3000);
    }

}
