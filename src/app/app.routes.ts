import { Routes } from '@angular/router';
import { AuthorFormComponent } from './pages/authors/author-form/author-form.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { BookFormComponent } from './pages/books/book-form/book-form.component';
import { BooksComponent } from './pages/books/books.component';
import { HomeComponent } from './pages/home/home.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PublisherFormComponent } from './pages/publishers/publisher-form/publisher-form.component';
import { PublishersComponent } from './pages/publishers/publishers.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'books',
        children: [
            {
                path:'',
                component: BooksComponent
            },
            {
                path: 'new', component: BookFormComponent,
                data: {
                    breadcrumb: 'New Book'
                }
            },
            {
                path: 'edit/:id', component: BookFormComponent,
                data: {
                    breadcrumb: 'Edit Book'
                }
            }
        ]
    },
    {
        path: 'authors',
        children: [
            {
                path: '',
                component: AuthorsComponent
            },
            {
                path: 'new', component: AuthorFormComponent
            },
            {
                path: 'edit/:id', component: AuthorFormComponent
            }
        ]
    },
    {
        path: 'publishers',
        children: [
            { path: '', component: PublishersComponent },
            { path: 'new', component: PublisherFormComponent },
            { path: 'edit/:id', component: PublisherFormComponent }
        ]
    },
    {
        path: 'users',
        children: [
            { path: '', component: UsersComponent },
            { path: 'new', component: UserFormComponent },
            { path: 'edit/:id', component: UserFormComponent }
        ]
    },
    {
        path: 'inventory',
        children: [
            { path: '', component: InventoryComponent }
        ]
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', component: PageNotFoundComponent
    }
];
