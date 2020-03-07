import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P1StyleBlockComponent } from './p1-style-block.component';

describe('P1StyleBlockComponent', () => {
  let component: P1StyleBlockComponent;
  let fixture: ComponentFixture<P1StyleBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P1StyleBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P1StyleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
