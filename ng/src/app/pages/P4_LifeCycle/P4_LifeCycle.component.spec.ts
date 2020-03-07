import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P4LifeCycle.VueComponent } from './p4-life-cycle.vue.component';

describe('P4LifeCycle.VueComponent', () => {
  let component: P4LifeCycle.VueComponent;
  let fixture: ComponentFixture<P4LifeCycle.VueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P4LifeCycle.VueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P4LifeCycle.VueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
