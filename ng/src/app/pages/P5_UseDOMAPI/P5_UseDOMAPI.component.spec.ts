import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P5UseDOMAPIComponent } from './p5-use-domapi.component';

describe('P5UseDOMAPIComponent', () => {
  let component: P5UseDOMAPIComponent;
  let fixture: ComponentFixture<P5UseDOMAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P5UseDOMAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P5UseDOMAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
