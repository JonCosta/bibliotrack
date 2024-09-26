import { Routes } from '@angular/router';
import { AuthorsComponent } from './pages/authors/authors.component';
import { BookFormComponent } from './pages/books/book-form/book-form.component';
import { BooksComponent } from './pages/books/books.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
    {
        path: 'books',
        children: [
            { path: '', component: BooksComponent },
            { path: 'new', component: BookFormComponent },
            { path: 'edit/:id', component: BookFormComponent }
        ]
    },
    {
        path: 'authors',
        component: AuthorsComponent
    },
    {
        path: 'users',
        component: UsersComponent
    }
];
