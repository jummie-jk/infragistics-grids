import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAdvancedFilteringComponent } from './grid-advanced-filtering.component';

describe('GridAdvancedFilteringComponent', () => {
  let component: GridAdvancedFilteringComponent;
  let fixture: ComponentFixture<GridAdvancedFilteringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridAdvancedFilteringComponent]
    });
    fixture = TestBed.createComponent(GridAdvancedFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
