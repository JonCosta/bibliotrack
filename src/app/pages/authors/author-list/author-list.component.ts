import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as mockData from "../../../../assets/mock/authors.json";
import Author from '../../../core/models/author';
import { ListSharedModule } from '../../../shared/modules/list-shared.module';
import { sortObjectsByName } from '../../../shared/utils/utils';

@Component({
    selector: 'app-author-list',
    standalone: true,
    imports: [
        ListSharedModule
    ],
    templateUrl: './author-list.component.html',
    styleUrl: './author-list.component.scss'
})
export class AuthorListComponent {

    displayedColumnList: string[] = ['name', 'createdAt', 'updatedAt', 'actions'];
    isLoading: boolean = false;
    tableDataSource = new MatTableDataSource<Author>([]);

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
        let authorList: Author[] = [];
        mockData.authors.forEach(mockAuthor => {
            let author = new Author(mockAuthor);
            authorList.push(author);
        });
        sortObjectsByName(authorList);
        this.tableDataSource = new MatTableDataSource(authorList);
        this.isLoading = false;
    }

}
