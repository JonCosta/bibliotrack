import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as mockData from "../../../../assets/mock/users.json";
import User from '../../../core/models/user';
import { ListSharedModule } from '../../../shared/modules/list-shared.module';

@Component({
    selector: 'app-user-list',
    standalone: true,
    imports: [
        ListSharedModule
    ],
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss'
})
export class UserListComponent {

    displayedColumnList: string[] = ['name', 'profile', 'email', 'lastAccessAt', 'actions'];
    isLoading: boolean = false;
    tableDataSource = new MatTableDataSource<User>([]);

    @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
    @ViewChild(MatSort) sort: MatSort = new MatSort();

    constructor() { }

    ngOnInit() {
        this.loadListFromMock();
    }

    ngAfterViewInit() {
        this.tableDataSource.paginator = this.paginator;
        this.tableDataSource.sort = this.sort;
    }

    handleClickEdit(id: number) {
        console.log("Edit clicked", id);

    }

    handleClickDelete(id: number) {
        console.log("Delete clicked", id);

    }

    private loadListFromMock() {
        if (!mockData) return;
        this.isLoading = true;
        let userList: User[] = [];
        mockData.users.forEach(user => {
            let newUser = new User(user);
            userList.push(newUser);
        });
        
        this.tableDataSource = new MatTableDataSource(userList);
        this.isLoading = false;
    }

}
