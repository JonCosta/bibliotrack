import { Component } from '@angular/core';
import Book from '../../../core/models/book';
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

    displayedColumnList: string[] = ['name', 'author', 'publisher', 'actions'];
    tableDataSource: Book[] = [
        {
            id: 1,
            name: 'A Sociedade do Anel',
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: null,
            updatedBy: null
        },
        {
            id: 2,
            name: 'As Duas Torres',
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: null,
            updatedBy: null
        },
    ];

}
