import { Component } from '@angular/core';
import { PageSharedModule } from '../../shared/modules/page-shared.module';
import { AuthorListComponent } from './author-list/author-list.component';

@Component({
    selector: 'app-authors',
    standalone: true,
    imports: [
        PageSharedModule,
        AuthorListComponent
    ],
    templateUrl: './authors.component.html',
    styleUrl: './authors.component.scss'
})
export class AuthorsComponent {

}
