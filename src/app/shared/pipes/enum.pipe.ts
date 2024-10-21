import { Pipe, PipeTransform } from '@angular/core';
import { ENUM_MOVEMENT_TYPE, ENUM_PROFILE } from '../utils/constants';


@Pipe({
    name: 'enum',
    standalone: true
})
export class EnumPipe implements PipeTransform {

    transform(value: unknown, enumName: string): unknown {
        switch (enumName) {
            case ENUM_PROFILE:
                return this.getProfileLabel(value);
            case ENUM_MOVEMENT_TYPE:
                return this.getMovementTypeLabel(value);
        }
        return null;
    }

    private getProfileLabel(value: unknown) {
        switch (value) {
            case 1:
                return "Administrator";
            case 2:
                return "Employee";
        }
        return null;
    }

    private getMovementTypeLabel(value: unknown) {
        switch (value) {
            case 1:
                return "Entry";
            case 2:
                return "Exit";
            case 3:
                return "Transfer";
            case 4:
                return "Return";
        }
        return null;
    }

}
