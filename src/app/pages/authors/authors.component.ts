import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-authors',
    standalone: true,
    imports: [
        MatButtonModule,
        RouterModule
    ],
    templateUrl: './authors.component.html',
    styleUrl: './authors.component.scss'
})
export class AuthorsComponent {

}
