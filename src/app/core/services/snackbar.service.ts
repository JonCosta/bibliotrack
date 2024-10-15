import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../../shared/components/custom-snackbar/custom-snackbar.component';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {

    private _snackBar = inject(MatSnackBar);
    
    readonly duration: number = 5000;
    readonly verticalPosition: MatSnackBarVerticalPosition = "bottom";
    readonly horizontalPosition: MatSnackBarHorizontalPosition = "right";

    constructor() { }

    showLoadingSnackbar(message: string)  {
        this._snackBar.openFromComponent(CustomSnackbarComponent, {
            data: {
                message: message,
                isLoading: true
            },
            duration: this.duration,
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition
        });
    }

    showSuccessSnackbar(message: string) {
        this._snackBar.openFromComponent(CustomSnackbarComponent, {
            data: {
                message: message,
                isSuccess: true
            },
            duration: this.duration,
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition
        });
    }

    showErrorSnackbar(message: string) {
        this._snackBar.openFromComponent(CustomSnackbarComponent, {
            data: {
                message: message,
                isError: true
            },
            duration: this.duration,
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition
        });
    }
}
