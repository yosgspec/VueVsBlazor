import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P14AddComponentComponent } from './p14-add-component.component';

describe('P14AddComponentComponent', () => {
  let component: P14AddComponentComponent;
  let fixture: ComponentFixture<P14AddComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P14AddComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P14AddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
