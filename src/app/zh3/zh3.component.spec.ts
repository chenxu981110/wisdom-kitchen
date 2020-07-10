import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zh3Component } from './zh3.component';

describe('Zh3Component', () => {
  let component: Zh3Component;
  let fixture: ComponentFixture<Zh3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zh3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zh3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
