import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as mockData from "../../../../assets/mock/books.json";
import Book from '../../../core/models/book';
import { DialogService } from '../../../core/services/dialog.service';
import { SnackbarService } from '../../../core/services/snackbar.service';
import { ListSharedModule } from '../../../shared/modules/list-shared.module';

@Component({
    selector: 'app-book-list',
    standalone: true,
    imports: [
        ListSharedModule
    ],
    templateUrl: './book-list.component.html',
    styleUrl: './book-list.component.scss'
})
export class BookListComponent {

    displayedColumnList: string[] = ['name', 'author', 'createdAt', 'updatedAt', 'actions'];
    isLoading: boolean = false;
    bookList: Book[] = [];
    tableDataSource = new MatTableDataSource<Book>([]);
    
    @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
    @ViewChild(MatSort) sort: MatSort = new MatSort();

    constructor(
        private dialogService: DialogService,
        private snackbarService: SnackbarService
    ) { }

    ngOnInit() {
        this.loadBookListFromMock();
    }

    ngAfterViewInit() {
        this.tableDataSource.paginator = this.paginator;
        this.tableDataSource.sort = this.sort;
    }

    confirmDeleteBook(bookId: number) {
        const dialogRef = this.dialogService.createConfirmationDialog(
            "Delete Book",
            "Are you sure you wish to delete this book?"
        );

        dialogRef.afterClosed().subscribe(isConfirmed => {
            if (isConfirmed) {
                this.deleteBook(bookId)
            }
        });
    }
    
    private loadBookListFromMock() {
        if (!mockData) return;
        this.isLoading = true;
        let tempBookList: Book[] = [];
        mockData.books.forEach(book => {
            let newBook = new Book(book);
            tempBookList.push(newBook);
        });
        this.sortBooksByName(tempBookList);
        this.bookList = tempBookList;
        this.tableDataSource = new MatTableDataSource(this.bookList);
        this.isLoading = false;
    }

    private sortBooksByName(bookList: Book[]) {
        return bookList.sort((bookA, bookB) => {
            if (bookA.name > bookB.name) {
                return 1;
            }
            if (bookA.name < bookB.name) {
                return -1;
            }
            return 0;
        })
    }

    private deleteBook(id: number) {
        this.snackbarService.showLoadingSnackbar("Deleting book...");
        setTimeout(() => {
            this.bookList = this.bookList.filter(book => book.id !== id);
            this.tableDataSource = new MatTableDataSource(this.bookList);
            this.snackbarService.showSuccessSnackbar("The book has been deleted");
        }, 3000);
        
    }

}
