import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-book-form',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    templateUrl: './book-form.component.html',
    styleUrl: './book-form.component.scss'
})
export class BookFormComponent {

    bookForm = new FormGroup({
        name: new FormControl('')
    });

    ngOnInit() {
    }
}
