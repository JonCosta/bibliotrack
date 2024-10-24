import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { getMockUserList } from '../../../shared/utils/mock-utils';
import { UserActions } from './user.actions';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions
    ) { }

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadAllUsers),
            mergeMap(() => {
                const mockUserList = getMockUserList();
                return of(mockUserList).pipe(
                    map((users) => UserActions.loadAllUsersSuccess({ users })),
                    catchError((err) => of(UserActions.loadAllUsersError({ errorMessage: err.message })))
                )
            })
        )
    );

}
