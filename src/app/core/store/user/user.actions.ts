import { createActionGroup, emptyProps, props } from "@ngrx/store";
import User from "../../models/user";

export const UserActions = createActionGroup({
    source: 'User',
    events: {
        'Load All Users': emptyProps(),
        'Load All Users Success': props<{ users: User[] }>(),
        'Load All Users Error': props<{ errorMessage: string }>(),
        'Load User': props<{ userId: number }>(),
        'Load User Success': props<{ user: User }>(),
        'Load User Error': props<{ user: User }>(),
        'Add User': props<{ user: User }>(),
        'Update User': props<{ user: User }>(),
        'Delete User': props<{ userId: number }>()
    }
});