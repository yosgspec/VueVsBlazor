import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P7BindingInputOneWayComponent } from './p7-binding-input-one-way.component';

describe('P7BindingInputOneWayComponent', () => {
  let component: P7BindingInputOneWayComponent;
  let fixture: ComponentFixture<P7BindingInputOneWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P7BindingInputOneWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P7BindingInputOneWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
