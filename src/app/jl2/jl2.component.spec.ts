import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jl2Component } from './jl2.component';

describe('Jl2Component', () => {
  let component: Jl2Component;
  let fixture: ComponentFixture<Jl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
