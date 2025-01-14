import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEditingComponent } from './grid-editing.component';

describe('GridEditingComponent', () => {
  let component: GridEditingComponent;
  let fixture: ComponentFixture<GridEditingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridEditingComponent]
    });
    fixture = TestBed.createComponent(GridEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
