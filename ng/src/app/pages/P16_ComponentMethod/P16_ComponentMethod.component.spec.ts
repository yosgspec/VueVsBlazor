import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P16ComponentMethodComponent } from './p16-component-method.component';

describe('P16ComponentMethodComponent', () => {
  let component: P16ComponentMethodComponent;
  let fixture: ComponentFixture<P16ComponentMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P16ComponentMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P16ComponentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
