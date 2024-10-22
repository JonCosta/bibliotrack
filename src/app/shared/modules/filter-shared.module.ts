import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EnumPipe } from '../pipes/enum.pipe';

@NgModule({
    imports: [
        CommonModule,
        EnumPipe,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        ReactiveFormsModule,
    ],
    exports: [
        CommonModule,
        EnumPipe,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        ReactiveFormsModule,
    ]
})
export class FilterSharedModule { }
