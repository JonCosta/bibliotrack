import { Component } from '@angular/core';
import { PageSharedModule } from '../../shared/modules/page-shared.module';

@Component({
    selector: 'app-authors',
    standalone: true,
    imports: [
        PageSharedModule
    ],
    templateUrl: './authors.component.html',
    styleUrl: './authors.component.scss'
})
export class AuthorsComponent {

}
