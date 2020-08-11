import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalytimerComponent } from './intervalytimer.component';

describe('IntervalytimerComponent', () => {
  let component: IntervalytimerComponent;
  let fixture: ComponentFixture<IntervalytimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalytimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalytimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
