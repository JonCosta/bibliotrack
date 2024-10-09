import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import Book from '../../../core/models/book';
import { ListSharedModule } from '../../../shared/modules/list-shared.module';

import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as mockData from "../../../../assets/mock/books.json";

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

    constructor() { }

    ngOnInit() {
        this.loadBookListFromMock();
    }

    ngAfterViewInit() {
        this.tableDataSource.paginator = this.paginator;
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

}
