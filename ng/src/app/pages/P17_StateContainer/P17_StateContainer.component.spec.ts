import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P17StateContainerComponent } from './p17-state-container.component';

describe('P17StateContainerComponent', () => {
  let component: P17StateContainerComponent;
  let fixture: ComponentFixture<P17StateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P17StateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P17StateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
