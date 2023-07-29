import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentworkComponent } from './componentwork.component';

describe('ComponentworkComponent', () => {
  let component: ComponentworkComponent;
  let fixture: ComponentFixture<ComponentworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentworkComponent]
    });
    fixture = TestBed.createComponent(ComponentworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
