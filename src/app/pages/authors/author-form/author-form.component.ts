import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormSharedModule } from '../../../shared/modules/form-shared.module';

@Component({
    selector: 'app-author-form',
    standalone: true,
    imports: [
        FormSharedModule
    ],
    templateUrl: './author-form.component.html',
    styleUrl: './author-form.component.scss'
})
export class AuthorFormComponent {

    authorForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.authorForm = this.configureForm();
    }

    onSubmitForm() {
        let author = this.authorForm.getRawValue();
        console.log(author);
    }

    private configureForm() {
        return this.formBuilder.group({
            id: [null],
            name: [null, Validators.required]
        });
    }

}
