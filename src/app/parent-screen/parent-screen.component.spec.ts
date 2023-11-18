import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentScreenComponent } from './parent-screen.component';

describe('ParentScreenComponent', () => {
  let component: ParentScreenComponent;
  let fixture: ComponentFixture<ParentScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentScreenComponent]
    });
    fixture = TestBed.createComponent(ParentScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
