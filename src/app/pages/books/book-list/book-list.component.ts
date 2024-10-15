import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import Book from '../../../core/models/book';
import { ListSharedModule } from '../../../shared/modules/list-shared.module';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as mockData from "../../../../assets/mock/books.json";
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { CustomSnackbarComponent } from '../../../shared/components/custom-snackbar/custom-snackbar.component';

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
    
    private _snackBar = inject(MatSnackBar);
    readonly dialog = inject(MatDialog);

    @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
    @ViewChild(MatSort) sort: MatSort = new MatSort();

    constructor() { }

    ngOnInit() {
        this.loadBookListFromMock();
    }

    ngAfterViewInit() {
        this.tableDataSource.paginator = this.paginator;
        this.tableDataSource.sort = this.sort;
    }

    confirmDeleteBook(bookId: number) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: {
                message: "Are you sure you wish to delete this item?",
                title: "Delete Book",
                isDelete: true
            }
        });

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
        this.showLoadingSnackbar();
        setTimeout(() => {
            this.bookList = this.bookList.filter(book => book.id !== id);
            this.tableDataSource = new MatTableDataSource(this.bookList);
            this.showSuccessSnackbar();
        }, 3000);
        
    }

    private showLoadingSnackbar()  {
        this._snackBar.openFromComponent(CustomSnackbarComponent, {
            data: {
                message: "Deleting...",
                isLoading: true
            },
            duration: 3000,
            verticalPosition: "bottom",
            horizontalPosition: "right"
        });
    }

    private showSuccessSnackbar() {
        this._snackBar.openFromComponent(CustomSnackbarComponent, {
            data: {
                message: "Book deleted successfully",
                isSuccess: true
            },
            duration: 5000,
            verticalPosition: "bottom",
            horizontalPosition: "right"
        });
    }

}
