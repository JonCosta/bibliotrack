import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormSharedModule } from '../../../shared/modules/form-shared.module';

@Component({
    selector: 'app-book-form',
    standalone: true,
    imports: [
        FormSharedModule
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
