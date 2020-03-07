import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P13ForEachLoopComponent } from './p13-for-each-loop.component';

describe('P13ForEachLoopComponent', () => {
  let component: P13ForEachLoopComponent;
  let fixture: ComponentFixture<P13ForEachLoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P13ForEachLoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P13ForEachLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
