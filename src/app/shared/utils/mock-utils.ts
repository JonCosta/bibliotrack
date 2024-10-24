import * as bookMockData from "../../../assets/mock/books.json";
import * as userMockData from "../../../assets/mock/users.json";
import Book from "../../core/models/book";
import User from "../../core/models/user";

export const getMockUserList = () => {
    if (!userMockData) return [];
    let userList: User[] = [];
    userMockData.users.forEach(user => {
        let newUser = new User(user);
        userList.push(newUser);
    });
    
    return userList;
}

export const getMockBookList = () => {
    if (!bookMockData) return [];
    let bookList: Book[] = [];
    bookMockData.books.forEach(book => {
        let newUser = new Book(book);
        bookList.push(newUser);
    });
    
    return bookList;
}