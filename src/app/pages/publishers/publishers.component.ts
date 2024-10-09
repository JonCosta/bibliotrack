import { Component } from '@angular/core';
import { PageSharedModule } from '../../shared/modules/page-shared.module';
import { PublisherListComponent } from './publisher-list/publisher-list.component';

@Component({
    selector: 'app-publishers',
    standalone: true,
    imports: [
        PageSharedModule,
        PublisherListComponent
    ],
    templateUrl: './publishers.component.html',
    styleUrl: './publishers.component.scss'
})
export class PublishersComponent {

}
