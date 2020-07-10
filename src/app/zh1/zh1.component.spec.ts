import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zh1Component } from './zh1.component';

describe('Zh1Component', () => {
  let component: Zh1Component;
  let fixture: ComponentFixture<Zh1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zh1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
