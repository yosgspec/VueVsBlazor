import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P9OnChangeEventComponent } from './p9-on-change-event.component';

describe('P9OnChangeEventComponent', () => {
  let component: P9OnChangeEventComponent;
  let fixture: ComponentFixture<P9OnChangeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P9OnChangeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P9OnChangeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
