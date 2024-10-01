import { Component } from '@angular/core';
import Profile from '../../../core/enums/profile';
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
    tableDataSource: User[] = [
        { 
            id: 1, 
            name: 'Administrador',
            profile: Profile.Administrator,
            email: 'jojo.admin@bibliotrack.com', 
            lastAccessAt: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: null,
            updatedBy: null,
            password: null
        }
    ];

    handleClickEdit(id: number) {
        console.log("Edit clicked", id);
        
    }

    handleClickDelete(id: number) {
        console.log("Delete clicked", id);
        
    }
}
