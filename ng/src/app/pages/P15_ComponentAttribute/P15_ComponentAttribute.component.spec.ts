import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P15ComponentAttributeComponent } from './p15-component-attribute.component';

describe('P15ComponentAttributeComponent', () => {
  let component: P15ComponentAttributeComponent;
  let fixture: ComponentFixture<P15ComponentAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P15ComponentAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P15ComponentAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
