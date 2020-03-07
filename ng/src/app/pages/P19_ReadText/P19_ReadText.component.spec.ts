import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P19ReadTextComponent } from './p19-read-text.component';

describe('P19ReadTextComponent', () => {
  let component: P19ReadTextComponent;
  let fixture: ComponentFixture<P19ReadTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P19ReadTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P19ReadTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
