import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { usersInitialState } from './user.state';


export const usersReducer = createReducer(
    usersInitialState,
    on(UserActions.loadAllUsers, (state) => ({
        ...state,
        isLoading: true,
        errorMessage: null
    })),
    on(UserActions.loadAllUsersSuccess, (state, { users }) => ({
        ...state,
        isLoading: false,
        users
    })),
    on(UserActions.loadAllUsersError, (state, { errorMessage }) => ({
        ...state,
        isLoading: false,
        errorMessage
    })),
    on(UserActions.loadUser, (state) => ({
        ...state,
        isLoading: true,
        errorMessage: null
    })),
    on(UserActions.loadUserSuccess, (state, { user }) => ({
        ...state,
        isLoading: false,
        user
    })),
    on(UserActions.addUser, (state, { user }) => ({
        users: [...state.users, user],
        isLoading: false,
        errorMessage: null
    })),
    on(UserActions.updateUser, (state, { user }) => {
        let updatedUserList = state.users.map(u => {
            if (u.id === user.id) {
                return {...u, user};
            } else {
                return u;
            }
        });

        return {
            users: updatedUserList,
            isLoading: false,
            errorMessage: null
        }
    }),
    on(UserActions.deleteUser, (state, { userId }) => {
        let updatedUserList = state.users.filter(u => u.id !== userId);
        
        return {
            users: updatedUserList,
            isLoading: false,
            errorMessage: null
        }
    })
);

