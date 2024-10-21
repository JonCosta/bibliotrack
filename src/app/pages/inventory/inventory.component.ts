import { Component } from '@angular/core';
import { PageSharedModule } from '../../shared/modules/page-shared.module';
import { MovementListComponent } from './movement-list/movement-list.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    PageSharedModule,
    MovementListComponent
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {

}
