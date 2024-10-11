import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormSharedModule } from '../../../shared/modules/form-shared.module';

@Component({
    selector: 'app-publisher-form',
    standalone: true,
    imports: [
        FormSharedModule
    ],
    templateUrl: './publisher-form.component.html',
    styleUrl: './publisher-form.component.scss'
})
export class PublisherFormComponent {

    publisherForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.publisherForm = this.configureForm();
    }

    onSubmitForm() {
        let publisher = this.publisherForm.getRawValue();
        console.log(publisher);
    }

    private configureForm() {
        return this.formBuilder.group({
            id: [null],
            name: [null, Validators.required]
        });
    }

}
