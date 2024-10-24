import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import User from "../../models/user";

export const loadAllUsers = createAction('[User] Load All Users');

export const addUser = createAction(
    '[User] Add User',
    props<{ user: User }>()
);

export const updateUser = createAction(
    '[User] Update User',
    props<{ user: User }>()
);

export const deleteUser = createAction(
    '[User] Delete User',
    props<{ userId: number }>()
);

export const loadAllUsersSuccess = createAction(
    '[User] Load Users Success',
    props<{ users: User[] }>()
);

export const loadAllUsersError = createAction(
    '[User] Load Users Error',
    props<{ errorMessage: string }>()
);

export const UserActions = createActionGroup({
    source: 'User',
    events: {
        'Load All Users': emptyProps(),
        'Load All Users Success': props<{ users: User[] }>(),
        'Load All Users Error': props<{ users: User[] }>(),
        'Load User': props<{ userId: number }>(),
        'Load User Success': props<{ user: User }>(),
        'Load User Error': props<{ user: User }>(),
        'Add User': props<{ user: User }>(),
        'Update User': props<{ user: User }>(),
        'Delete User': props<{ userId: number }>()
    }
});