import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zh2Component } from './zh2.component';

describe('Zh2Component', () => {
  let component: Zh2Component;
  let fixture: ComponentFixture<Zh2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zh2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zh2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
