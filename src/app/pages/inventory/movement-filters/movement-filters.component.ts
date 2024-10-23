import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import moment from 'moment';
import * as mockData from "../../../../assets/mock/books.json";
import MovementType from '../../../core/enums/movement-type';
import Book from '../../../core/models/book';
import MovementFilter from '../../../core/types/MovementFilter';
import { FilterSharedModule } from '../../../shared/modules/filter-shared.module';
import { sortObjectsByName as sortObjectListByName } from '../../../shared/utils/utils';

@Component({
    selector: 'app-movement-filters',
    standalone: true,
    imports: [
        FilterSharedModule
    ],
    templateUrl: './movement-filters.component.html',
    styleUrl: './movement-filters.component.scss'
})
export class MovementFiltersComponent {

    filterForm: FormGroup;
    bookList: Book[] = [];
    movementTypeList: MovementType[] = [];

    @Output() onFilterUpdated = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.filterForm = this.configureForm();
    }

    ngOnInit() {
        this.loadBookListFromMock();
        this.movementTypeList = this.loadMovementTypeList();
    }

    ngAfterViewInit() {
        this.updateFilter();
    }

    updateFilter() {
        const selectedFilters: MovementFilter = this.getFiltersFromForm();
        this.onFilterUpdated.emit(selectedFilters);
    }

    onChangeEndDate(event: any) {
        if (event.value) {
            this.updateFilter();
        }
    }

    private configureForm() {
        let currentMoment = moment();
        let firstDayOfMonth = currentMoment.startOf("year").toDate();
        let lastDayOfMonth = currentMoment.endOf("year").toDate();
        return this.formBuilder.group({
            startDate: [firstDayOfMonth],
            endDate: [lastDayOfMonth],
            type: [null],
            book: [null]
        })
    }

    private loadMovementTypeList() {
        return Object.values(MovementType).filter(value => typeof value === 'number');
    }

    private loadBookListFromMock() {
        if (!mockData) return;
        let tempBookList: Book[] = [];
        mockData.books.forEach(book => {
            let newBook = new Book(book);
            tempBookList.push(newBook);
        });
        sortObjectListByName(tempBookList);
        this.bookList = tempBookList;
    }

    private getFiltersFromForm(): MovementFilter {
        const formValues = this.filterForm.getRawValue();
        const selectedFilters: MovementFilter = {
            startDate: formValues.startDate,
            endDate: formValues.endDate,
            type: formValues.type,
            book: formValues.book
        };
        return selectedFilters;
    }

}