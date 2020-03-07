import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P3FormulaComponent } from './p3-formula.component';

describe('P3FormulaComponent', () => {
  let component: P3FormulaComponent;
  let fixture: ComponentFixture<P3FormulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P3FormulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P3FormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
