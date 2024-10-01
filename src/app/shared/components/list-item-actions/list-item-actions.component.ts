import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'list-item-actions',
    standalone: true,
    imports: [
        MatIconModule,
        MatButtonModule,
        MatTooltipModule
    ],
    templateUrl: './list-item-actions.component.html',
    styleUrl: './list-item-actions.component.scss'
})
export class ListItemActionsComponent {

    @Input() elementId: number = 0;
    @Input() isShowDelete: boolean = true;
    @Input() isShowEdit: boolean = true;

    @Output() onClickDelete = new EventEmitter();
    @Output() onClickEdit = new EventEmitter();

    emitDelete() {
        if (this.isElementInformed())
            this.onClickDelete.emit(this.elementId);
    }

    emitEdit() {
        if (this.isElementInformed())
            this.onClickEdit.emit(this.elementId);
    }

    private isElementInformed() {
        return this.elementId !== 0;
    }

}
