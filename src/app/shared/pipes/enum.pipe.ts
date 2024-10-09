import { Pipe, PipeTransform } from '@angular/core';
import { ENUM_PROFILE } from '../utils/constants';


@Pipe({
    name: 'enum',
    standalone: true
})
export class EnumPipe implements PipeTransform {

    transform(value: unknown, enumName: string): unknown {
        switch (enumName) {
            case ENUM_PROFILE:
                return this.getProfileLabel(value);
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

}
