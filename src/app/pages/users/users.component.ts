import { Component } from '@angular/core';
import { PageSharedModule } from '../../shared/modules/page-shared.module';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    PageSharedModule,
    UserListComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
