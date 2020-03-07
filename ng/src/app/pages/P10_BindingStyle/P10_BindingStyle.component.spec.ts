import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P10BindingStyleComponent } from './p10-binding-style.component';

describe('P10BindingStyleComponent', () => {
  let component: P10BindingStyleComponent;
  let fixture: ComponentFixture<P10BindingStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P10BindingStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P10BindingStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
