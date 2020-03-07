import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P11BindingClassComponent } from './p11-binding-class.component';

describe('P11BindingClassComponent', () => {
  let component: P11BindingClassComponent;
  let fixture: ComponentFixture<P11BindingClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P11BindingClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P11BindingClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
