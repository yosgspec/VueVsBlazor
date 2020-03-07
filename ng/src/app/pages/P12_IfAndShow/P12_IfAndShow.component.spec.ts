import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P12IfAndShowComponent } from './p12-if-and-show.component';

describe('P12IfAndShowComponent', () => {
  let component: P12IfAndShowComponent;
  let fixture: ComponentFixture<P12IfAndShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P12IfAndShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P12IfAndShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
