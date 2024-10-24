import User from "../../models/user";

export interface UserState {
    users: User[];
    isLoading: boolean;
    errorMessage: string | null;
}

export const usersInitialState: UserState = {
    users: [],
    isLoading: false,
    errorMessage: null
};
