import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P6BindingInputComponent } from './p6-binding-input.component';

describe('P6BindingInputComponent', () => {
  let component: P6BindingInputComponent;
  let fixture: ComponentFixture<P6BindingInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P6BindingInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P6BindingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
