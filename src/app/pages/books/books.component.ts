import { Component } from '@angular/core';
import { PageSharedModule } from '../../shared/modules/page-shared.module';
import { BookListComponent } from './book-list/book-list.component';

@Component({
    selector: 'app-books',
    standalone: true,
    imports: [
        PageSharedModule,
        BookListComponent
    ],
    templateUrl: './books.component.html',
    styleUrl: './books.component.scss'
})
export class BooksComponent {

}
