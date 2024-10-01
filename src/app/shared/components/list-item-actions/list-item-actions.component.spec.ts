import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemActionsComponent } from './list-item-actions.component';

describe('ListItemActionsComponent', () => {
  let component: ListItemActionsComponent;
  let fixture: ComponentFixture<ListItemActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListItemActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
