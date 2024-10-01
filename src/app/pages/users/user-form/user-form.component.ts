import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Profile from '../../../core/enums/profile';
import { FormSharedModule } from '../../../shared/modules/form-shared.module';

@Component({
    selector: 'app-user-form',
    standalone: true,
    imports: [
        FormSharedModule
    ],
    templateUrl: './user-form.component.html',
    styleUrl: './user-form.component.scss'
})
export class UserFormComponent {

    profileList: any[];
    userForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.profileList = this.configureProfileList();
        this.userForm = this.configureForm();
    }

    onSubmitForm() {
        let user = this.userForm.getRawValue();
        console.log(user);
    }

    private configureForm() {
        return this.formBuilder.group({
            id: [null],
            name: [null, Validators.required],
            profile: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required]
        })
    }

    private configureProfileList() {
        return Object.values(Profile).filter(value => typeof value === 'number');
    }
}
