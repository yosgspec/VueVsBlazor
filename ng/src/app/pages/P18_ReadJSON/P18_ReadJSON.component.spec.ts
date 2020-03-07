import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P18ReadJSONComponent } from './p18-read-json.component';

describe('P18ReadJSONComponent', () => {
  let component: P18ReadJSONComponent;
  let fixture: ComponentFixture<P18ReadJSONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P18ReadJSONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P18ReadJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
