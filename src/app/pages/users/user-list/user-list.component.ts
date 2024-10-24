import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import User from '../../../core/models/user';
import { DialogService } from '../../../core/services/dialog.service';
import { SnackbarService } from '../../../core/services/snackbar.service';
import * as UserActions from '../../../core/store/user/user.actions';
import { selectUsers } from '../../../core/store/user/user.selector';
import { ListSharedModule } from '../../../shared/modules/list-shared.module';
import { getMockUserList } from '../../../shared/utils/mock-utils';

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
    users$: Observable<User[]> = of([]);

    readonly dialog = inject(MatDialog);

    @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
    @ViewChild(MatSort) sort: MatSort = new MatSort();

    constructor(
        private dialogService: DialogService,
        private snackbarService: SnackbarService,
        private store: Store
    ) {
        this.users$ = this.store.select(selectUsers);
    }

    ngOnInit() {
        this.store.dispatch(UserActions.loadAllUsers());
        this.users$.subscribe(res => {
            this.userList = res;
            this.tableDataSource = new MatTableDataSource(res);
        });
    }

    ngAfterViewInit() {
        this.tableDataSource.paginator = this.paginator;
        this.tableDataSource.sort = this.sort;
    }

    handleClickEdit(id: number) {

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
        this.isLoading = true;
        this.userList = getMockUserList();
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
