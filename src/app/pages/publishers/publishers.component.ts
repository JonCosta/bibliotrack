import { Component } from '@angular/core';
import { PageSharedModule } from '../../shared/modules/page-shared.module';

@Component({
    selector: 'app-publishers',
    standalone: true,
    imports: [
        PageSharedModule
    ],
    templateUrl: './publishers.component.html',
    styleUrl: './publishers.component.scss'
})
export class PublishersComponent {

}
