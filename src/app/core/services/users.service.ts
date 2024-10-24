import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { getMockUserList } from "../../shared/utils/mock-utils";
import User from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    getAllUsers(): Observable<User[]> {
        let userList: User[] = getMockUserList();
        return of(userList);
    }

}