import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2ScriptBlockComponent } from './p2-script-block.component';

describe('P2ScriptBlockComponent', () => {
  let component: P2ScriptBlockComponent;
  let fixture: ComponentFixture<P2ScriptBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2ScriptBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2ScriptBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
