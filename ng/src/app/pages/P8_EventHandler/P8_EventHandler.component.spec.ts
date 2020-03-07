import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P8EventHandlerComponent } from './p8-event-handler.component';

describe('P8EventHandlerComponent', () => {
  let component: P8EventHandlerComponent;
  let fixture: ComponentFixture<P8EventHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P8EventHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P8EventHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
