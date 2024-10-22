import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementFiltersComponent } from './movement-filters.component';

describe('MovementFiltersComponent', () => {
  let component: MovementFiltersComponent;
  let fixture: ComponentFixture<MovementFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovementFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
