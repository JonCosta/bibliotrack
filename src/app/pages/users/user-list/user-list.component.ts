import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as mockData from "../../../../assets/mock/users.json";
import User from '../../../core/models/user';
import { ListSharedModule } from '../../../shared/modules/list-shared.module';
import { sortObjectsByName } from '../../../shared/utils/utils';

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

    constructor() { }

    ngOnInit() {
        this.loadListFromMock();
    }

    ngAfterViewInit() {
        this.tableDataSource.paginator = this.paginator;
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
        sortObjectsByName(userList);
        this.tableDataSource = new MatTableDataSource(userList);
        this.isLoading = false;
    }

}
