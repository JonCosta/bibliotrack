import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import IdName from '../../../core/models/id-name';
import { FormSharedModule } from '../../../shared/modules/form-shared.module';

import * as authorMockData from "../../../../assets/mock/authors.json";
import * as publisherMockData from "../../../../assets/mock/publishers.json";
import { sortObjectsByName } from '../../../shared/utils/utils';


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

    bookForm: FormGroup;
    authorList: IdName[];
    publisherList: IdName[];

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.bookForm = this.configureForm();
        this.authorList = this.loadAuthorList();
        this.publisherList = this.loadPublisherList();
    }

    ngOnInit() {
    }

    onSubmitForm() {
        let user = this.bookForm.getRawValue();
    }

    private configureForm() {
        return this.formBuilder.group({
            id: [null],
            name: [null, Validators.required],
            author: [null, Validators.required],
            publisher: [null, Validators.required]
        })
    }

    private loadAuthorList() {
        if (!authorMockData) return [];
        let authorList: IdName[] = [];
        authorMockData.authors.forEach(mockAuthor => {
            let author = new IdName(mockAuthor);
            authorList.push(author);
        });
        sortObjectsByName(authorList);
        return authorList;
    }

    private loadPublisherList() {
        if (!publisherMockData) return [];
        let publisherList: IdName[] = [];
        publisherMockData.publishers.forEach(mockPublisher => {
            let publisher = new IdName(mockPublisher);
            publisherList.push(publisher);
        });
        sortObjectsByName(publisherList);
        return publisherList;
    }
}
