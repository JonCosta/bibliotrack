import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    private _dialog = inject(MatDialog);

    constructor() { }

    createConfirmationDialog(title: string, message: string) {
        const dialogRef = this._dialog.open(ConfirmDialogComponent, {
            data: {
                title: title,
                message: message,
                isDelete: true
            }
        });

        return dialogRef;
    }
}
