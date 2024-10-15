import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as mockData from "../../../../assets/mock/users.json";
import User from '../../../core/models/user';
import { DialogService } from '../../../core/services/dialog.service';
import { SnackbarService } from '../../../core/services/snackbar.service';
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
    userList: User[] = [];
    tableDataSource = new MatTableDataSource<User>([]);

    readonly dialog = inject(MatDialog);

    @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
    @ViewChild(MatSort) sort: MatSort = new MatSort();

    constructor(
        private dialogService: DialogService,
        private snackbarService: SnackbarService
    ) { }

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

    confirmDeleteUser(id: number) {
        const dialogRef = this.dialogService.createConfirmationDialog(
            "Delete User",
            "Are you sure you wish to delete this user?"
        );

        dialogRef.afterClosed().subscribe(isConfirmed => {
            if (isConfirmed) {
                this.deleteUser(id)
            }
        });
    }

    private loadListFromMock() {
        if (!mockData) return;
        this.isLoading = true;
        this.userList = [];
        mockData.users.forEach(user => {
            let newUser = new User(user);
            this.userList.push(newUser);
        });
        
        this.tableDataSource = new MatTableDataSource(this.userList);
        this.isLoading = false;
    }

    private deleteUser(id: number) {
        this.snackbarService.showLoadingSnackbar("Deleting  user...");
        setTimeout(() => {
            this.userList = this.userList.filter(user => user.id !== id);
            this.tableDataSource = new MatTableDataSource(this.userList);
            this.tableDataSource.paginator = this.paginator;
            this.tableDataSource.sort = this.sort;
            this.snackbarService.showSuccessSnackbar("The user has been deleted");
        }, 3000);
        
    }

}
