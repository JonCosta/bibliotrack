import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
    selector: 'app-custom-snackbar',
    standalone: true,
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule
    ],
    templateUrl: './custom-snackbar.component.html',
    styleUrl: './custom-snackbar.component.scss'
})
export class CustomSnackbarComponent {

    constructor(
        public snackBarRef: MatSnackBarRef<CustomSnackbarComponent>,
        @Inject(MAT_SNACK_BAR_DATA) public data: any
    ) { }


}
